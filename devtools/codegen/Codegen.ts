import { writeFileSync } from "fs";
import path from "path";
import { ChildProcess } from "@figliolia/child-process";
import "dotenv/config";

export class CodeGen {
  private static TYPES_DIRECTORY = "src/GQL/Types";
  public static async run() {
    await this.getSchema();
    await this.generateTypes();
    this.fixEntryPoint();
    await this.lint();
  }

  private static getSchema() {
    return ChildProcess.execute(
      `npx -p @apollo/rover rover graph introspect http://localhost:4000/graphql --output ${this.schemaPath}`,
    );
  }

  private static generateTypes() {
    return ChildProcess.execute(`graphql-codegen`);
  }

  private static fixEntryPoint() {
    writeFileSync(
      this.typesEntrypoint,
      [
        'export * from "./fragment-masking";',
        'export * from "./gql";',
        'export * from "./graphql";',
      ].join("\n"),
    );
  }

  private static lint() {
    return ChildProcess.execute(
      `npx eslint --fix --ext .ts ${this.TYPES_DIRECTORY}`,
    );
  }

  private static get schemaPath() {
    return path.resolve(
      process.cwd(),
      `${this.TYPES_DIRECTORY}/graphql-schema.graphql`,
    );
  }

  private static get typesEntrypoint() {
    return path.resolve(process.cwd(), `${this.TYPES_DIRECTORY}/index.ts`);
  }
}
