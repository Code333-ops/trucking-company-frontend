import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import axios from 'axios';
import 'leaflet/dist/leaflet.css';
import './RouteMap.css'; // Ensure this file includes the styles from App.css if not already

function RouteMap() {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5001/api/locations')
      .then(response => {
        setLocations(response.data);
      })
      .catch(error => {
        console.error('Error fetching locations:', error);
      });
  }, []);

  return (
    <div className="map-container">
      <MapContainer center={[51.505, -0.09]} zoom={13} className="map">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {locations.map(loc => (
          <Marker key={loc.id} position={[loc.lat, loc.lng]}>
            <Popup>
              {loc.name} {/* Display location name */}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default RouteMap;
