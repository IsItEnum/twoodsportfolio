import React, { Component } from 'react'

export default class ProfessionalPortfolio extends Component {
  render() {
    return (
      		<div>
				<section className="colorlib-work" data-section="projects">
					<div className="colorlib-narrow-content">
						<div className="row">
							<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
								<span className="heading-meta">My Work</span>
								<h2 className="colorlib-heading animate-box">CANUSA Development</h2>
							</div>
						</div>
						<div className="row">
						<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: 'url(images/Delaware.png)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Delaware Speedway</a></h3>
											<span>This website was recreated in 2023 using modern Web development standards and SEO best practices</span>
											<p className="icon">
												<span><a href="https://www.delawarespeedway.com/"><i className="icon-world2" />  View Website</a></span>
												<span><a href="/case-studies/delaware"><i className="icon-calender" />  View Case Study</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>	
					</div>
			</section>
      </div>
    )
  }
}
