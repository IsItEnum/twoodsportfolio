import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-device-laptop" />
                      </div>
                      <div className="timeline-label">
                        <h2>CANUSA Automotive Warhousing Software Developer <span>2023-Present</span></h2>
                        <p>In mid-2023, I was promoted to Intermediate Developer at CANUSA. During this time, I contributed to several projects working primarily with JavaScript, Python, C#, and CSS. One of the largest initiatives was migrating our ERP system from an outdated green-screen interface to the modern NetSuite platform. As part of this transition, I completed specialized training through Supertraining's SuiteScript courses to strengthen my NetSuite expertise.
                          Our team was also tasked with developing a Product Information Manager (PIM) to streamline adding new products and managing vendor pricing updates in NetSuite. For this project, I led the development of the backend API in C#, giving us the flexibility to build the frontend in any framework. Since most pricing data flowed through Celigo's integration platform, the API ensured NetSuite remained up to date with the latest vendor information while keeping the PIM primarily informational.</p></div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-briefcase" />
                      </div>
                      <div className="timeline-label">
                        <h2>CANUSA Automotive Warhousing Junior Developer <span>2021-2023</span></h2>
                        <p> At the start of my career, I worked as a Junior Developer at CANUSA Automotive, where I primarily focused on building and maintaining our eCommerce website for selling auto parts. This site was built using NopCommerce v4.2, which leverages C# ASP.NET Core and Razor Pages for the frontend.
                          Towards the end of my time as a Junior Developer, I helped lead the redesign of the <a href='https://www.delawarespeedway.com/'>Delaware Speedway website</a>. For this project, we implemented a Strapi headless CMS for the backend and a Next.js frontend. We chose this stack because the site was primarily blog-driven and served mostly static content, making Next.js's static generation an ideal fit. This approach allowed the site to be faster, more efficient, and easier to update compared to other frameworks.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-book2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Compuer Programming Analyst at Fanshawe College <span>2016-2019</span></h2>
                        <p>I recently graduated from Fanshawes program where I finished with a 3.8 GPA getting the deans honour roll in my final three semesters. During these three years I developed many programs some of which are demonstrated below others include, Full stack web appliactions, Phone apps using java and googles MLKit.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-book" />
                      </div>
                      <div className="timeline-label">
                        <h2>Format Industries Final Line Team Member <span>2017, 2018, 2019</span></h2>
                        <p>During the off semesters I worked at format Industries where I helped to create the frame for large trucks. This job helped me become a more independant and effective member of a team. Also it has helped me immensely with my problem solving skills as you were typically working on only a certain part of the line but were expected to solve your own problems fast enough to ensure the line kept moving.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-book" />
                      </div>
                      <div className="timeline-label">
                        <h2>Primary and Higher Education <span>2003-2015</span></h2>
                        <p>I have completed High School with interest as Physics, Programming, Mathmatics and History. During my time at school, I have developed a love for programming and History both of these subjects required a lot of critical thinking and problem solving which I feel are vital to programming and anything I do in my my life currently.  </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
