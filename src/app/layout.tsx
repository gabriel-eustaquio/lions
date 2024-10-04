'use client';
import './globals.css';
import Header from '@/app/componentes/Header/header';
import Footer from './componentes/Footer/footer';
import React, { useRef } from 'react';

type Tema = {
  dark: boolean;
  setDark: React.Dispatch<React.SetStateAction<boolean>>;
};

type Sections = {
  sectionCategoriasRef: React.MutableRefObject<HTMLElement | null>;
  sectionParceirosRef: React.MutableRefObject<HTMLElement | null>;
};

export const TemaContexto = React.createContext<Tema | null>(null);
export const SectionsContexto = React.createContext<Sections | null>(null);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [dark, setDark] = React.useState(false);
  const sectionParceirosRef = useRef<HTMLElement | null>(null);
  const sectionCategoriasRef = useRef<HTMLElement | null>(null);

  React.useEffect(() => {
    document.title = 'Lion Seminovos';
  });

  return (
    <TemaContexto.Provider value={{ dark, setDark }}>
      <html lang="pt-BR">
        <body>
          <SectionsContexto.Provider
            value={{ sectionCategoriasRef, sectionParceirosRef }}
          >
            <Header
              categorias={sectionCategoriasRef}
              parceiros={sectionParceirosRef}
            />
            {children}
          </SectionsContexto.Provider>
          <Footer />
        </body>
      </html>
    </TemaContexto.Provider>
  );
}
