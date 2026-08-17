'use client';
import { useState, useEffect } from 'react';
import { siteData } from '@/data/site';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#work' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Process', href: '#process' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`${styles.header} ${mounted ? styles.headerLoaded : ''}`}>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
        <div className={`container ${styles.inner}`}>
          <a href="#" className={styles.logo} aria-label="Saif Portfolio Home">
            <span className={styles.logoText}>{siteData.name}</span>
            <span className={styles.dot} />
          </a>

          <ul className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
            {links.map((l, index) => (
              <li
                key={l.label}
                className={styles.linkItem}
                style={{ animationDelay: `${index * 60 + 100}ms` }}
              >
                <a href={l.href} onClick={() => setMenuOpen(false)} className={styles.navLink}>
                  <span>{l.label}</span>
                </a>
              </li>
            ))}
            <li className={styles.linkItemCta}>
              <a
                href={siteData.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.navCta}
                onClick={() => setMenuOpen(false)}
              >
                <span>Hire me</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </li>
          </ul>

          <button
            className={`${styles.burger} ${menuOpen ? styles.burgerActive : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            <span className={styles.burgerLine} />
            <span className={styles.burgerLine} />
            <span className={styles.burgerLine} />
          </button>
        </div>
      </nav>
    </header>
  );
}