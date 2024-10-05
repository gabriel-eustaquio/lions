'use client';
import React from 'react';

type Tema = {
  dark: boolean;
  setDark: React.Dispatch<React.SetStateAction<boolean>>;
};

const TemaContext = React.createContext<Tema | null>(null);

export const useTemaContext = () => {
  const context = React.useContext(TemaContext);
  if (!context) {
    throw new Error('Erro');
  }
  return context;
};

export const TemaContextProvider = ({ children }: React.PropsWithChildren) => {
  const [dark, setDark] = React.useState(false);

  return (
    <TemaContext.Provider value={{ dark, setDark }}>
      {children}
    </TemaContext.Provider>
  );
};
