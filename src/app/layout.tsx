'use client';
import './globals.css';
import Header from '@/app/componentes/Header/header';
import Footer from './componentes/Footer/footer';
import React from 'react';
import { SectionsContextProvider } from './componentes/SectionProvider/sectionprovider';
import { TemaContextProvider } from './componentes/TemaProvider/temaprovider';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  React.useEffect(() => {
    document.title = 'Lions Seminovos';
  });

  return (
    <html lang="pt-BR">
      <TemaContextProvider>
        <body>
          <SectionsContextProvider>
            <Header />
            {children}
          </SectionsContextProvider>
          <Footer />
        </body>
      </TemaContextProvider>
    </html>
  );
}
