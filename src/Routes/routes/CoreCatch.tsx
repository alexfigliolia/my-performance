import React from "react";
import { BaseRedirect } from "Components/BaseRedirect";
import { Redirect } from "Routes/mixins";

export const CoreCatch = new Redirect({
  path: "*",
  element: <BaseRedirect base="/" />,
});
