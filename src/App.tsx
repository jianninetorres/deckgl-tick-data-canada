import { useEffect, useState } from "react";
import DeckGL from "@deck.gl/react/typed";
import StaticMap from "react-map-gl";
import RenderLayers from "./deck.gl-layer";
import { tickData2018 } from "./tick-data-2018";

const MAPBOX_ACCESS_TOKEN = process.env.REACT_APP_ACCESS_TOKEN;
const mapStyle = "mapbox://styles/jtorlesp/cl54cpmpk000p14mouwd1ty3l";

type FeatureType = "Feature" | "Point";

export interface DataProps {
  type: FeatureType;
  properties: {
    tick_species: string;
    randomized_lat: string;
    borrelia_presence: string;
    year: string;
    sex: string;
    life_stage: string;
    randomized_lon: string;
    location_nam: string;
    province: string;
    tick_status: string;
    mnth: string;
    tick_id_tique_id: string;
    day: string;
  };
  geometry: {
    type: FeatureType;
    coordinates: [number, number];
  };
}

interface TooltipProps {
  x: number;
  y: number;
  object: {
    [key: string]: string;
  };
}

const App = () => {
  const [data, setData] = useState<DataProps[]>([]);
  const [hover, setHover] = useState<TooltipProps>();

  const tickData = tickData2018.filter(
    (d) =>
      d.properties.year !== null &&
      d.properties.randomized_lat !== null &&
      d.properties.randomized_lon !== null &&
      d.geometry !== null &&
      d.geometry.type === "Point"
  ) as DataProps[];

  useEffect(() => {
    setData(tickData);
  }, []);

  const INITIAL_VIEW_STATE = {
    longitude: 295,
    latitude: 46,
    zoom: 6,
    maxZoom: 16,
    minZoom: 2,
    pitch: 20, // map angle; 0 = top-down view
    bearing: 0, // direction it. North = 0
  };

  const onHover = ({ x, y, object }: TooltipProps) => {
    setHover({ x, y, object });
    console.log({ x, y, object });
  };

  return (
    <div>
      <DeckGL
        initialViewState={INITIAL_VIEW_STATE}
        controller={true}
        layers={RenderLayers({
          data,
          onHover: (hover) => onHover(hover),
        })}
      >
        <StaticMap
          mapStyle={mapStyle}
          mapboxAccessToken={MAPBOX_ACCESS_TOKEN}
        />
      </DeckGL>
    </div>
  );
};
export default App;
