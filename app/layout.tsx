import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Mèli - Language Learning Social Platform',
  description: 'Building bridges between cultures through language learning',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
