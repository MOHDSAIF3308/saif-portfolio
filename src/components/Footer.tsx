'use client';
import { siteData } from '@/data/site';
import { useInView } from '@/hooks/useInView';
import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();
  const { ref: footerRef, isInView } = useInView<HTMLElement>({ threshold: 0.1 });

  return (
    <footer ref={footerRef} className={`${styles.footer} ${isInView ? styles.revealed : ''}`}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.left}>
          <a href="#home" className={styles.logo} aria-label="Saif home">
            {siteData.name}<span className={styles.dot}>.</span>
          </a>
          <span className={styles.copy}>
            © {year} — Built and designed by Saif
          </span>
        </div>

        <div className={styles.right}>
          <a href="#home" className={styles.link}>
            <span>Back to top</span>
            <svg className={styles.arrowUp} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="12" y1="19" x2="12" y2="5"></line>
              <polyline points="5 12 12 5 19 12"></polyline>
            </svg>
          </a>
          <a
            href={siteData.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.cta}
          >
            <span>Start a project</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
