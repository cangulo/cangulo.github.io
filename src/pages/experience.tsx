import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from './experience.module.css';
import {
  SKILL_MAX,
  headline,
  summary,
  location,
  linkedin,
  roles,
  speaking,
  education,
  certifications,
  technologies,
  additionalStack,
  languages,
  softSkills,
  type Skill,
} from '../data/experience';

function Stars({ skill }: { skill: Skill }): JSX.Element {
  const filled = Math.max(0, Math.min(SKILL_MAX, skill.level));
  return (
    <span
      className={styles.stars}
      role="img"
      aria-label={`${skill.name}: ${filled} out of ${SKILL_MAX}`}>
      {Array.from({ length: SKILL_MAX }, (_, i) => (
        <span key={i} aria-hidden="true" className={i < filled ? styles.starOn : styles.starOff}>
          ★
        </span>
      ))}
    </span>
  );
}

function SkillList({ items }: { items: Skill[] }): JSX.Element {
  return (
    <ul className={styles.skillList}>
      {items.map((s) => (
        <li key={s.name} className={styles.skillRow}>
          <span className={styles.skillName}>{s.name}</span>
          <Stars skill={s} />
        </li>
      ))}
    </ul>
  );
}

function Timeline(): JSX.Element {
  return (
    <ol className={styles.timeline}>
      {roles.map((role) => (
        <li key={`${role.company}-${role.startISO}`} className={styles.role}>
          <div className={styles.roleHead}>
            <h3 className={styles.roleTitle}>
              {role.title} · <span className={styles.company}>{role.company}</span>
            </h3>
            <span className={styles.dates}>
              {role.start} – {role.end}
            </span>
          </div>

          {role.summary && <p className={styles.roleSummary}>{role.summary}</p>}

          {role.contributions && role.contributions.length > 0 && (
            <>
              <h4 className={styles.subhead}>Key contributions</h4>
              <ul className={styles.contributions}>
                {role.contributions.map((c, i) => (
                  <li key={i}>{c}</li>
                ))}
              </ul>
            </>
          )}

          {role.metrics && role.metrics.length > 0 && (
            <div className={styles.metrics}>
              {role.metrics.map((m) => (
                <div key={m.label} className={styles.metric}>
                  <span className={styles.metricValue}>{m.value}</span>
                  <span className={styles.metricLabel}>{m.label}</span>
                </div>
              ))}
            </div>
          )}
        </li>
      ))}
    </ol>
  );
}

export default function Experience(): JSX.Element {
  const description = `Carlos Angulo — ${headline}. ${summary}`;
  return (
    <Layout title="Experience" description={description}>
      <main className={styles.page}>
        <header className={styles.header}>
          <h1 className={styles.name}>Carlos Angulo</h1>
          <p className={styles.headline}>{headline}</p>
          <p className={styles.summary}>{summary}</p>
          <p className={styles.meta}>
            {location} ·{' '}
            <Link to={linkedin}>Connect on LinkedIn</Link>
          </p>
        </header>

        <section className={styles.section}>
          <h2>Experience</h2>
          <Timeline />
        </section>

        <div className={styles.grid}>
          <section className={styles.section}>
            <h2>Technologies</h2>
            <SkillList items={technologies} />
            <p className={styles.additional}>
              <strong>Also:</strong> {additionalStack.join(', ')}.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Languages</h2>
            <SkillList items={languages} />
          </section>
        </div>

        <div className={styles.grid}>
          <section className={styles.section}>
            <h2>Certifications</h2>
            <ul className={styles.plainList}>
              {certifications.map((c) => (
                <li key={c.name}>
                  {c.verifyUrl ? <Link to={c.verifyUrl}>{c.name}</Link> : c.name} —{' '}
                  {c.issuer} ({c.year})
                </li>
              ))}
            </ul>
          </section>

          <section className={styles.section}>
            <h2>Education</h2>
            <ul className={styles.plainList}>
              {education.map((e) => (
                <li key={`${e.degree}-${e.year}`}>
                  <strong>{e.degree}</strong> — {e.institution}, {e.location} ({e.year})
                </li>
              ))}
            </ul>
          </section>
        </div>

        <div className={styles.grid}>
          <section className={styles.section}>
            <h2>Speaking</h2>
            <ul className={styles.plainList}>
              {speaking.map((t) => (
                <li key={t.title}>
                  “{t.title}” — {t.event}, {t.location}, {t.year}.
                </li>
              ))}
            </ul>
          </section>

          <section className={styles.section}>
            <h2>Soft skills</h2>
            <ul className={styles.plainList}>
              {softSkills.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </section>
        </div>

        <p className={styles.footerNote}>
          For the full detail, <Link to={linkedin}>connect on LinkedIn</Link>.
        </p>
      </main>
    </Layout>
  );
}
