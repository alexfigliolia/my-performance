import type { ButtonHTMLAttributes } from "react";
import React, { memo } from "react";
import { Add } from "Icons/Add";
import "./styles.scss";

export const AddButton = memo(
  function AddButton(props: ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
      <button className="add-button" {...props}>
        <Add />
      </button>
    );
  },
  () => true,
);
