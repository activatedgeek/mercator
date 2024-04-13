import { useState } from "react";
import Map, {
  NavigationControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl,
  Marker,
  Popup,
} from "react-map-gl";

import Pin from "./Pin";

export default function Mapbox({
  children,
  token,
  mapStyle = "mapbox://styles/mapbox/streets-v12",
  latitude = 40.72833,
  longitude = -73.99417,
  zoom = 10,
  ...props
}) {
  return (
    <Map
      mapboxAccessToken={token}
      initialViewState={{
        latitude: latitude,
        longitude: longitude,
        zoom: zoom,
      }}
      style={{ width: "100vw", height: "100vh" }}
      mapStyle={mapStyle}
      {...props}
    >
      <GeolocateControl position="top-left" />
      <FullscreenControl position="top-left" />
      <NavigationControl position="top-left" />
      <ScaleControl />
      {children}
    </Map>
  );
}

export function MapboxMarkers({ places }) {
  const [popupInfo, setPopupInfo] = useState(null);
  return (
    <>
      {places.map((place, index) => (
        <Marker
          key={`marker-${index}`}
          latitude={place.latitude}
          longitude={place.longitude}
          anchor="bottom"
          onClick={(e) => {
            e.originalEvent.stopPropagation();
            setPopupInfo(place);
          }}
        >
          <Pin />
        </Marker>
      ))}
      {popupInfo && (
        <Popup
          anchor="top"
          longitude={Number(popupInfo.longitude)}
          latitude={Number(popupInfo.latitude)}
          onClose={() => setPopupInfo(null)}
        >
          <div>{popupInfo.place}</div>
        </Popup>
      )}
    </>
  );
}
