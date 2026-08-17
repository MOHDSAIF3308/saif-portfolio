'use client';
import { siteData } from '@/data/site';
import { useInView } from '@/hooks/useInView';
import styles from './Pricing.module.css';

export default function Pricing() {
  const { ref: sectionRef, isInView } = useInView<HTMLElement>({ threshold: 0.1 });

  return (
    <section id="pricing" ref={sectionRef} className={styles.section}>
      <div className="container">
        <div className={`${styles.header} ${isInView ? styles.headerRevealed : ''}`}>
          <p className="eyebrow">Transparent pricing</p>
          <h2 className="section-heading">Simple, clear pricing</h2>
          <p className="section-sub">
            No surprises. You know exactly what you&apos;re getting and what it costs before we start.
          </p>
        </div>

        <div className={styles.grid}>
          {siteData.plans.map((plan, i) => (
            <div
              key={i}
              className={`${styles.card} ${plan.featured ? styles.featured : ''} ${isInView ? styles.cardRevealed : ''}`}
              style={{ transitionDelay: `${i * 120 + 150}ms` }}
            >
              {plan.featured && (
                <div className={styles.popularBadge}>
                  <span>Most popular</span>
                  <span className={styles.badgeSparkle} aria-hidden="true">✨</span>
                </div>
              )}

              <div className={styles.planName}>{plan.name}</div>
              <div className={styles.priceRow}>
                <span className={styles.price}>{plan.price}</span>
                {plan.period && (
                  <span className={styles.period}>/ {plan.period}</span>
                )}
              </div>
              <p className={styles.desc}>{plan.desc}</p>

              <hr className={styles.divider} />

              <ul className={styles.features}>
                {plan.features.map((f, j) => (
                  <li
                    key={j}
                    className={`${styles.featureItem} ${isInView ? styles.featureRevealed : ''}`}
                    style={{ transitionDelay: `${i * 100 + j * 40 + 250}ms` }}
                  >
                    <span className={styles.checkWrap} aria-hidden="true">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href={plan.ctaLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.cta} ${plan.featured ? styles.ctaFeatured : ''}`}
              >
                <span>{plan.cta}</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>
          ))}
        </div>

        <div className={`${styles.note} ${isInView ? styles.noteRevealed : ''}`}>
          <div className={styles.noteIcon}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
          </div>
          <span>
            All prices include design, development, and deployment. Payment: 50% to start, 50% on delivery. No hidden charges.
          </span>
        </div>
      </div>
    </section>
  );
}