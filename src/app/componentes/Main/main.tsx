'use client';
import styles from '@/app/componentes/Main/main.module.css';
import { useTemaContext } from '../TemaProvider/temaprovider';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

export default function Main() {
  const temaContexto = useTemaContext();

  const variants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <>
      <motion.div
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={variants}
        transition={{ duration: 0.3 }}
        style={{
          backgroundColor: temaContexto?.dark ? 'var(--cor-b7)' : '',
          color: temaContexto?.dark ? 'var(--cor-b1)' : '',
        }}
      >
        <main className={`${styles.main} container`}>
          <h1>
            Fature muito com a melhor concessionária de seminovos do Brasil
          </h1>
          <p
            style={{
              backgroundColor: temaContexto?.dark ? 'var(--cor-b7)' : '',
              color: temaContexto?.dark ? 'var(--cor-b1)' : '',
            }}
          >
            Um portal pensado exclusivamente em quem deseja crescer junto com a
            Lions Seminovos a rede que mais cresce no Brasil
          </p>
          <a href="https://github.com/gabriel-eustaquio/lions">Clique aqui</a>
        </main>
        <section className={`${styles.vantagensBg}`}>
          <ul className={`${styles.vantagens} container`}>
            <li>
              <Image
                src="/imagens/dinheiro.png"
                width={80}
                height={80}
                alt="Dinheiro"
                quality={80}
                sizes="100vw"
                priority
              />
              <span>Ganhe uma renda extra</span>
            </li>
            <li>
              <Image
                src="/imagens/praia.png"
                width={80}
                height={80}
                alt="praia"
                quality={80}
                sizes="100vw"
                priority
              />
              <span>Trabalhe de onde quiser</span>
            </li>
            <li>
              <Image
                src="/imagens/lucro.png"
                width={80}
                height={80}
                alt="Lucro"
                quality={80}
                sizes="100vw"
                priority
              />
              <span>
                Lucro <span>alto</span>
              </span>
            </li>
          </ul>
        </section>
      </motion.div>
    </>
  );
}
