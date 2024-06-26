import { Source, Layer } from "react-map-gl";

const Heatmap = ({ data }) => (
  <Source type="geojson" data={data}>
    <Layer
      type="heatmap"
      paint={{
        // Increase the heatmap weight based on frequency and property magnitude
        // "heatmap-weight": [
        //   "interpolate",
        //   ["linear"],
        //   ["get", "mag"],
        //   0,
        //   0,
        //   6,
        //   1,
        // ],
        "heatmap-intensity": ["interpolate", ["linear"], ["zoom"], 0, 1, 9, 3],
        "heatmap-color": [
          "interpolate",
          ["linear"],
          ["heatmap-density"],
          0,
          "rgba(33,102,172,0)",
          0.2,
          "rgb(103,169,207)",
          0.4,
          "rgb(209,229,240)",
          0.6,
          "rgb(253,219,199)",
          0.8,
          "rgb(239,138,98)",
          0.9,
          "rgb(255,201,101)",
        ],
        "heatmap-radius": ["interpolate", ["linear"], ["zoom"], 0, 2, 9, 20],
        "heatmap-opacity": ["interpolate", ["linear"], ["zoom"], 7, 1, 9, 0],
      }}
    />
  </Source>
);

export default Heatmap;
