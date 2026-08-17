'use client';
import { useState } from 'react';
import { siteData } from '@/data/site';
import { useInView } from '@/hooks/useInView';
import styles from './FAQ.module.css';

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const { ref: sectionRef, isInView } = useInView<HTMLElement>({ threshold: 0.1 });

  return (
    <section id="faq" ref={sectionRef} className={styles.section}>
      <div className="container">
        <div className={`${styles.header} ${isInView ? styles.headerRevealed : ''}`}>
          <p className="eyebrow">Common questions</p>
          <h2 className="section-heading">Things people ask</h2>
          <p className="section-sub">
            You don&apos;t need to know tech to work with me. Here are the answers to what most clients ask first.
          </p>
        </div>

        <div className={styles.list}>
          {siteData.faqs.map((faq, i) => (
            <div
              key={i}
              className={`${styles.item} ${open === i ? styles.isOpen : ''} ${isInView ? styles.itemRevealed : ''}`}
              style={{ transitionDelay: `${i * 80 + 100}ms` }}
            >
              <button
                className={styles.question}
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span className={styles.questionText}>{faq.q}</span>
                <span className={styles.chevronWrap} aria-hidden="true">
                  <svg
                    className={styles.chevron}
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </span>
              </button>
              <div className={styles.answerGrid}>
                <div className={styles.answerInner}>
                  <p className={styles.answerText}>{faq.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}