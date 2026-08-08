'use client';
import { useState } from 'react';
import { siteData } from '@/data/site';
import styles from './FAQ.module.css';

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq">
      <div className="container">
        <p className="eyebrow">Common questions</p>
        <h2 className="section-heading">Things people ask</h2>
        <p className="section-sub">
          You don't need to know tech to work with me. Here are the answers to what most clients ask first.
        </p>

        <div className={styles.list}>
          {siteData.faqs.map((faq, i) => (
            <div key={i} className={`${styles.item} ${open === i ? styles.isOpen : ''}`}>
              <button
                className={styles.question}
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span>{faq.q}</span>
                <svg
                  className={styles.chevron}
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              {open === i && (
                <div className={styles.answer}>{faq.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}