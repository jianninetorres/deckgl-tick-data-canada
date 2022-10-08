import { GeoJsonLayer } from "@deck.gl/layers/typed";

import { DataProps } from "./App";

interface RenderLayersProps {
  data: DataProps[];
  onHover: (hover: any) => void;
}

const RenderLayers = (props: RenderLayersProps) => {
  const layers = [
    new GeoJsonLayer({
      id: "tick-data",
      data: props.data,
      getFillColor: [160, 160, 180, 200],
      extruded: true,
      pickable: true, //  identify an object and the layer it's in
      stroked: false,
      filled: true,
      pointRadiusUnits: "pixels",
      pointType: "circle+text",
      lineWidthScale: 20,
      lineWidthMinPixels: 4,
      getLineColor: [225, 133, 61],
      getPointRadius: 4,
      getLineWidth: 5,
      getElevation: 30,
      getText: (d: { properties: { tick_species: any } }) =>
        d.properties.tick_species,
      getTextSize: 12,
    }),
  ];

  return layers;
};

export default RenderLayers;
