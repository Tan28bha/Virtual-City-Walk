"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useGeoLocation } from "@/hooks/useGeoLocation";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import L from "leaflet";

const IconProto = L.Icon.Default.prototype as unknown as { _getIconUrl?: () => void };
delete IconProto._getIconUrl;

Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png",
});

export default function MapView() {
  const { location, error } = useGeoLocation();

  if (error) return <p className="text-red-600 text-center">{error}</p>;
  if (!location) return <p className="text-gray-500 text-center">Getting your location...</p>;

  return (
    <div className="h-[300px] mb-6 border rounded-lg overflow-hidden">
      <MapContainer
        center={[location.lat, location.lng] as [number, number]}
        zoom={14}
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[location.lat, location.lng]}>
          <Popup>You are here 📍</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
