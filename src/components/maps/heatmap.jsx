import Mapbox from "@components/lib/Mapbox";
import Heatmap from "@components/lib/Heatmap";

export default function Map({ mapboxAccessToken, data, ...props }) {
  return (
    <Mapbox
      mapboxAccessToken={mapboxAccessToken}
      mapStyle="mapbox://styles/mapbox/dark-v11"
      zoom={3}
      {...props}
    >
      <Heatmap data={data} />
    </Mapbox>
  );
}
