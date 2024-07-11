import { Metadata } from 'next';
import './global.css';
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
      <body>{children}</body>
    </html>
  );
}
