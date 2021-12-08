/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import styles from './HomepageFeatures.module.css';
import { FeatureItem } from './FeatureItem';
import { Feature } from './Feature';

const FeatureList: FeatureItem[] = [
  {
    title: 'Developer',
    imageSrc: '/img/home_developer.svg',
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
    imageSrc: '/img/home_devops.svg',
    description: (
      <>
        I have implemented processes that took Terraform and dotnet source code, create a release, and deploy it using Bitbucket Pipelines and GitHub Actions.
        {/* You can check my notes about being a DevOps <a href="./values/devops"> here</a>. */}
      </>
    ),
  },
  {
    title: 'Team Player',
    imageSrc: '/img/home_team.svg',
    description: (
      <>
        <i>How can I help?</i> I think that is a good way to start a conversation.
        However, there is a balance. Team Priorities first, anything else after.
      </>
    ),
  },
  {
    title: 'Challenge Seeker',
    imageSrc: '/img/home_challenge.svg',
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
    imageSrc: '/img/home_doc_hero.svg',
    description: (
      <>
        Do you know the <a href="https://en.wikipedia.org/wiki/Bus_factor">bus factor</a>?
        I try to avoid it, as much as I can, by documenting the most important features I do.
        <a href="./values/documentation"> Here are my thoughts. </a>
      </>
    ),
  },
  {
    title: 'Experience',
    imageSrc: '/img/home_experience.svg',
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
