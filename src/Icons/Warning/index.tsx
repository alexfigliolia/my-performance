import React, { memo } from "react";
import type { OptionalChildren } from "Types/React";
import "./styles.scss";

export const Warning = memo(
  function Warning({ children }: OptionalChildren) {
    return (
      <svg
        width="800px"
        height="800px"
        viewBox="0 0 32 32"
        className="warning-icon"
        xmlns="http://www.w3.org/2000/svg"
        fill="none">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M15.12 4.623a1 1 0 011.76 0l11.32 20.9A1 1 0 0127.321 27H4.679a1 1 0 01-.88-1.476l11.322-20.9zM16 18v-6"
        />
        <path d="M17.5 22.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
        {children}
      </svg>
    );
  },
  () => true,
);
