import type { HTMLAttributes } from "react";
import React, { memo, useMemo } from "react";
import { Gradient } from "Tools/Gradient";
import { SplitText } from "./SplitText";
import "./styles.scss";

export const AnimatedText = memo(function AnimatedText({
  text,
  color1,
  color2,
  stagger = 30,
  ...rest
}: Props) {
  const split = useMemo(() => text.split(""), [text]);
  const steps = useMemo(
    () => split.filter(char => char !== " ").length,
    [split],
  );
  const gradient = useMemo(() => {
    return new Gradient(color1, color2, steps)
      .generate()
      .map(color => ({ color }));
  }, [steps, color1, color2]);
  return (
    <div className="animated-text">
      <div className="aria" {...rest}>
        {text}
      </div>
      <SplitText text={split} stagger={stagger} />
      <SplitText
        text={split}
        style={gradient}
        stagger={stagger}
        className="animated"
      />
    </div>
  );
});

interface Props extends HTMLAttributes<HTMLDivElement> {
  text: string;
  color1: string;
  color2: string;
  stagger?: number;
}
