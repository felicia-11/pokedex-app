import type { Metadata } from 'next';
import { ReactNode } from 'react';
import Link from 'next/link';
import './globals.css';

export const metadata: Metadata = {
  title: 'Pokemon List',
  description: 'List of Pokemon',
};

export default function RootLayout({
  children,
}: {
  children: ReactNode,
}) {
  return (
    <html lang="en">
      <body>
        <div className="relative flex w-full items-center bg-white p-4 justify-start gap-2 pokedex-main-color text-white lg:flex-wrap lg:px-8">
          <Link href="/">
            <h2 className="font-bold">POKEDEX</h2>
          </Link>
        </div>
        {children}
      </body>
    </html>
  );
};
