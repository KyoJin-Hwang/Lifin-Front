import './globals.css';
import { Metadata } from 'next';

import Navigation from '@/components/navigation/navigation';

import AuthContext from '@/components/auth/authContext';

export const metadata: Metadata = {
  title: 'Lifin',
  description: '일상에 핀을 더해보자 라이핀📌',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AuthContext>
        <body>
          <Navigation />
          {children}
        </body>
      </AuthContext>
    </html>
  );
}
