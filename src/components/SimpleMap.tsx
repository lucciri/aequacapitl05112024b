import React from 'react';

const SimpleMap = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold mb-4">Geographic Distribution</h3>
      <div className="h-[300px] flex items-center justify-center">
        <svg viewBox="0 0 800 400" className="w-full h-full">
          {/* Simple US outline */}
          <path
            d="M100,200 C150,150 200,180 250,190 C300,200 350,180 400,170 C450,160 500,150 550,160 C600,170 650,190 700,200"
            fill="none"
            stroke="#3B82F6"
            strokeWidth="2"
          />
          {/* Investment locations */}
          <circle cx="200" cy="180" r="8" fill="#3B82F6" />
          <circle cx="400" cy="170" r="8" fill="#3B82F6" />
          <circle cx="600" cy="190" r="8" fill="#3B82F6" />
        </svg>
      </div>
    </div>
  );
};

export default SimpleMap;