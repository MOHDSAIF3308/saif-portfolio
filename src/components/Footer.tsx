import { siteData } from '@/data/site';
import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.left}>
          <span className={styles.logo}>
            {siteData.name}<span className={styles.dot}>.</span>
          </span>
          <span className={styles.copy}>
            © {year} — Built and designed by Saif
          </span>
        </div>

        <div className={styles.right}>
          <a href="#home" className={styles.link}>Back to top ↑</a>
          <a
            href={siteData.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.cta}
          >
            Start a project
          </a>
        </div>
      </div>
    </footer>
  );
}
