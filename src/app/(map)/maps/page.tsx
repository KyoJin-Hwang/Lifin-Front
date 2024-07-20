'use client';

import Map from '@/components/map/map';
import React from 'react';

const MapPage = () => {
  return (
    <div>
      <div className="text-blue-800 text-center text-2xl font-semibold italic">
        지도 페이지
      </div>
      <Map />
    </div>
  );
};

export default MapPage;
