import React from 'react';
import { Link } from 'react-router-dom';
import { CASES } from '../constant/constants';

export default function CaseStudies() {
  return (
    <section className="colorlib-experience" data-section="case-studies">
      <div className="colorlib-narrow-content">
        <div className="row">
          <div className="col-md-8 animate-box" data-animate-effect="fadeInLeft">
            <span className="heading-meta">projects</span>
            <h2 className="colorlib-heading">Case Studies</h2>

            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {CASES.map(cs => (
                <li key={cs.slug} style={{ marginBottom: 16 }}>
                  <h3 style={{ margin: 0, fontSize: 18, fontWeight: 700 }}>
                    <a href={`/case-studies/${cs.slug}`}>{cs.title}</a>
                  </h3>
                  <div style={{ fontSize: 13, color: '#666' }}>
                    {cs.subtitle} · {cs.meta}
                  </div>
                </li>
              ))}
            </ul>

          </div>
        </div>
      </div>
    </section>
  );
}
