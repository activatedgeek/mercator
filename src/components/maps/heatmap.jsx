import Mapbox from "@components/lib/Mapbox";
import Heatmap from "@components/lib/Heatmap";

export default function Map({ data, ...props }) {
  return (
    <Mapbox mapStyle="mapbox://styles/mapbox/dark-v11" zoom={3} {...props}>
      <Heatmap data={data} />
    </Mapbox>
  );
}
