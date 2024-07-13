/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Script from 'next/script';

declare global {
  interface Window {
    kakao: any;
  }
}

const MapPage = () => {
  const loadKakaoMap = () => {};
  return <div css={MapStyle}></div>;
};

export default MapPage;
const MapStyle = css`
  width: 100vw;
`;
