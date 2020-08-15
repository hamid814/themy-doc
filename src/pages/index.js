import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>Fast implementation</>,
    imageUrl: 'img/undraw_themy_fast_implementation.svg',
    description: (
      <>
        Themy is a lightweight package that just lets you code less. It does
        exactly what you can do, but does it on behalf of you.
      </>
    ),
  },
  {
    title: <>Add theme through js</>,
    imageUrl: 'img/undraw_themy_add_theme_through_js.svg',
    description: (
      <>
        Themes can be added after initilizing, Meaning you can use it as testing
        inside your frotn end
      </>
    ),
  },
  {
    title: <>Comes with utils</>,
    imageUrl: 'img/undraw_themy_comes_with_utils.svg',
    description: (
      <>
        You can extend what themy can serve you and get more help from it. Themy
        can add utility classed to your project too.
      </>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <br />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout title={siteConfig.title} description="simple theme creator">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx('button button--lg', styles.getStarted)}
              to={useBaseUrl('docs/')}
            >
              Open Docs
            </Link>
            <Link
              className={clsx('button button--lg', styles.getStarted)}
              style={{ marginLeft: 10 }}
              to="https://github.com/hamid814/themy"
            >
              Github
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
