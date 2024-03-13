import React, { memo, useEffect, useState } from "react";
import { useController } from "Hooks/useController";
import { useOnMount } from "Hooks/useOnMount";
import { Controller } from "./Controller";
import type { NodeList } from "./types";
import "./styles.scss";

export const Counter = memo(function Counter({
  value,
  delay = 200,
  duration = 1000,
}: Props) {
  const [animating, animate] = useState(false);
  const [nodeList, setNodeList] = useState<NodeList[]>([]);
  const controller = useController(new Controller(duration));
  const [height, setHeight] = useState<number | undefined>(undefined);

  useOnMount(() => {
    setHeight(controller.getHeight());
  });

  useEffect(() => {
    setNodeList(controller.setup(value));
    controller.activate(() => animate(true), delay);
  }, [delay, value, controller]);

  return (
    <div className="counter" style={{ height }} aria-label={value.toString()}>
      <div
        aria-hidden={true}
        className="shadow"
        ref={controller.cacheReference}>
        {value}
      </div>
      {nodeList.map((token, index) => {
        const style = controller.getTransition(animating, token.value);
        return (
          <div
            style={style}
            className="token"
            aria-hidden={true}
            key={`${token.value}-${index}`}>
            <div />
            {token.children.map((child, i) => {
              return <div key={i}>{child}</div>;
            })}
          </div>
        );
      })}
    </div>
  );
});

interface Props {
  delay?: number;
  duration?: number;
  value: string | number;
}
