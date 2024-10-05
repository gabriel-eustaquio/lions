'use client';
import styles from '@/app/carros/[modelo]/carro.module.css';
import { useTemaContext } from '@/app/componentes/TemaProvider/temaprovider';
import React from 'react';

type Props = {
  params: { modelo: string[] };
};

export default function CarroPage(props: Props) {
  const temaContexto = useTemaContext();

  return (
    <div
      style={{
        backgroundColor: temaContexto?.dark ? 'var(--cor-b7)' : '',
        color: temaContexto?.dark ? 'var(--cor-b1)' : '',
      }}
    >
      <main className={`container ${styles.carro}`}>
        <div>
          <h1>Carro: {props.params.modelo}</h1>
          <p>Cavalos: 300</p>
        </div>
        <a href="/">Voltar menu principal</a>
      </main>
    </div>
  );
}
