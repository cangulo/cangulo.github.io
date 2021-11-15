import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

function HomepageHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">Hi, I'm Carlos</h1>
        <p className="hero__subtitle">Here are some things that define me:</p>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const profileImg = `https://github.com/cangulo/cangulo/raw/main/profile-picture-preview-link.jpg`;
  const description = `Welcome to my blog :)`;
  return (
    <Layout
      title={`Carlos Angulo Blog`}
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
