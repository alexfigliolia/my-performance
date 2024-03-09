import React, { memo } from "react";
import { Toast } from "Components/Toast";
import { useToasts } from "State/Toasts";
import type { PropLess } from "Types/React";
import "./styles.scss";

export const Toaster = memo(
  function Toaster(_: PropLess) {
    const toasts = useToasts(state => state.toasts);
    return (
      <div className="toaster">
        {toasts.mapReverse(toast => {
          return <Toast key={toast.id} {...toast} />;
        })}
      </div>
    );
  },
  () => true,
);
