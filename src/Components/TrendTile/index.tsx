import React, { useCallback, useMemo } from "react";
import { Down } from "Icons/Down";
import { Up } from "Icons/Up";
import { Numbers } from "Tools/Numbers";
import { ComparisonRing } from "./ComparisonRing";
import "./styles.scss";

export function TrendTile({
  id,
  type,
  trend,
  total,
  color1,
  color2,
  contributed,
}: Props) {
  const progress = useMemo(
    () => Math.floor((contributed * 100) / total),
    [contributed, total],
  );

  const getIcon = useCallback((trend: number) => {
    if (trend >= 0) {
      return <Up />;
    }
    return <Down />;
  }, []);

  return (
    <div className={`trend-tile ${type}`}>
      <div className="stats">
        <div className="trend">
          {getIcon(trend)}
          <div className="wow">
            <span>{Math.round(trend)}%</span>
            <span>Month over Month</span>
          </div>
        </div>
        <ComparisonRing
          id={id}
          color1={color1}
          color2={color2}
          progress={progress}
        />
      </div>
      <div className="description">
        {Numbers.format(contributed)} of out {Numbers.format(total)} {type}
      </div>
    </div>
  );
}

interface Props {
  id: string;
  type: string;
  total: number;
  trend: number;
  color1: string;
  color2: string;
  contributed: number;
}
