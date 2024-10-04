'use client';
import Image from 'next/image';
import styles from '@/app/componentes/Header/header.module.css';
import SearchBar from '@/app/componentes/SearchBar/searchbar';
import React from 'react';
import { TemaContexto } from '@/app/layout';

type HeaderProps = {
  categorias: React.MutableRefObject<HTMLElement | null>;
  parceiros: React.MutableRefObject<HTMLElement | null>;
};

export default function Header(props: HeaderProps) {
  const [menu, setMenu] = React.useState(false);
  const temaContexto = React.useContext(TemaContexto);

  return (
    <div
      className={`${styles.headerBg}`}
      style={{ backgroundColor: temaContexto?.dark ? 'var(--cor-b8)' : '' }}
    >
      <header className={`${styles.header} container`}>
        <Image
          src="/imagens/lions-logo.png"
          width={150}
          height={90}
          alt="Lions Logo"
          quality={80}
          sizes="100vw"
          priority
        />
        <button
          style={{ backgroundColor: temaContexto?.dark ? 'var(--cor-b8)' : '' }}
          className={`${styles.botaoMenu}`}
          onClick={() => setMenu((estado) => (estado ? false : true))}
        >
          {menu ? 'Fechar' : 'Menu'}
        </button>
        <SearchBar />
        <ul
          style={{ backgroundColor: temaContexto?.dark ? 'var(--cor-b8)' : '' }}
          className={`${styles.menu} ${menu ? styles.menuEstaAtivo : ''}`}
        >
          <li>
            <a
              onClick={() => {
                setMenu(false);
                props.parceiros.current?.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start',
                });
              }}
            >
              Nossos parceiros
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                setMenu(false);
                props.categorias.current?.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start',
                });
              }}
            >
              Categorias
            </a>
          </li>
        </ul>
        <button
          className={`${styles.tema}`}
          onClick={() =>
            temaContexto?.setDark((estado) => (estado ? false : true))
          }
        >
          Tema Dark
        </button>
      </header>
    </div>
  );
}
