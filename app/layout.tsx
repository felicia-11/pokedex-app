import type { Metadata } from 'next';
import { ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import homeLogo from '../public/logo.png'; 
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
        <header className="relative flex w-full items-center p-4 justify-start gap-2 bg-rose-700 text-white lg:flex-wrap lg:px-8">
          <Link href="/" className='flex gap-2 items-center'>
            <Image
              src={homeLogo}
              alt='home'
              width={30}
              height={30}
            />
            <h2 className="font-bold">POKEDEX</h2>
          </Link>
        </header>
        {children}
      </body>
    </html>
  );
};
