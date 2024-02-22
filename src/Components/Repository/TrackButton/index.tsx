import React, { memo, useCallback, useState } from "react";
import { TriangleLoader } from "Components/Loaders";
import { Check } from "Icons/Check";
import { Projects } from "State/Projects";
import "./styles.scss";

export const TrackButton = memo(
  function TrackButton({ id, color, tracked }: Props) {
    const [loading, setLoading] = useState(false);

    const trackRepository = useCallback(() => {
      setLoading(true);
      void Projects.trackRepository(id).then(() => {
        setLoading(false);
      });
    }, [id]);

    return (
      <button
        disabled={loading}
        style={{
          "--action-button-gradient": color,
        }}
        aria-label={tracked || loading ? "Tracking" : "Track this repo"}
        onClick={trackRepository}
        className={`track-button ${loading ? "loading" : ""} ${tracked ? "tracked" : ""}`}>
        <span>Track this repo</span>
        <TriangleLoader color1="#fff" color2="#fff" ID={`repository${id}`} />
        <Check />
      </button>
    );
  },
  (pp, np) => {
    if (pp.id !== np.id) return false;
    if (pp.color !== np.color) return false;
    return pp.tracked === np.tracked;
  },
);

interface Props {
  id: number;
  color: string;
  tracked: boolean;
}
