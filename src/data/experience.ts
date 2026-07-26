/**
 * Single source of truth for Carlos Angulo's professional experience.
 *
 * The /experience page (src/pages/experience.tsx) renders this data, and it is
 * intended to be the canonical record fed into future CVs — edit here, and the
 * site (and any CV export) stays in sync.
 *
 * Privacy: personal phone number and personal email are intentionally NOT kept
 * here. LinkedIn is the public contact pointer.
 */

/** Skill proficiency is expressed out of SKILL_MAX stars. */
export const SKILL_MAX = 4;

export interface Metric {
  value: string;
  label: string;
}

export interface Role {
  title: string;
  company: string;
  companyUrl?: string;
  /** Human-readable start, e.g. "Jan 2020". */
  start: string;
  /** Human-readable end, e.g. "Present". */
  end: string;
  /** ISO-ish sort key (YYYY-MM) for the start date. */
  startISO: string;
  /** One-line role summary. */
  summary?: string;
  contributions?: string[];
  metrics?: Metric[];
}

export interface Skill {
  name: string;
  /** 0..SKILL_MAX */
  level: number;
}

export interface Certification {
  name: string;
  issuer: string;
  year: number;
  verifyUrl?: string;
}

export interface Talk {
  title: string;
  event: string;
  location: string;
  year: number;
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  year: number;
}

export const headline = 'Senior Platform Engineer';

export const summary =
  'Platform Engineer focused on building and optimizing Internal Developer ' +
  'Platforms, enabling teams to ship faster, safer, and more efficiently.';

export const location = 'Barcelona, Spain';

export const linkedin = 'https://www.linkedin.com/in/angulomascarell/';

export const roles: Role[] = [
  {
    title: 'Senior Platform Engineer',
    company: 'Ohpen',
    start: 'Jan 2020',
    end: 'Present',
    startISO: '2020-01',
    summary:
      "Architect and evolve Ohpen's Internal Developer Platform, leading " +
      'initiatives across AWS governance, CI/CD standardization, GitHub ' +
      'organization governance, and developer enablement — fast, secure, ' +
      'autonomous delivery for 100+ engineers.',
    contributions: [
      'Architected and maintained AWS account baselines (networking, ECS, IAM, security), enabling PR-driven provisioning and reducing account setup from hours to minutes.',
      'Designed Terraform impact-analysis tooling for multi-environment migrations and large-scale refactors, reducing risk and manual effort.',
      'Standardized GitHub repositories and CI/CD workflows and integrated self-hosted runners — improving speed, consistency, and cost.',
      'Architected org-wide standards enforcement: GitHub App + organization Rulesets with source-of-truth sync of protected workflows and configs; keyless auth (OIDC, App tokens).',
      'Implemented org-wide vulnerability management for ECR, Lambda, and the EC2 runner fleet (AWS Inspector → Athena, Terraform-provisioned).',
      'Drove AI-assisted engineering adoption: Claude Code + MCP servers (Terraform, AWS) in IaC workflows, standards in CLAUDE.md, and org AI tooling governance.',
    ],
    metrics: [
      { value: '100+', label: 'engineers enabled' },
      { value: '200+', label: 'deploys / day' },
      { value: '1,000+', label: 'repos governed' },
      { value: '300+', label: 'APIs delivered' },
    ],
  },
  {
    title: 'Full Stack Developer',
    company: 'Safened Deposits',
    start: 'Sep 2018',
    end: 'Dec 2019',
    startISO: '2018-09',
  },
  {
    title: 'Analyst',
    company: 'Avanade',
    start: 'Jun 2016',
    end: 'Aug 2018',
    startISO: '2016-06',
  },
];

export const speaking: Talk[] = [
  {
    title: 'Terraform refactor against 100s of environments without downtime',
    event: 'AWS Serverless Meetup',
    location: 'Barcelona',
    year: 2023,
  },
];

export const education: Education[] = [
  {
    degree: 'Telecommunications Engineer',
    institution: 'Universitat Politècnica de Catalunya',
    location: 'Barcelona',
    year: 2017,
  },
];

export const certifications: Certification[] = [
  {
    name: 'AWS Solutions Architect – Associate',
    issuer: 'Amazon Web Services',
    year: 2023,
    verifyUrl:
      'https://www.credly.com/badges/e101bbb3-5137-4e53-9968-659bb26f249a/public_url',
  },
  {
    name: 'AWS Developer – Associate',
    issuer: 'Amazon Web Services',
    year: 2020,
    verifyUrl:
      'https://www.credly.com/badges/80e4c7dd-56c7-451a-8e76-d138e1158e75/public_url',
  },
  {
    name: 'Scrum Master',
    issuer: 'Scrum Manager / PUE',
    year: 2020,
    verifyUrl:
      'https://scrummanager.com/website/c/profile/member.php?id=27674',
  },
];

export const technologies: Skill[] = [
  { name: 'AWS', level: 4 },
  { name: 'Terraform', level: 4 },
  { name: 'GitHub Workflows', level: 4 },
  { name: 'Python', level: 2 },
  { name: 'JavaScript', level: 2 },
];

/** Additional stack (breadth), not star-rated on the CV. */
export const additionalStack = [
  'CloudFormation',
  'Bash',
  'PowerShell',
  '.NET',
  'DataDog',
  'Splunk',
  'CloudWatch',
];

export const languages: Skill[] = [
  { name: 'Spanish', level: 4 },
  { name: 'Catalan', level: 4 },
  { name: 'English', level: 3 },
];

export const softSkills: string[] = [
  'Adaptability and perseverance',
  'Critical and analytical thinking',
  'Leadership and mentoring',
  'Communication',
];
