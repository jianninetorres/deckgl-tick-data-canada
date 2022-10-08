import { ColumnLayer } from "@deck.gl/layers/typed";

import { DataProps } from "./App";

interface RenderLayersProps {
  data: DataProps[];
  onHover: (hover: any) => void;
}

const RenderLayers = (props: RenderLayersProps) => {
  const layers = [
    new ColumnLayer({
      id: "tick-data",
      data: props.data,
      getPosition: (d) => d.geometry.coordinates,
      diskResolution: 10000,
      radius: 10000,
      getFillColor: [255, 193, 51],
      extruded: true,
      elevationScale: 20,
      pickable: true, //  identify an object and the layer it's in
      onHover: props.onHover,
    }),
  ];

  return layers;
};

export default RenderLayers;
