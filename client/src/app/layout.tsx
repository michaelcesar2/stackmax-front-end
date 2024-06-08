import type { Metadata } from 'next';
import StyledComponentsRegistry from '@/lib/registry';
import { Providers } from './providers';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Stackmax',
  description: 'Stackmax',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="images/favicon.svg" />
      </head>
      <body>
        <StyledComponentsRegistry>
          <Header></Header>
          <Providers>{children}</Providers>
          <Footer></Footer>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
