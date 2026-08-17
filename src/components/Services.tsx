import { siteData } from '@/data/site';
import styles from './Services.module.css';

export default function Services() {
  return (
    <section id="services">
      <div className="container">
        <p className="eyebrow">What I do</p>
        <h2 className="section-heading">What I can build<br />for your business</h2>
        <p className="section-sub">
          From a simple website to a full mobile app — I cover it all. Tell me what problem you're trying to solve, and I'll build the right thing.
        </p>

        <div className={styles.grid}>
          {siteData.services.map((s, i) => (
            <div key={i} className={styles.card}>
              {s.image && (
                <div className={styles.cardImage}>
                  <img src={s.image} alt={s.name} loading="lazy" />
                </div>
              )}
              <div className={styles.cardBody}>
                <div className={styles.icon} aria-hidden="true">{s.icon}</div>
                <h3 className={styles.name}>{s.name}</h3>
                <p className={styles.desc}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}