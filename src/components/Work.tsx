import { siteData } from '@/data/site';
import styles from './Work.module.css';

const tagColors: Record<string, string> = {
  teal: styles.tagTeal,
  amber: styles.tagAmber,
  purple: styles.tagPurple,
  coral: styles.tagCoral,
};

export default function Work() {
  return (
    <section id="work" className={styles.section}>
      <div className="container">
        <p className="eyebrow">Recent work</p>
        <h2 className="section-heading">Projects I've delivered</h2>
        <p className="section-sub">
          Real businesses, real problems, real results. Each project here was built for an actual client — not a tutorial.
        </p>

        <div className={styles.grid}>
          {siteData.projects.map((p, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.cardTop}>
                <span className={`${styles.tag} ${tagColors[p.tagColor] || ''}`}>
                  {p.tag}
                </span>
              </div>
              <h3 className={styles.name}>{p.name}</h3>
              <p className={styles.desc}>{p.desc}</p>
              <div className={styles.tech}>
                {p.tech.map((t, j) => (
                  <span key={j} className={styles.techBadge}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}