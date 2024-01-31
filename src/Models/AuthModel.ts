import { BaseModel } from "./BaseModel";
import type { IAuth } from "./types";

export class AuthModel extends BaseModel<IAuth> {
  constructor() {
    super("Authentication", {
      name: "Alex Figliolia",
      token: "",
      role: "admin",
      memberName: "Alex",
    });
  }
}
