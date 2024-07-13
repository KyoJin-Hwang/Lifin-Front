/** @jsxImportSource @emotion/react */
'use client';

import { css } from '@emotion/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navigation = () => {
  const path = usePathname();
  return (
    <div css={navStyle}>
      <Link href={'/'}>메인 {path === '/' ? '🔥' : ''}</Link>
      <Link href={'/maps/kakao'}>
        카카오 지도 {path === '/maps/kakao' ? '🔥' : ''}
      </Link>
    </div>
  );
};

export default Navigation;
const navStyle = css`
  margin: 30px 0px;
  justify-content: center;
  display: flex;
  gap: 20px;
  font-size: 24px;
  font-weight: bold;
`;
