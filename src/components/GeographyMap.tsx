import React, { useState } from 'react';
import Map, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_TOKEN;

const locations = [
  { name: 'New York', latitude: 40.7128, longitude: -74.0060 },
  { name: 'San Francisco', latitude: 37.7749, longitude: -122.4194 },
  { name: 'Chicago', latitude: 41.8781, longitude: -87.6298 }
];

const GeographyMap: React.FC = () => {
  const [mapError, setMapError] = useState<string | null>(null);

  if (!MAPBOX_TOKEN) {
    return (
      <div className="h-[300px] bg-gray-50 flex items-center justify-center">
        <p className="text-gray-500">Map configuration required. Please add MAPBOX_TOKEN to environment variables.</p>
      </div>
    );
  }

  return (
    <div className="h-[300px]">
      <h3 className="text-lg font-semibold mb-4">Investment Locations</h3>
      {mapError ? (
        <div className="h-[250px] bg-gray-50 flex items-center justify-center">
          <p className="text-gray-500">Unable to load map. Please try again later.</p>
        </div>
      ) : (
        <Map
          initialViewState={{
            latitude: 40,
            longitude: -100,
            zoom: 3
          }}
          style={{ width: '100%', height: '250px' }}
          mapStyle="mapbox://styles/mapbox/light-v11"
          mapboxAccessToken={MAPBOX_TOKEN}
          onError={(e) => setMapError(e.message)}
        >
          {locations.map((location, index) => (
            <Marker
              key={index}
              latitude={location.latitude}
              longitude={location.longitude}
              color="#3B82F6"
            />
          ))}
        </Map>
      )}
    </div>
  );
};

export default GeographyMap;