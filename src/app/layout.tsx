import { Metadata } from 'next';
import './global.css';
import Navigation from '@/components/navigation/navigation';
export const metadata: Metadata = {
  title: 'LiFin',
  description: '일상에 핀을 더해봐 라이핀!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
