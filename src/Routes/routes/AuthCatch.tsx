import React from "react";
import { BaseRedirect } from "Components/BaseRedirect";
import { Redirect } from "Routes/mixins";

export const AuthCatch = new Redirect({
  path: "/login/*",
  element: <BaseRedirect base="/login" />,
});
