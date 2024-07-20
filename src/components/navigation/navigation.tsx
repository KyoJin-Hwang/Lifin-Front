'use client';

import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navigation = () => {
  const path = usePathname();
  const { data: session, status } = useSession();
  return (
    <div className="my-8 flex justify-center gap-20 text-2xl font-bold">
      <Link href={'/'}>Main {path === '/' ? '🔥' : ''}</Link>
      <Link href={'/maps'}>Kakao Map {path === '/maps' ? '🔥' : ''}</Link>
      {status === 'authenticated' ? (
        <button onClick={() => signOut()}>
          Logout {path === '/login' ? '🔥' : ''}
        </button>
      ) : (
        <Link href={'/login'}>Login {path === '/login' ? '🔥' : ''}</Link>
      )}
    </div>
  );
};

export default Navigation;
