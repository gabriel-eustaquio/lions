'use client';
import Main from './componentes/Main/main';
import SectionParceiros from './componentes/Section-Parceiros/sectionparceiros';
import SectionCategorias from './componentes/Section-Categorias/sectioncategorias';
import React from 'react';
import { useSectionContext } from './componentes/SectionProvider/sectionprovider';

export default function HomePage() {
  const sectionsContexto = useSectionContext();
  return (
    <>
      <Main />
      <SectionParceiros ref={sectionsContexto?.sectionParceirosRef} />
      <SectionCategorias ref={sectionsContexto?.sectionCategoriasRef} />
    </>
  );
}
