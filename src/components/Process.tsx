'use client';
import { siteData } from '@/data/site';
import { useInView } from '@/hooks/useInView';
import styles from './Process.module.css';

export default function Process() {
  const { ref: sectionRef, isInView } = useInView<HTMLElement>({ threshold: 0.15 });

  return (
    <section id="process" ref={sectionRef} className={styles.section}>
      <div className="container">
        <div className={`${styles.header} ${isInView ? styles.headerRevealed : ''}`}>
          <p className="eyebrow">How it works</p>
          <h2 className="section-heading">From idea to live — in 4 steps</h2>
          <p className="section-sub">
            No complicated process. No surprises. Just clear steps from start to finish.
          </p>
        </div>

        <div className={styles.steps}>
          {siteData.steps.map((s, i) => (
            <div
              key={i}
              className={`${styles.step} ${isInView ? styles.stepRevealed : ''}`}
              style={{ transitionDelay: `${i * 160 + 100}ms` }}
            >
              <div className={styles.numWrap}>
                <div className={styles.numPulse} />
                <span className={styles.num}>{s.num}</span>
                {i < siteData.steps.length - 1 && (
                  <div
                    className={`${styles.connector} ${isInView ? styles.connectorRevealed : ''}`}
                    style={{ transitionDelay: `${i * 160 + 250}ms` }}
                    aria-hidden="true"
                  />
                )}
              </div>
              <div className={styles.content}>
                <h3 className={styles.title}>{s.title}</h3>
                <p className={styles.desc}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}