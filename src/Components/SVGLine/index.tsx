import React, { memo } from "react";
import type { OptionalChildren } from "Types/React";
import "./styles.scss";

export const SVGLine = memo(function SVGLine({ children }: OptionalChildren) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="0 0 800 400"
      className="decorative-line"
      preserveAspectRatio="none">
      <path
        fill="none"
        strokeLinecap="round"
        d="M91.03138732910156,251.12107849121094C110.20478157043456,233.45740071614583,166.28400850931803,148.6038850657145,204.9327392578125,146.18833923339844C243.58147000630697,143.77279340108237,278.80867665608724,238.73393241882323,320.6278076171875,236.77130126953125C362.44693857828776,234.80867012023927,414.71448689778646,135.2840012359619,453.36322021484375,134.52914428710938C492.01195353190104,133.77428733825684,515.3497971598307,232.588944829305,550.2242431640625,232.28700256347656C585.0986891682943,231.98506029764812,641.968639831543,149.49327626546224,660.5381469726562,132.7354278564453"
      />
      {children}
    </svg>
  );
});