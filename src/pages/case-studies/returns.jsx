import React from 'react';
import { MetaRow, Metric, Section } from '../../Lib/Helpers';
import CaseStudyGallery from '../../components/CaseStudyGallery';

export default function APCReturns() {
    const METRICS = [
        { label: 'Avg returns per customer', value: '≈30 / month' },
        { label: 'Credit wait time', value: '−7 days' },
    ];

    return (
        <div className="case-study">
            <section className="colorlib-experience cs-hero" data-section="hero">
                <div className="colorlib-narrow-content">
                    <div className="row">
                        <div className="col-md-10 animate-box" data-animate-effect="fadeInLeft">
                            <span className="heading-meta">case study</span>
                            <h2 className="colorlib-heading">APC Returns - Customer Returns Portal (C# + Blazor)</h2>
                            <p className="cs-hero-sub">
                                Helped build a modern returns workflow and web portal. We chose C# and Blazor to match our in-house stack
                                for internal tools and speed up delivery and maintenance.
                            </p>
                            <div className="cs-tags">
                                <span className="cs-tag">C#</span>
                                <span className="cs-tag">Blazor</span>
                                <span className="cs-tag">SQL Server</span>
                                <span className="cs-tag">REST API</span>
                                <span className="cs-tag">Dynamsoft (Barcode)</span>
                                <span className="cs-tag">Authentication</span>
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
                                <MetaRow label="Role">Backend and Full-stack Contributor</MetaRow>
                                <MetaRow label="Timeline">2023 - Present</MetaRow>
                                <MetaRow label="Team">2 developers, ERP specialists, Operations, Marketing</MetaRow>
                                <MetaRow label="Stack">C#, Blazor, SQL Server, JavaScript, Dynamsoft</MetaRow>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Section id="summary" title="Summary and Impact">
                <p>
                    Previously, customers handed paper forms to drivers, leading to bulk, unscheduled pickups and long credit delays.
                    The new portal lets customers create return requests online, validates items against the ERP, and drops pickups
                    into our delivery system so drivers collect returns on their next run. Status, notifications, and barcode
                    scanning (Dynamsoft) streamline intake for Operations.
                </p>
                {METRICS.length > 0 && (
                    <div className="cs-metrics">
                        {METRICS.map(m => <Metric key={m.label} label={m.label} value={m.value} />)}
                    </div>
                )}
            </Section>
            <Section id="context" title="Context and Problem">
                <ul className="cs-list">
                    <li>Manual, paper-based RMAs caused bottlenecks and palletized “bulk” returns.</li>
                    <li>Drivers lacked visibility into what to pick up and when.</li>
                    <li>Operations spent time reconciling items, orders, and eligibility for credit.</li>
                </ul>
            </Section>
            <Section id="approach" title="Approach and Key Decisions">
                <ol className="cs-list-ordered">
                    <li><strong>Blazor app:</strong> Built a secure portal for customers to submit RGAs and track status.</li>
                    <li><strong>Validation layer:</strong> Server-side checks for order number, part eligibility, quantity, and reason codes.</li>
                    <li><strong>Delivery integration:</strong> Auto-create pickup tasks aligned with scheduled routes.</li>
                    <li><strong>Barcode intake:</strong> Dynamsoft scanning for RGAs/line items to speed receiving.</li>
                    <li><strong>Comms and audit:</strong> Email notifications, activity logs, and role-based access.</li>
                    <li><strong>Returns Information:</strong> Give customer access to relevant return information for each part.</li>
                </ol>
            </Section>

            <Section id="results" title="Results">
                <ul className="cs-list">
                    <li>Customers submit returns self-serve; drivers collect on regular runs.</li>
                    <li>Operations processes returns faster with fewer data mismatches.</li>
                    <li>Measured reduction in credit wait times and fewer bulk return surprises.</li>
                </ul>
            </Section>

            <Section id="learnings" title="Challenges and Learnings">
                <ul className="cs-list">
                    <li>Edge cases (multi-invoice RGAs, mixed conditions) needed idempotent updates and clear rules.</li>
                    <li>Standardized label formats improved barcode scan reliability.</li>
                    <li>Simple dashboards + runbooks reduced support pings from branches.</li>
                </ul>
            </Section>

            <Section id="gallery" title="Screenshots / Gallery" col='col-md-12'>
                <CaseStudyGallery
                    items={[
                        { thumb: '/images/Returns1.png', full: '/images/Returns1.png', alt: 'Returns portal — dashboard' },
                        { thumb: '/images/Returns2.png', full: '/images/Returns2.png', alt: 'List view' },
                    ]}
                />
            </Section>
        </div>
    );
}
