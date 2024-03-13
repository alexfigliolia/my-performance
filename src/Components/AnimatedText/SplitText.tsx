import type { CSSProperties } from "react";
import React from "react";

export function SplitText({
  text,
  stagger,
  style = [],
  className = "",
}: Props) {
  let counter = -1;
  return (
    <div className={`split-text ${className}`} aria-hidden={true}>
      {text.map((char, i) => {
        if (char === " ") {
          return <span key={`${char}-${i}`}>&nbsp;</span>;
        }
        return (
          <span
            key={`${char}-${i}`}
            style={{
              ...style[++counter],
              transitionDelay: `${stagger * counter}ms`,
            }}>
            {char}
          </span>
        );
      })}
    </div>
  );
}

interface Props {
  text: string[];
  stagger: number;
  className?: string;
  style?: CSSProperties[];
}
