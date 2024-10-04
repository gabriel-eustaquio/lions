import styles from '@/app/componentes/ModalCarros/modalcarros.module.css';

export default function ModalCarros({ carros }: { carros: string[] | null }) {
  return (
    <ul className={`${styles.menu}`} style={{ opacity: carros ? '1' : '0' }}>
      {carros?.map((modelo, index) => {
        return (
          <li key={index}>
            <a href={`/carros/${modelo}`}>{modelo}</a>
          </li>
        );
      })}
    </ul>
  );
}
