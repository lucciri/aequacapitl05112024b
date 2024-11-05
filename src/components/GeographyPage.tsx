import React, { useState } from 'react';
import Map, { Marker, Popup } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_TOKEN;

const investments = [
  {
    id: 1,
    name: 'TechVision AI',
    location: 'San Francisco',
    coordinates: [-122.4194, 37.7749],
    amount: '$25M',
    type: 'Technology'
  },
  {
    id: 2,
    name: 'HealthCore Systems',
    location: 'Boston',
    coordinates: [-71.0589, 42.3601],
    amount: '$50M',
    type: 'Healthcare'
  },
  {
    id: 3,
    name: 'GreenEnergy Solutions',
    location: 'Austin',
    coordinates: [-97.7431, 30.2672],
    amount: '$30M',
    type: 'Clean Energy'
  }
];

const GeographyPage = () => {
  const [selectedInvestment, setSelectedInvestment] = useState(null);
  const [mapError, setMapError] = useState<string | null>(null);

  if (!MAPBOX_TOKEN) {
    return (
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Geographic Distribution</h1>
        </div>
        <div className="bg-gray-50 p-6 rounded-lg flex items-center justify-center">
          <p className="text-gray-500">Map configuration required. Please add MAPBOX_TOKEN to environment variables.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Geographic Distribution</h1>
        <div className="flex space-x-3">
          <button className="btn btn-outline">Filter</button>
          <button className="btn btn-primary">Add Location</button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-sm font-medium text-gray-500">Total Investments</h3>
          <p className="text-2xl font-bold text-gray-900 mt-2">$105M</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-sm font-medium text-gray-500">Locations</h3>
          <p className="text-2xl font-bold text-gray-900 mt-2">3</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-sm font-medium text-gray-500">Countries</h3>
          <p className="text-2xl font-bold text-gray-900 mt-2">1</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-sm font-medium text-gray-500">Regions</h3>
          <p className="text-2xl font-bold text-gray-900 mt-2">3</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        {mapError ? (
          <div className="h-[600px] bg-gray-50 flex items-center justify-center">
            <p className="text-gray-500">Unable to load map. Please try again later.</p>
          </div>
        ) : (
          <div className="h-[600px]">
            <Map
              initialViewState={{
                longitude: -98.5795,
                latitude: 39.8283,
                zoom: 3
              }}
              style={{ width: '100%', height: '100%' }}
              mapStyle="mapbox://styles/mapbox/light-v11"
              mapboxAccessToken={MAPBOX_TOKEN}
              onError={(e) => setMapError(e.message)}
            >
              {investments.map((investment) => (
                <Marker
                  key={investment.id}
                  longitude={investment.coordinates[0]}
                  latitude={investment.coordinates[1]}
                  color="#3B82F6"
                  onClick={e => {
                    e.originalEvent.stopPropagation();
                    setSelectedInvestment(investment);
                  }}
                />
              ))}
            </Map>
          </div>
        )}
      </div>
    </div>
  );
};

export default GeographyPage;