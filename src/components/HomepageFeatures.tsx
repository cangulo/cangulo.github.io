/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

type FeatureItem = {
  title: string;
  image: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Developer',
    image: '/img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        I create value for customers by implementing solutions they need.
        How? analyzing the requirements, doing estimations and, most important, coding.
        I built a personal definition for a developer <a href="./values/developer"> here</a>.
      </>
    ),
  },
  {
    title: 'DevOps',
    image: '/img/undraw_docusaurus_tree.svg',
    description: (
      <>
        I have implemented processes that took Terraform and dotnet source code, create a release, and deploy it using Bitbucket Pipelines and GitHub Actions.
        {/* You can check my notes about being a DevOps <a href="./values/devops"> here</a>. */}
      </>
    ),
  },
  {
    title: 'Team Player',
    image: '/img/undraw_docusaurus_react.svg',
    description: (
      <>
        <i>How can I help?</i> I think that is a good way to start a conversation.
        However, there is a balance. Team Priorities first, anything else after.
      </>
    ),
  },
  {
    title: 'Challenge Seeker',
    image: '/img/undraw_docusaurus_react.svg',
    description: (
      <>
        Motivation, that is one of the keys to progress.
        I build mine from the challenges I face.
        What are the other keys? I think discipline.
      </>
    ),
  },
  {
    title: 'Documentation Hero',
    image: '/img/undraw_docusaurus_react.svg',
    description: (
      <>
        Do you know the <a href="https://en.wikipedia.org/wiki/Bus_factor">bus factor</a> ?
        I try to avoid it, as much as I can, by documenting the most important features I do.
        <a href="./values/documentation"> Here are my thoughts. </a>
      </>
    ),
  },
  {
    title: 'Experience',
    image: '/img/undraw_docusaurus_react.svg',
    description: (
      <>
        Yes! I almost forgot to mention:
        I have 5 years of experience with dotnet.
        2 with Terraform and AWS.
        I am a AWS Developer Associate certified.
        You can check my full profile <a href="./about"> here.</a>
      </>
    ),
  },
];

function Feature({ title, image, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureSvg} alt={title} src={image} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
