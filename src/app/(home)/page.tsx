'use client';
import { useSession } from 'next-auth/react';

const Home = () => {
  const { data: session, status } = useSession();
  console.log(session);
  return (
    <div className="text-blue-800 text-center text-2xl font-semibold italic">
      메인 페이지
      {status === 'authenticated' && (
        <>
          <div className="text-black text-center text-2xl font-semibold ">
            이름 : {session?.user?.name}
          </div>
          <div className="text-black text-center text-2xl font-semibold ">
            이메일 : {session?.user?.email}
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
