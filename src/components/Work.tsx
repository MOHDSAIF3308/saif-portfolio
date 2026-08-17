'use client';
import { useEffect, useRef } from 'react';
import styles from './Work.module.css';

const projects = [
  {
    tag: 'Website',
    tagColor: 'teal',
    name: 'Biosyn Analytical',
    location: 'Indore, MP',
    desc: 'Full website for an accredited food, water, and environment testing laboratory. Built with Next.js 14 App Router and deployed on Cloudflare Workers. Includes 9 service pages, accreditation marquee, grievance portal, EmailJS contact form, and a lab video hero section.',
    highlights: ['Next.js 14', 'Cloudflare Workers', 'EmailJS', 'TypeScript'],
    liveUrl: 'https://biosynanalytical.techbiosyn.workers.dev/',
    liveLabel: 'biosynanalytical.techbiosyn.workers.dev',
    image: '/images/project-biosyn.jpg',
  },
  {
    tag: 'Law Firm Website',
    tagColor: 'amber',
    name: 'NS Legal',
    location: 'New Delhi',
    desc: 'Professional website for a premier Indian taxation and customs law firm founded in 2016. Features practice area pages, attorney profiles, insights section, careers portal, and a consultation booking flow — built for a highly professional legal audience.',
    highlights: ['Next.js', 'Legal industry', 'Multi-page', 'SEO optimised'],
    liveUrl: 'https://www.nslegal.co.in/',
    liveLabel: 'nslegal.co.in',
    image: '/images/project-nslegal.jpg',
  },
  {
    tag: 'Web3 Platform',
    tagColor: 'purple',
    name: 'Solana Academy',
    location: 'Global',
    desc: 'Interactive Solana developer learning platform with in-browser code editor, gamified XP system, global leaderboard, and on-chain NFT credentials. Built for Superteam — trusted by 1,250+ active learners across the Solana ecosystem.',
    highlights: ['Next.js', 'Solana / Web3', 'Gamification', 'On-chain credentials'],
    liveUrl: 'https://solana-academy-platform.vercel.app/',
    liveLabel: 'solana-academy-platform.vercel.app',
    image: '/images/project-solana.jpg',
  },
  {
    tag: 'Business App',
    tagColor: 'coral',
    name: 'AH Construction Portal',
    location: 'Kota · Bhopal · Indore · Allahabad',
    desc: 'Internal operations portal for a heavy machinery fleet. Handles shift-based logbooks for JCB, Poclain, and Telehandler equipment across 4 sites. Features digital daily log entry, role-based access, Excel export with precision formatting, and diesel expense tracking.',
    highlights: ['Node.js', 'MongoDB', 'React', 'Excel / openpyxl'],
    liveUrl: null,
    liveLabel: null,
    image: '/images/project-construction.jpg',
  },
];

const tagColorMap: Record<string, string> = {
  teal: styles.tagTeal,
  amber: styles.tagAmber,
  purple: styles.tagPurple,
  coral: styles.tagCoral,
};

export default function Work() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = gridRef.current?.querySelectorAll('[data-card]');
    if (!cards) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).style.opacity = '1';
            (entry.target as HTMLElement).style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="work" className={styles.section}>
      <div className="container">
        <p className="eyebrow">Real work</p>
        <h2 className="section-heading">Projects I&apos;ve delivered</h2>
        <p className="section-sub">
          Real businesses, real clients, real results. Every project here is live and serving actual users — not a tutorial or demo.
        </p>

        <div className={styles.grid} ref={gridRef}>
          {projects.map((p, i) => (
            <div
              key={i}
              data-card
              className={styles.card}
              style={{
                opacity: 0,
                transform: 'translateY(28px)',
                transition: `opacity 0.55s ease ${i * 100}ms, transform 0.55s ease ${i * 100}ms, box-shadow 0.2s, border-color 0.2s`,
              }}
            >
              {/* Project image */}
              {p.image && (
                <div className={styles.cardImage}>
                  <img src={p.image} alt={p.name} loading="lazy" />
                </div>
              )}

              <div className={styles.cardContent}>
              {/* Top row */}
              <div className={styles.cardTop}>
                <div className={styles.topLeft}>
                  <span className={`${styles.tag} ${tagColorMap[p.tagColor] || ''}`}>
                    {p.tag}
                  </span>
                  <span className={styles.location}>
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                    {p.location}
                  </span>
                </div>
              </div>

              <h3 className={styles.name}>{p.name}</h3>
              <p className={styles.desc}>{p.desc}</p>

              <div className={styles.tech}>
                {p.highlights.map((t, j) => (
                  <span key={j} className={styles.techBadge}>{t}</span>
                ))}
              </div>

              <div className={styles.cardFooter}>
                {p.liveUrl ? (
                  <a
                    href={p.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.liveBtn}
                  >
                    <span className={styles.liveDot} aria-hidden="true" />
                    View live site
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                      <polyline points="15 3 21 3 21 9"/>
                      <line x1="10" y1="14" x2="21" y2="3"/>
                    </svg>
                  </a>
                ) : (
                  <span className={styles.privateLabel}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                    </svg>
                    Internal / private client
                  </span>
                )}
                {p.liveUrl && (
                  <span className={styles.liveUrl}>{p.liveLabel}</span>
                )}
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}