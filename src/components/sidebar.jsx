// Sidebar.jsx (v6)
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CASES } from '../constant/constants';

function titleFromPath(pathname) {
  const parts = pathname.split('/').filter(Boolean);
  if (parts[0] === 'case-studies' && parts[1]) {
    const slug = parts[1].replace(/-/g, ' ');
    return slug.replace(/\b\w/g, c => c.toUpperCase());
  }
  return null;
}

export default function Sidebar() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const isCaseStudy = location.pathname.includes('/case-studies');
  const currentTitle = titleFromPath(location.pathname);

  return (
    <div>
      <div>
        <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
        <aside id="colorlib-aside" className="border js-fullheight">
          <div className="text-center" style={{ paddingBottom: 20 }}>
            <div className="author-img" style={{ backgroundImage: 'url(../../images/about.jpg)' }} />
            <h1 id="colorlib-logo"><a href="index.html">Thomas Woods</a></h1>
            <span className="email"><i className="icon-mail"></i> tmwoodsportfolio@gmail.com</span>
            <span className="email"><i className="icon-globe2" style={{fontSize: 15}}></i> London ON, Canada</span>
          </div>

          <nav id="colorlib-main-menu" role="navigation" className="navbar">
            {isHome ?
              (
                <div>
                  <div id="navbar" className="collapse">
                    <ul>
                      <li className="active"><a href="#home" data-nav-section="home">Introduction</a></li>
                      <li><a href="#about" data-nav-section="about">About</a></li>
                      <li><a href="#timeline" data-nav-section="timeline">Timeline</a></li>
                      <li><a href="#projects" data-nav-section="projects">Projects</a></li>
                    </ul>
                  </div>
                  <ul>
                    <li><a href="/case-studies" data-nav-section="casestudies">Case Studies</a></li>
                  </ul>
                </div>
              )
              : (
                <ul>
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                </ul>
              )}

            {isCaseStudy ?
              (
                <ul>
                  <li className={!currentTitle ? 'active' : ''}>
                    <a href="/case-studies">Case Studies</a>
                  </li>
                  {CASES.map(cs => {
                    return (<li className={(currentTitle || '').toLowerCase() === cs.slug.toLowerCase() ? 'active' : ''} key={cs.slug}>
                      <a href={`/case-studies/${cs.slug}`}>{cs.title}</a>
                      <div style={{ fontSize: 13, color: '#666' }}>
                      </div>
                    </li>
                    )
                  })}
                </ul>
              ) : null}
          </nav>

          <nav id="colorlib-main-menu">
            <ul>
              <li><a href="https://www.linkedin.com/in/thomas-woods-b97004127/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a></li>
              <li><a href="https://github.com/IsItEnum" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></li>
            </ul>
          </nav>

          <div className="colorlib-footer">
            <p><small>Thanks <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">Colorlib</a> for the template</small></p>
            <p><small>Icons by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> on <a href="https://www.flaticon.com/" title="Flaticon">Flaticon</a></small></p>
          </div>
        </aside>
      </div>
    </div>
  );
}
