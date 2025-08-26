import React from 'react';
import { MetaRow, Metric, Section } from '../../Lib/Helpers';
import CaseStudyGallery from '../../components/CaseStudyGallery';

export default function APCPIM() {
  return (
    <div className="case-study">
      <section className="colorlib-experience cs-hero" data-section="hero">
        <div className="colorlib-narrow-content">
          <div className="row">
            <div className="col-md-10 animate-box" data-animate-effect="fadeInLeft">
              <span className="heading-meta">case study</span>
              <h2 className="colorlib-heading">APC Product Information Master (PIM) — C# API + NetSuite</h2>
              <p className="cs-hero-sub">
                Led the backend API for a lightweight PIM used to onboard new products and surface vendor pricing updates
                for our NetSuite ERP. We took an API-first approach in C# so the UI could be built in any stack, while bulk
                pricing flows continued through Celigo to keep NetSuite current.
              </p>
              <div className="cs-tags">
                <span className="cs-tag">C#</span>
                <span className="cs-tag">ASP.NET Core (API)</span>
                <span className="cs-tag">Azure API Management</span>
                <span className="cs-tag">NetSuite</span>
                <span className="cs-tag">SuiteScript 2.x</span>
                <span className="cs-tag">Celigo (integrator.io)</span>
                <span className="cs-tag">SQL Server</span>
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
                <MetaRow label="Role">Backend Lead (API), NetSuite integration</MetaRow>
                <MetaRow label="Timeline">Mid-2023 - Present</MetaRow>
                <MetaRow label="Team">2 developers, ERP team, Purchasing, Pricing</MetaRow>
                <MetaRow label="Stack">C# ASP.NET Core API, Azure API Management, NetSuite (SuiteScript/REST), Celigo, SQL Server</MetaRow>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section id="summary" title="Summary and Impact">
        <p>
          Migrating from a green-screen ERP to NetSuite created a chance to centralize product data.
          The PIM provides a single pane for new-item onboarding (attributes, fitment, vendor links)
          and visibility into vendor price files. The API feeds internal tools and a thin admin UI,
          while Celigo continues to push bulk pricing updates directly into NetSuite to keep records in sync.
        </p>
        <p>Due to the ongoing nature of this project I am unable to share metrics.</p>
      </Section>

      <Section id="context" title="Context and Problem">
        <ul className="cs-list">
          <li>New-item setup spanned multiple spreadsheets and NetSuite screens, causing delays and data drift.</li>
          <li>Vendor price updates arrived in different formats; reconciling them with live NetSuite data was error-prone.</li>
          <li>No central API for internal tools to read/write normalized product attributes.</li>
        </ul>
      </Section>

      <Section id="approach" title="Approach and Key Decisions">
        <ol className="cs-list-ordered">
          <li><strong>API-first:</strong> Built a C# ASP.NET Core API exposing products, vendors, price history, and attribute taxonomies. Frontend is purposefully thin and replaceable.</li>
          <li><strong>Azure API Management:</strong> Consistent auth, rate limits, and per-consumer keys for internal tools.</li>
          <li><strong>Schema and validation:</strong> Normalized product attributes (brand, category, fitment, UOM) with server-side validation and required fields by category.</li>
          <li><strong>NetSuite integration:</strong> SuiteScript RESTlets/Map-Reduce scripts for create/update of items; webhooks/polling to reflect status back into PIM.</li>
          <li><strong>Pricing pipeline:</strong> Celigo handles vendor price file ingestion to NetSuite; PIM ingests a read-only mirror for visibility, audit, and diffing.</li>
          <li><strong>Auditability:</strong> Versioned changes with “who/when/why” notes and a simple approval gate for new items.</li>
        </ol>
      </Section>

      <Section id="architecture" title="Architecture (High-level)">
        <p>
          Vendor files to (Celigo) to NetSuite (authoritative for pricing). PIM (C# API + SQL) stores normalized product data,
          links vendors, and displays pricing snapshots from NetSuite. Azure APIM fronts the API. SuiteScript jobs sync
          item IDs/status and enrich PIM with NetSuite references.
        </p>
        <ul className="cs-list">
          <li><strong>Core entities:</strong> Product, Vendor, PriceSnapshot, AttributeSet, Attachment.</li>
          <li><strong>Interfaces:</strong> REST (JSON); webhooks for sync signals; background jobs for bulk imports.</li>
          <li><strong>Observability:</strong> Structured logs, request IDs, and reconciliation reports for new-item flow.</li>
        </ul>
      </Section>

      <Section id="results" title="Results">
        <ul className="cs-list">
          <li>Single source of truth for product attributes with role-based editing and approvals.</li>
          <li>Fewer pricing discrepancies—Celigo continues to own updates while PIM gives clear visibility and diffs.</li>
          <li>Faster onboarding: streamlined checklists and validations reduce back-and-forth across teams.</li>
        </ul>
      </Section>

      <Section id="learnings" title="Challenges and Learnings">
        <ul className="cs-list">
          <li>Defining category-specific required fields early prevents incomplete items from hitting NetSuite.</li>
          <li>Keeping PIM “informational” for pricing avoids conflicting sources of truth and simplifies ops.</li>
          <li>APIM policies (quotas, JWT) made internal integrations safer without slowing teams down.</li>
        </ul>
      </Section>

    </div>
  );
}
