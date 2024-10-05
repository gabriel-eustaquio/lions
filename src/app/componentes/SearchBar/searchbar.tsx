'use client';
import React from 'react';
import ModalCarros from '@/app/componentes/ModalCarros/modalcarros';
import styles from '@/app/componentes/SearchBar/searchbar.module.css';

type ApiCarros = {
  modelos: string[];
};

export default function SearchBar() {
  const [search, setSearch] = React.useState('');
  const [apiCarros] = React.useState<ApiCarros | null>({
    modelos: [
      'Audi',
      'Argo',
      'Bmw',
      'Bonnie',
      'Civic',
      'Celta',
      'Corolla',
      'Duster',
      'Doblo',
      'EcoSport',
      'Elantra',
      'Fiesta',
      'Fit',
      'Gol',
      'GrandSiena',
      'Hb20',
      'HR-V',
      'Ioniq',
      'Iluminado',
      'Jetta',
      'JacT40',
      'Kicks',
      'Ka',
      'L200Triton',
      'Logan',
      'Mobi',
      'Montana',
      'NissanLeaf',
      'Nivus',
      'Onix',
      'Opala',
      'Polo',
      'Palio',
      'Prisma',
      'Q3',
      'Q5',
      'Renegade',
      'Ranger',
      'Spin',
      'Sandero',
      'Tracker',
      'T-Cross',
      'Up!',
      'Uno',
      'Virtus',
      'Versa',
      'Wrangler',
      'WagonR',
      'X3',
      'X5',
      'X8',
      'Yaris',
      'Yeti',
      'Zafira',
      'Zoe',
    ],
  });
  const [apiCarrosFiltrada, setApiCarrosFiltrada] = React.useState<
    string[] | null
  >(null);

  React.useEffect(() => {
    if (search && apiCarros) {
      setApiCarrosFiltrada(
        apiCarros.modelos.filter((modelo) =>
          modelo.toLowerCase().startsWith(search.toLowerCase()),
        ),
      );
    } else {
      setApiCarrosFiltrada(null);
    }
  }, [search, apiCarros]);

  return (
    <form className={`${styles.form}`}>
      <input
        type="search"
        value={search}
        onChange={({ currentTarget }) => setSearch(currentTarget.value)}
        placeholder="Digite nome de carro."
        id="search"
        name="search"
      />
      <label htmlFor="search">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className={`bi bi-search ${styles.search}`}
          viewBox="0 0 16 16"
        >
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
        </svg>
      </label>
      <ModalCarros carros={apiCarrosFiltrada ? apiCarrosFiltrada : null} />
    </form>
  );
}
