/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import Script from 'next/script';

declare global {
  interface Window {
    kakao: any;
  }
}

const Map = () => {
  const loadKakaoMap = () => {
    window.kakao.maps.load(() => {
      const mapContainer = document.getElementById('map');
      const mapOption = {
        center: new window.kakao.maps.LatLng(
          35.15058103127177,
          126.91428395488659,
        ),
        level: 3,
      };
      new window.kakao.maps.Map(mapContainer, mapOption);
    });
  };
  return (
    <>
      <Script
        strategy="afterInteractive"
        type="text/javascript"
        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP}&autoload=false`}
        onReady={loadKakaoMap}
      />
      <div id="map" css={MapStyle}></div>
    </>
  );
};

export default Map;
const MapStyle = css`
  width: 100%;
  height: 100vh;
`;
