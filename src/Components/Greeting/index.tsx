import React, { memo } from "react";
import { useUser } from "State/User";
import "./styles.scss";

export const Greeting = memo(
  function Greeting({ type }: Props) {
    const name = useUser(state => state.name);
    const plural = type.endsWith("s");
    return (
      <div className="greeting">
        <span>Hello, {name}</span>
        <span>
          {plural ? "These are" : "This is"} your {type}
        </span>
      </div>
    );
  },
  () => true,
);

interface Props {
  type: string;
}
