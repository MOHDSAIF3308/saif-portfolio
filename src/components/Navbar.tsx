'use client';
import { useState, useEffect } from 'react';
import { siteData } from '@/data/site';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#work' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        <a href="#" className={styles.logo}>
          {siteData.name}
          <span className={styles.dot}>.</span>
        </a>

        <ul className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
          {links.map((l) => (
            <li key={l.label}>
              <a href={l.href} onClick={() => setMenuOpen(false)}>
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={siteData.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.navCta}
              onClick={() => setMenuOpen(false)}
            >
              Hire me
            </a>
          </li>
        </ul>

        <button
          className={styles.burger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={menuOpen ? styles.burgerX : ''} />
          <span className={menuOpen ? styles.burgerX : ''} />
          <span className={menuOpen ? styles.burgerX : ''} />
        </button>
      </div>
    </nav>
  );
}