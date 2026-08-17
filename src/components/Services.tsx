'use client';
import { siteData } from '@/data/site';
import { useInView } from '@/hooks/useInView';
import styles from './Services.module.css';

export default function Services() {
  const { ref: sectionRef, isInView } = useInView<HTMLElement>({ threshold: 0.1 });

  return (
    <section id="services" ref={sectionRef} className={styles.section}>
      <div className="container">
        <div className={`${styles.header} ${isInView ? styles.revealed : ''}`}>
          <p className="eyebrow">What I do</p>
          <h2 className="section-heading">
            What I can build<br />for your business
          </h2>
          <p className="section-sub">
            From a simple website to a full mobile app — I cover it all. Tell me what problem you&apos;re trying to solve, and I&apos;ll build the right thing.
          </p>
        </div>

        <div className={styles.grid}>
          {siteData.services.map((s, i) => (
            <div
              key={i}
              className={`${styles.card} ${isInView ? styles.cardRevealed : ''}`}
              style={{ transitionDelay: `${i * 90 + 150}ms` }}
            >
              {s.image && (
                <div className={styles.cardImage}>
                  <img src={s.image} alt={s.name} loading="lazy" />
                  <div className={styles.imageOverlay} aria-hidden="true" />
                </div>
              )}
              <div className={styles.cardBody}>
                <div className={styles.iconWrap} aria-hidden="true">
                  <span className={styles.icon}>{s.icon}</span>
                </div>
                <h3 className={styles.name}>{s.name}</h3>
                <p className={styles.desc}>{s.desc}</p>
              </div>
              <div className={styles.cardGlow} aria-hidden="true" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}