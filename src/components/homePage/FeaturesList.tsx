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
    title: 'Platform Engineering',
    svgItem: SVG_IMAGES.HOME_EXPERIENCE,
    description: (
      <>
        I architect and evolve Internal Developer Platforms — golden paths, self-service
        tooling, and paved roads that let 100+ engineers deliver fast, secure, and autonomously.
      </>
    ),
  },
  {
    title: 'AWS & Terraform at Scale',
    svgItem: SVG_IMAGES.HOME_DEVELOPER,
    description: (
      <>
        PR-driven AWS account baselines (networking, ECS, IAM, security) and Terraform
        impact-analysis tooling for multi-environment migrations and large-scale refactors.
      </>
    ),
  },
  {
    title: 'CI/CD & Developer Enablement',
    svgItem: SVG_IMAGES.HOME_DEVOPS,
    description: (
      <>
        Standardized GitHub repositories, workflows, and self-hosted runners powering 200+
        deployments a day and 300+ APIs via a self-service platform.
      </>
    ),
  },
  {
    title: 'Governance & Security',
    svgItem: SVG_IMAGES.HOME_CHALLENGE,
    description: (
      <>
        Org-wide standards enforcement across 1,000+ repositories — GitHub App + Rulesets,
        keyless auth (OIDC, App tokens), and vulnerability management with AWS Inspector.
      </>
    ),
  },
  {
    title: 'AI-Assisted Engineering',
    svgItem: SVG_IMAGES.HOME_DOC_HERO,
    description: (
      <>
        Driving adoption of AI in IaC workflows — Claude Code + MCP servers for Terraform and
        AWS, standards captured in <code>CLAUDE.md</code>, and org-level AI tooling governance.
      </>
    ),
  },
  {
    title: 'Mentoring & Leadership',
    svgItem: SVG_IMAGES.HOME_TEAM,
    description: (
      <>
        I support 100+ engineers through mentoring, best practices, and documentation.
        Team priorities and value creation first — my conversations start with <i>How are
        you?</i> and <i>How can I help?</i>
      </>
    ),
  },
];
