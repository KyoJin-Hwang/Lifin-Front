/** @jsxImportSource @emotion/react */

'use client';

import Navigation from '@/components/navigation/navigation';
import { css } from '@emotion/react';
import Link from 'next/link';
const Home = () => {
  return <div css={homeStyle}></div>;
};
const homeStyle = css`
  height: 100vh;
`;

export default Home;
