import { siteData } from '@/data/site';
import styles from './Pricing.module.css';

export default function Pricing() {
  return (
    <section id="pricing">
      <div className="container">
        <p className="eyebrow">Transparent pricing</p>
        <h2 className="section-heading">Simple, clear pricing</h2>
        <p className="section-sub">
          No surprises. You know exactly what you're getting and what it costs before we start.
        </p>

        <div className={styles.grid}>
          {siteData.plans.map((plan, i) => (
            <div
              key={i}
              className={`${styles.card} ${plan.featured ? styles.featured : ''}`}
            >
              {plan.featured && (
                <div className={styles.popularBadge}>Most popular</div>
              )}

              <div className={styles.planName}>{plan.name}</div>
              <div className={styles.priceRow}>
                <span className={styles.price}>{plan.price}</span>
                {plan.period && (
                  <span className={styles.period}>{plan.period}</span>
                )}
              </div>
              <p className={styles.desc}>{plan.desc}</p>

              <hr className={styles.divider} />

              <ul className={styles.features}>
                {plan.features.map((f, j) => (
                  <li key={j}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href={plan.ctaLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.cta} ${plan.featured ? styles.ctaFeatured : ''}`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <div className={styles.note}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
          All prices include design, development, and deployment. Payment: 50% to start, 50% on delivery. No hidden charges.
        </div>
      </div>
    </section>
  );
}