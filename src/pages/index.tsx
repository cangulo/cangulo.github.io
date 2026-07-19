import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from './index.module.css';
import HomepageFeatures from '../components/homePage/HomepageFeatures';

const STATS = [
  { value: '100+', label: 'engineers enabled' },
  { value: '200+', label: 'deploys / day' },
  { value: '1,000+', label: 'repos governed' },
  { value: '300+', label: 'APIs delivered' },
];

function HomepageHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">Carlos Angulo</h1>
        <p className={styles.heroRole}>Staff Engineer · Platform Engineering</p>
        <p className="hero__subtitle">
          I set technical direction for Internal Developer Platforms — AWS, Terraform, and
          CI/CD at scale — and lead through influence so engineering teams across the org
          ship faster, safer, and more autonomously.
        </p>

        <div className={styles.stats}>
          {STATS.map((s) => (
            <div key={s.label} className={styles.stat}>
              <span className={styles.statValue}>{s.value}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>

        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/projects">
            Explore my projects
          </Link>
          <Link
            className="button button--outline button--secondary button--lg"
            to="https://www.linkedin.com/in/angulomascarell/">
            LinkedIn
          </Link>
          <Link
            className="button button--outline button--secondary button--lg"
            to="https://github.com/cangulo">
            GitHub
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const profileImg = `https://github.com/cangulo/cangulo/raw/main/profile-picture-preview-link.jpg`;
  const description = `Carlos Angulo — Staff Engineer in Platform Engineering. I set technical direction for Internal Developer Platforms (AWS, Terraform, CI/CD) and raise the engineering bar across teams.`;
  return (
    <Layout
      title={`Carlos Angulo — Staff Engineer`}
      description={description}>
      <head>
        <meta name="image" content={profileImg} />
        <meta name="og:image" content={profileImg} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={profileImg} />
      </head>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
