'use client';
import React from 'react';

type Sections = {
  sectionParceirosRef: React.MutableRefObject<HTMLElement | null>;
  sectionCategoriasRef: React.MutableRefObject<HTMLElement | null>;
};

const SectionsContext = React.createContext<Sections | null>(null);

export const useSectionContext = () => {
  const context = React.useContext(SectionsContext);
  if (!context) {
    throw new Error('Erro');
  }
  return context;
};

export const SectionsContextProvider = ({
  children,
}: React.PropsWithChildren) => {
  const sectionParceirosRef = React.useRef<HTMLElement | null>(null);
  const sectionCategoriasRef = React.useRef<HTMLElement | null>(null);

  return (
    <SectionsContext.Provider
      value={{ sectionCategoriasRef, sectionParceirosRef }}
    >
      {children}
    </SectionsContext.Provider>
  );
};
