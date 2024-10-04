import styles from '@/app/componentes/Footer/footer.module.css';

export default function Footer() {
  return (
    <div className={`${styles.footerBg}`}>
      <footer className={`${styles.footer} container`}>
        <span>Desenvolvido by Gabriel Eustaquio</span>
      </footer>
    </div>
  );
}
