import { DevServer } from "./DevServer";

(async () => {
  await DevServer.start();
})().catch(console.log);
