import { ScatterplotLayer } from "@deck.gl/layers/typed";
import { DataProps } from "./App";

interface RenderLayersProps {
  data: DataProps[];
  // onHover: (hover: any) => void;
}

const RenderLayers = (props: RenderLayersProps) => {
  const layers = [
    new ScatterplotLayer({
      id: "tick-data",
      data: props.data,
      getPosition: (d) => d.geometry.coordinates,
      getRadius: 50,
      getFillColor: [255, 217, 102],
      extruded: true,
      opacity: 0.8,
      stroked: true,
      filled: true,
      radiusScale: 6,
      radiusMinPixels: 1,
      radiusMaxPixels: 100,
      lineWidthMinPixels: 1,
      pickable: true, //  identify an object and the layer it's in
      // onHover: props.onHover,
    }),
  ];

  return layers;
};

export default RenderLayers;
