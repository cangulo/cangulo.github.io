/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { SVG_IMAGES } from '@site/src/constants/svg_items';
import React from 'react';
import { FeatureItem } from './FeatureItem';

export const FeatureList: FeatureItem[] = [
  {
    title: 'Developer',
    svgItem: SVG_IMAGES.HOME_DEVELOPER,
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
    svgItem: SVG_IMAGES.HOME_DEVOPS,
    description: (
      <>
        I have implemented processes that took Terraform and dotnet source code, create a release, and deploy it using Bitbucket Pipelines and GitHub Actions.
        {/* You can check my notes about being a DevOps <a href="./values/devops"> here</a>. */}
      </>
    ),
  },
  {
    title: 'Team Player',
    svgItem: SVG_IMAGES.HOME_TEAM,
    description: (
      <>
        I work with perseverance and resilience. Team Priorities and value creation first, anything else after. My conversations starts with two simple questions: <i>How are you?</i > and <i>How can I help?</i>
      </>
    ),
  },
  {
    title: 'Challenge Seeker',
    svgItem: SVG_IMAGES.HOME_CHALLENGE,
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
    svgItem: SVG_IMAGES.HOME_DOC_HERO,
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
    svgItem: SVG_IMAGES.HOME_EXPERIENCE,
    description: (
      <>
        More than 8 years of experience in software development. Currently focus on SRE and Platform Engineer responsibilities.
      </>
    ),
  },
];
