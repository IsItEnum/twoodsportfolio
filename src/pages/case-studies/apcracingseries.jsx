import React from 'react';
import { MetaRow, Metric, Section } from '../../Lib/Helpers';

export default function APCRacingSeries() {
  return (
    <div className="case-study">
      <section className="colorlib-experience cs-hero" data-section="hero">
        <div className="colorlib-narrow-content">
          <div className="row">
            <div className="col-md-10 animate-box" data-animate-effect="fadeInLeft">
              <span className="heading-meta">case study</span>
              <h2 className="colorlib-heading">APC Racing Series — Standings and Roster (Strapi + Next.js)</h2>
              <p className="cs-hero-sub">
                Helped lead a rebuild of a standings + blog site. We chose Strapi for content authoring and
                Next.js static generation for performance and simpler updates.
              </p>
              <div className="cs-tags">
                <span className="cs-tag">PostgreSQL</span>
                <span className="cs-tag">Next.js</span>
                <span className="cs-tag">React</span>
                <span className="cs-tag">Strapi</span>
                <span className="cs-tag">Headless CMS</span>
                <span className="cs-tag">Static Generation</span>
                <span className="cs-tag">SEO</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="colorlib-experience cs-meta" data-section="meta">
        <div className="colorlib-narrow-content">
          <div className="row">
            <div className="col-md-8 animate-box" data-animate-effect="fadeInLeft">
              <div className="cs-meta-grid">
                <MetaRow label="Role">Frontend / Full-stack Contributor</MetaRow>
                <MetaRow label="Timeline">2024</MetaRow>
                <MetaRow label="Team">2 Developers + Marketing & APC stakeholders</MetaRow>
                <MetaRow label="Stack">Next.js, React, Strapi (Headless), Node.js, PostgreSQL</MetaRow>
                <MetaRow label="Link">
                  <a href="https://www.apcracingseries.com/" target="_blank" rel="noreferrer">
                    apcracingseries.com
                  </a>
                </MetaRow>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section id="summary" title="Summary and Impact">
        <p>
          The previous site didn't support standings or roster images. The new site handles{' '}
          <a href="https://www.apcracingseries.com/drivers" target="_blank" rel="noreferrer">rosters</a>{' '}
          with drivers mapped to multiple series (with series-specific images/sponsors), plus comprehensive{' '}
          <a href="https://www.apcracingseries.com/standings" target="_blank" rel="noreferrer">standings</a>{' '}
          and{' '}
          <a href="https://www.apcracingseries.com/results/late-models/2025" target="_blank" rel="noreferrer">
            results
          </a>{' '}
          similar to modern racing sites.
        </p>
        <div className="cs-metrics">
          <Metric label="Histoircal Pages Created" value="2005-2023" />
          <Metric label="Bounce Rate" value="30% decrease in" />
        </div>
      </Section>

      <Section id="context" title="Context and Problem">
        <ul className="cs-list">
          <li>Race-day traffic spikes required fast, stable delivery.</li>
          <li>Needed a way for users to view drivers, sponsors and current race series.</li>
          <li>Users to have access to up to date standings and results of races the same night the races happen.</li>
        </ul>
      </Section>

      <Section id="approach" title="Approach and Key Decisions">
        <ol className="cs-list-ordered">
          <li><strong>Headless CMS:</strong> Strapi content types (Posts, Pages, Events, Media) with role-based permissions.</li>
          <li><strong>Static Generation:</strong> Next.js pre-render for speed, SEO, and reliability.</li>
          <li><strong>Publish Flow:</strong> Webhook triggers CI/CD rebuilds on publish.</li>
          <li><strong>Performance:</strong> Image optimization and caching headers.</li>
          <li><strong>Standings:</strong> Strong SEO optimization so users can easily find the content they wanted.</li>
        </ol>
      </Section>

      <Section id="results" title="Results">
        <ul className="cs-list">
          <li>Editors ship updates without developer involvement.</li>
          <li>Faster page loads and improved SEO crawlability.</li>
          <li>End users loved the historical results easily accessible in one spot.</li>
        </ul>
      </Section>

      <Section id="learnings" title="Challenges & Learnings">
        <ul className="cs-list">
          <li>Mapped standings to unique slugs to expose the series’ history from the beginning.</li>
          <li>Built a Strapi admin plugin to manage series standings and points from a single page.</li>
          <li>Used Nodemailer to send contact-form emails via a Strapi API endpoint.</li>
        </ul>
      </Section>
    </div>
  );
}
