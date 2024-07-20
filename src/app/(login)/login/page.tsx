'use client';

import { useEffect } from 'react';

import { AiOutlineGoogle } from 'react-icons/ai';
import { SiNaver } from 'react-icons/si';
import { RiKakaoTalkFill } from 'react-icons/ri';

import { signIn, useSession } from 'next-auth/react';

export default function LoginPage() {
  const { status, data: session } = useSession();
  console.log(status);
  return (
    <div className="flex flex-col justify-center">
      <div className="text-blue-800 text-center text-2xl font-semibold italic">
        로그인 페이지
      </div>
      {status === 'authenticated' ? (
        <>
          <div className="text-center text-2xl font-semibold italic">
            이름 : {session?.user?.name}
          </div>
          <div className="text-center text-2xl font-semibold italic">
            이메일 : {session?.user?.email}
          </div>
        </>
      ) : (
        <div className="mt-10 mx-auto w-full max-w-sm">
          <div className="flex flex-col gap-3">
            <button
              type="button"
              onClick={() => signIn('google', { callbackUrl: '/' })}
              className="text-white flex gap-2 bg-[#4285F4] hover:bg-[#4285F4]/90 font-medium rounded-lg w-full px-5 py-4 text-center items-center justify-center"
            >
              <AiOutlineGoogle className="w-6 h-6" />
              Sign in with Google
            </button>
            <button
              type="button"
              onClick={() => signIn('naver', { callbackUrl: '/' })}
              className="text-white flex gap-3 bg-[#2db400] hover:bg-[#2db400]/90 font-medium rounded-lg w-full px-5 py-4 text-center items-center justify-center"
            >
              <SiNaver className="w-4 h-4" />
              Sign in with Naver
            </button>
            <button
              type="button"
              onClick={() => signIn('kakao', { callbackUrl: '/' })}
              className="text-black flex gap-2 bg-[#fef01b] hover:bg-[#fcf052]/90 font-medium rounded-lg w-full px-5 py-4 text-center items-center justify-center"
            >
              <RiKakaoTalkFill className="w-6 h-6" />
              Sign in with Kakao
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
