'use client';
import styles from '@/app/componentes/Section-Categorias/sectioncategorias.module.css';
import { TemaContexto } from '@/app/layout';
import Image from 'next/image';
import React, { forwardRef } from 'react';

export default forwardRef<HTMLElement>(function SectionCategorias({}, ref) {
  const temaContexto = React.useContext(TemaContexto);

  return (
    <section
      className={`${styles.categoriasBg}`}
      id="categorias"
      ref={ref}
      style={{
        backgroundColor: temaContexto?.dark ? 'var(--cor-b8)' : '',
        color: temaContexto?.dark ? 'var(--cor-b1)' : '',
      }}
    >
      <div className={`${styles.categorias} container`}>
        <h1>Conheça nossas categorias</h1>
        <ul>
          <li>
            <Image
              src="/imagens/bronze.png"
              width={130}
              height={120}
              alt="Bronze"
              quality={80}
              sizes="100vw"
              priority
            />
            <span style={{ color: temaContexto?.dark ? 'var(--cor-b8)' : '' }}>
              Bronze
            </span>
          </li>
          <li>
            <Image
              src="/imagens/ouro.png"
              width={130}
              height={120}
              alt="Ouro"
              quality={80}
              sizes="100vw"
              priority
            />
            <span style={{ color: temaContexto?.dark ? 'var(--cor-b8)' : '' }}>
              Ouro
            </span>
          </li>
          <li>
            <Image
              src="/imagens/prata.png"
              width={130}
              height={120}
              alt="Prata"
              quality={80}
              sizes="100vw"
              priority
            />
            <span style={{ color: temaContexto?.dark ? 'var(--cor-b8)' : '' }}>
              Prata
            </span>
          </li>
        </ul>
        <a href="https://github.com/gabriel-eustaquio/lions">
          Clique para saber mais
        </a>
      </div>
    </section>
  );
});
