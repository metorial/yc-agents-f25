import type { Metadata } from 'next';
import { JetBrains_Mono, Lexend_Deca } from 'next/font/google';
import { Nav } from '../components/nav';
import './globals.css';
import { StyledComponentsRegistry } from './registry';

const lexend = Lexend_Deca({
  variable: '--font-lexend',
  subsets: ['latin']
});

const jetbrains = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: `YC Agent Jam '25`,
  description: '24 hours. 200 devs. At the YC office in SF. Build something amazing.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lexend.variable} ${jetbrains.variable}`}>
        <StyledComponentsRegistry>
          <Nav />

          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
