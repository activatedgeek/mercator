import Mapbox, { MapboxMarkers } from "@components/lib/Mapbox";

export default function Map({ mapboxAccessToken, places, ...props }) {
  return (
    <Mapbox
      mapboxAccessToken={mapboxAccessToken}
      mapStyle="mapbox://styles/mapbox/light-v11"
      zoom={3}
      {...props}
    >
      <MapboxMarkers places={places} />
    </Mapbox>
  );
}
