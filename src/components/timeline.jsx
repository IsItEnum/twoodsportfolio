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
                        <h2>Format Industries Final Line Team Member <span>2018</span></h2>
                        <p>During the off semester I worked at format Industries where I helped to create the frame for large trucks. This job helped me become a more independant and effective member of a team. Also it has helped me immensely with my problem solving skills as you were typically working on only a certain part of the line but were expected to solve your own problems fast enough to ensure the line kept moving.</p> 
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
