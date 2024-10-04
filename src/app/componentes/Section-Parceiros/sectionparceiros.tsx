'use client';
import React, { forwardRef } from 'react';
import styles from '@/app/componentes/Section-Parceiros/sectionparceiros.module.css';
import { TemaContexto } from '@/app/layout';

export default forwardRef<HTMLElement>(function SectionParceiros({}, ref) {
  const temaContexto = React.useContext(TemaContexto);

  return (
    <div
      style={{
        backgroundColor: temaContexto?.dark ? 'var(--cor-b7)' : '',
        color: temaContexto?.dark ? 'var(--cor-b1)' : '',
      }}
    >
      <section
        className={`${styles.parceiros} container`}
        id="parceiros"
        ref={ref}
      >
        <h1>
          Nossos parceiros possuem todo suporte necessário para alcançar o
          sucesso nas vendas
        </h1>
        <p>
          Contamos com uma equipe totalmente especializada em vendas que
          acompanhará cada etapa para a realização de sua venda.
        </p>
        <div>
          <ul>
            <li>
              Diversas <span>estratégias</span> de vendas
            </li>
            <li>
              Possuimos a <span>melhor comissão</span> do mercado
            </li>
          </ul>
        </div>
        <h1 style={{ color: temaContexto?.dark ? 'var(--cor-b1)' : '' }}>
          Oportunidade única para quem deseja realmente mudar de vida.
        </h1>
      </section>
    </div>
  );
});
