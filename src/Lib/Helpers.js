import React from "react";

function MetaRow({ label, children }) {
  return (
    <div className="cs-meta-row">
      <div className="cs-meta-label">{label}</div>
      <div className="cs-meta-value">{children}</div>
    </div>
  );
}

function Metric({ label, value }) {
  return (
    <div className="cs-metric">
      <div className="cs-metric-value">{value}</div>
      <div className="cs-metric-label">{label}</div>
    </div>
  );
}

function Section({ title, children, id, col = "col-md-8"}) {
  return (
    <section id={id} className="colorlib-experience cs-section" data-section={id}>
      <div className="colorlib-narrow-content">
        <div className="row">
          <div className={col}>
            <h3 className="colorlib-heading cs-section-title">{title}</h3>
            <div className="cs-section-body">{children}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { MetaRow, Metric, Section };