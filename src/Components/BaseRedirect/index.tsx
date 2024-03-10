import React, { memo } from "react";
import { Navigate } from "react-router-dom";

export const BaseRedirect = memo(
  function BaseRedirect({ base }: Props) {
    return <Navigate to={base} />;
  },
  () => true,
);

interface Props {
  base: string;
}
