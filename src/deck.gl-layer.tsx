import { HeatmapLayer } from "@deck.gl/aggregation-layers/typed";

import { DataProps } from "./App";

interface RenderLayersProps {
  data: DataProps[];
  onHover: (hover: any) => void;
}

const RenderLayers = (props: RenderLayersProps) => {
  const layers = [
    new HeatmapLayer({
      id: "tick-data",
      data: props.data,
      getPosition: (d: { geometry: { coordinates: any } }) =>
        d.geometry.coordinates,
      getWeight: 10,
      aggregation: "SUM",
    }),
  ];

  return layers;
};

export default RenderLayers;
