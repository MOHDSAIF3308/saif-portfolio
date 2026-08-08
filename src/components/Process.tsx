import { siteData } from '@/data/site';
import styles from './Process.module.css';

export default function Process() {
  return (
    <section id="process" className={styles.section}>
      <div className="container">
        <p className="eyebrow">How it works</p>
        <h2 className="section-heading">From idea to live — in 4 steps</h2>
        <p className="section-sub">
          No complicated process. No surprises. Just clear steps from start to finish.
        </p>

        <div className={styles.steps}>
          {siteData.steps.map((s, i) => (
            <div key={i} className={styles.step}>
              <div className={styles.numWrap}>
                <span className={styles.num}>{s.num}</span>
                {i < siteData.steps.length - 1 && (
                  <div className={styles.connector} aria-hidden="true" />
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