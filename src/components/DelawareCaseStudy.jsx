import React from "react";
import { MetaRow, Metric, Section } from "../Lib/Helpers";

export default function CaseStudyDelaware() {
  return (
    <div className="case-study">
      <section className="colorlib-experience cs-hero" data-section="hero">
        <div className="colorlib-narrow-content">
          <div className="row">
            <div className="col-md-10 animate-box" data-animate-effect="fadeInLeft">
              <span className="heading-meta">case study</span>
              <h2 className="colorlib-heading">Delaware Speedway Rebuild — Strapi Headless CMS + Next.js</h2>
              <p className="cs-hero-sub">Helped lead a ground-up rebuild of a blog/news-heavy site. We chose Strapi for content authoring and Next.js static generation for performance and simpler updates.</p>
              <div className="cs-tags">
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
                <MetaRow label="Role">Frontend / Full‑stack Contributor</MetaRow>
                <MetaRow label="Timeline">2023</MetaRow>
                <MetaRow label="Team">2 Developers, Marketing and Delaware stakeholders</MetaRow>
                <MetaRow label="Stack">Next.js, React, Strapi (Headless), Node.js</MetaRow>
                <MetaRow label="Link">
                  <a href="https://www.delawarespeedway.com/" target="_blank" rel="noreferrer">delawarespeedway.com</a>
                </MetaRow>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section id="summary" title="Summary and Impact">
        <p>
          The previous site was dated and hard to update. We implemented a headless architecture where Strapi manages content and Next.js generates static pages for speed and reliability. Editors now publish quickly without developer help, and users get a fast, stable experience.
        </p>
        <div className="cs-metrics">
          <Metric label="Time to publish" value="Hours down to minutes" />
          <Metric label="Core Web Vitals" value="Solid pass" />
          <Metric label="Build latency" value="Short and Predictable" />
        </div>
      </Section>
      <Section id="context" title="Context and Problem">
        <ul className="cs-list">
          <li>News/blog-driven site with spikes around race days—performance and uptime matter.</li>
          <li>Non-technical editors needed a clean, safe workflow to create posts, pages, and updates.</li>
          <li>Legacy system made routine updates slow and fragile.</li>
        </ul>
      </Section>

      <Section id="approach" title="Approach and Key Decisions">
        <ol className="cs-list-ordered">
          <li><strong>Headless CMS:</strong> Modeled content types in Strapi (Posts, Pages, Events, Media) with role-based permissions.</li>
          <li><strong>Static Generation:</strong> Used Next.js to pre-render pages; most content is static, ideal for speed and SEO.</li>
          <li><strong>Publish Flow:</strong> Trigger site rebuilds on publish via webhook, so editors see changes live quickly.</li>
          <li><strong>UX & Accessibility:</strong> Clean templates, responsive layout, semantic HTML for better readability and search.</li>
          <li><strong>Performance:</strong> Image optimization and caching headers; minimized blocking resources.</li>
        </ol>
      </Section>

      <Section id="architecture" title="Architecture (High-level)">
        <p>
          Editors create content in <em>Strapi</em>. The frontend (Next.js) fetches content at build time and outputs static assets. A small webhook connects Strapi → CI/CD to kick off rebuilds. Static hosting serves content via CDN for fast global delivery.
        </p>
        <ol className="cs-list-ordered">
          <li><strong>Safer authoring:</strong> Strapi permissions and previews.</li>
          <li><strong>Fast loads:</strong> static pages + CDN.</li>
          <li><strong>Simple ops:</strong> rebuilds on publish; low runtime complexity.</li>
        </ol>
        <div className="cs-arch-callouts">
          <div>Simple ops: rebuilds on publish; low runtime complexity.</div>
        </div>
      </Section>

      <Section id="results" title="Results">
        <ul className="cs-list">
          <li>Editors ship updates without developer involvement.</li>
          <li>Noticeably faster page loads and improved SEO crawlability.</li>
          <li>Reduced maintenance: fewer runtime services to babysit.</li>
        </ul>
      </Section>

      <Section id="learnings" title="Challenges and Learnings">
        <ul className="cs-list">
          <li>Content migration required mapping old HTML to structured types; added redirects to preserve SEO.</li>
          <li>Image/media hygiene improved by standardizing aspect ratios and sizes.</li>
          <li>Clear editorial guidelines minimized accidental drafts going live.</li>
        </ul>
      </Section>

      <Section id="next" title="What I'd Improve Next">
        <ul className="cs-list">
          <li>Add search and filtering for posts, results, and events.</li>
          <li>Introduce scheduled publishing and content approvals.</li>
          <li>Evaluate partial rebuilds/ISR if real-time updates become critical.</li>
        </ul>
      </Section>

      <Section id="gallery" title="Screenshots / Gallery ">
        <div className="cs-gallery">
          <img alt="Home page placeholder" src="https://placehold.co/600x360" />
          <img alt="Article page placeholder" src="https://placehold.co/600x360" />
        </div>
      </Section>
    </div>
  );
}
