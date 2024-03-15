import React, { memo } from "react";
import { useUser } from "State/User";
import "./styles.scss";

export const Greeting = memo(
  function Greeting({ text }: Props) {
    const name = useUser(state => state.name);
    return (
      <div className="greeting">
        <span>Hello, {name}</span>
        <span>{text}</span>
      </div>
    );
  },
  (pp, np) => pp.text === np.text,
);

interface Props {
  text: string;
}
