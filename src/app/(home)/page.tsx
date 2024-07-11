/** @jsxImportSource @emotion/react */

'use client';

import { css } from '@emotion/react';
import Link from 'next/link';

const Home = () => {
  return (
    <div css={test}>
      <Link css={aStyle} href="/test">
        test
      </Link>
      <Link css={aStyle} href="/test/order">
        order
      </Link>
    </div>
  );
};
const test = css`
  display: flex;
  gap: 20px;
  flex-direction: column;

  height: 100vh;
  font-size: 40px;
`;

const aStyle = css`
  display: inline-block;
  color: #d831ca;
`;
export default Home;
