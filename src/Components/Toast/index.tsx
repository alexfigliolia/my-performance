import React, { memo, useCallback, useState } from "react";
import { useOnMount } from "Hooks/useOnMount";
import { useTaskQueue } from "Hooks/useTaskQueue";
import { X } from "Icons";
import { type IToast } from "Models/Toasts";
import { Toasts } from "State/Toasts";
import { Controller } from "./Controller";
import type { Visibility } from "./types";
import "./styles.scss";

export const Toast = memo(
  function Toast({ id, type, icon, title, message }: IToast) {
    const TaskQueue = useTaskQueue();
    const [state, setState] = useState<Visibility>("invisible");

    useOnMount(() => {
      TaskQueue.deferTask(() => {
        setState("visible");
      }, 100);
      TaskQueue.deferTask(() => {
        dismiss();
      }, 5000);
    });

    const dismiss = useCallback(() => {
      setState("invisible");
      TaskQueue.deferTask(() => {
        Toasts.delete(id);
      }, 1250);
    }, [id, TaskQueue]);

    return (
      <div className={`toast ${type} ${state}`}>
        <div className="t-bubble">
          {icon || Controller.getIcon(type)}
          <span>{type}</span>
        </div>
        <div className="t-card">
          <button onClick={dismiss}>
            <X />
          </button>
          <div>
            {title && <h6>{title}</h6>}
            <p>{message}</p>
          </div>
        </div>
      </div>
    );
  },
  (pp, np) => pp.id === np.id,
);
