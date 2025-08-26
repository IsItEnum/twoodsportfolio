import React from 'react';
import { MetaRow, Metric, Section } from '../../Lib/Helpers';
import CaseStudyGallery from '../../components/CaseStudyGallery';

export default function APCRFID() {
    const METRICS = [
        { label: 'Assets tracked', value: '≈500' },
        { label: 'Inventory Audit Time', value: 'From hours to minutes' },
        { label: 'Missed asset detections', value: '≈2%' },
        { label: 'Asset Creation', value: 'Hours to seconds' },
    ].filter(m => m.value);

    return (
        <div className="case-study">
            <section className="colorlib-experience cs-hero" data-section="hero">
                <div className="colorlib-narrow-content">
                    <div className="row">
                        <div className="col-md-10 animate-box" data-animate-effect="fadeInLeft">
                            <span className="heading-meta">case study</span>
                            <h2 className="colorlib-heading">RFID Asset Tracking — Zebra + Freshservice + Python</h2>
                            <p className="cs-hero-sub">
                                Built an RFID-based asset tracking flow for the IT inventory room. Zebra scanners read tag EPCs; Python tools
                                deduplicate and convert HEX into ASCII, map to Freshservice assets, and log/notify when items leave the room.
                            </p>
                            <div className="cs-tags">
                                <span className="cs-tag">Python</span>
                                <span className="cs-tag">Zebra RFID</span>
                                <span className="cs-tag">Azure API</span>
                                <span className="cs-tag">Zebra Printers</span>
                                <span className="cs-tag">Freshservice API</span>
                                <span className="cs-tag">Asset Tracking</span>
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
                                <MetaRow label="Role">Backend / Tools and Integrations</MetaRow>
                                <MetaRow label="Timeline">2024 - Present</MetaRow>
                                <MetaRow label="Team">IT Ops, Service Desk, 2 Developers</MetaRow>
                                <MetaRow label="Stack">Python services, Zebra RFID scanners, Freshservice REST API</MetaRow>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Section id="summary" title="Summary and Impact">
                <p>
                    We needed a reliable way to know when laptops and peripherals leave the IT inventory room. Using Zebra handheld
                    scanners, a small Python pipeline parses EPCs (HEX to ASCII), filters noise/duplicates, and syncs with Freshservice
                    so assets are auto-identified and events are auditable. Alerts flag unexpected movement and daily reports reconcile stock.
                </p>
                {METRICS.length > 0 && (
                    <div className="cs-metrics">
                        {METRICS.map(m => <Metric key={m.label} label={m.label} value={m.value} />)}
                    </div>
                )}
            </Section>

            <Section id="context" title="Context and Problem">
                <ul className="cs-list">
                    <li>Manual sign-out made audits slow and error-prone; no real-time egress signal.</li>
                    <li>Freshservice held the truth for assets, but wasn't tied to physical movement.</li>
                    <li>RF environments are noisy—duplicates and stray reads needed filtering.</li>
                </ul>
            </Section>

            <Section id="approach" title="Approach and Key Decisions">
                <ol className="cs-list-ordered">
                    <li><strong>Zebra readers:</strong> Configure power, sessions, and antenna profiles for doorway sweeps.</li>
                    <li><strong>Python reader daemon:</strong> Ingest raw EPCs, normalize, and convert HEX to ASCII for human-readable matching.</li>
                    <li><strong>Dedup & smoothing:</strong> Time-window & RSSI thresholds to collapse bursts and ignore stray reflections.</li>
                    <li><strong>Freshservice integration:</strong> Map EPC, asset record; update status/locations and append activity notes via API. Also created a way for IT users to easily scan UPC codes on products and upload them quickly to freshservice for easily management</li>
                    <li><strong>Events & alerts:</strong> “Exit” events trigger notifications to IT Ops when assets move without a linked ticket.</li>
                    <li><strong>Reporting:</strong> Daily export of seen/not-seen items to speed inventory reconciliation.</li>
                </ol>
            </Section>
            <Section id="architecture" title="Architecture (High-level)">
                <p>
                    Zebra scanner, Python (FastAPI) Convert to hex to ASCII, asset lookup (Freshservice),
                    notifications & reports. Minimal infra; services run on an on-prem VM with scheduled jobs.
                </p>
                <ul className="cs-list">
                    <li><strong>Data model:</strong> Tag read (EPC, RSSI, ts, reader), Asset match, Movement event.</li>
                    <li><strong>APIs:</strong> Freshservice REST for asset/notes; simple internal endpoints for dashboards.</li>
                </ul>
            </Section>

            <Section id="results" title="Results">
                <ul className="cs-list">
                    <li>Same-day inventory reconciliation with auditable movement history.</li>
                    <li>Fewer “missing” assets—unexpected exits are flagged immediately.</li>
                    <li>Ops time saved: less manual entry; data flows straight into Freshservice.</li>
                </ul>
            </Section>

            <Section id="learnings" title="Challenges and Learnings">
                <ul className="cs-list">
                    <li>RF tuning (power, antenna orientation) and tag placement drastically affect read quality.</li>
                    <li>Short time windows + RSSI thresholds cut false positives from nearby rooms.</li>
                    <li>Consistent EPC encoding made HEX to ASCII mapping and asset matching deterministic.</li>
                </ul>
            </Section>

            <Section id="gallery" title="Screenshots / Gallery" col='col-md-12'>
                <CaseStudyGallery
                    items={[
                        { thumb: '/images/RFID1.png', full: '/images/RFID1.png', alt: 'RFID asset tracking — dashboard' },
                        { thumb: '/images/RFID2.png', full: '/images/RFID2.png', alt: 'RFID setup' },
                    ]}
                />
            </Section>

        </div>
    );
}
