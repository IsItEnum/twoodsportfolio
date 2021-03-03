import React, { Component } from 'react'

export default class Portfolio extends Component {
  render() {
    return (
      		<div>
				<section className="colorlib-work" data-section="projects">
					<div className="colorlib-narrow-content">
						<div className="row">
							<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
								<span className="heading-meta">My Work</span>
								<h2 className="colorlib-heading animate-box">Projects</h2>
							</div>
						</div>
						<div className="row">
						<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: 'url(images/img-5.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Mystery Mirror</a></h3>
											<span>This project was made as the final for our software projects applied and recieved very high praise from plenty of people. This was also a project shown off at the fall open house by myself and other members.</span>
											<p className="icon">
												<span><a href="https://www.youtube.com/watch?v=4ny0rNwsXyg&feature=youtu.be"><i className="icon-video" />  View Video</a></span>
												
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: 'url(images/img-1.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">C++ Gomoku with MVC</a></h3>
											<span>This program uses Model view Control concepts are well as the command pattern. It is made using C++ and uses a facade to communicate with the C WINAPI.</span>
											<p className="icon">
												<span><a href="https://www.youtube.com/watch?v=v8xpK2BQHxE&feature=youtu.be"><i className="icon-video" />  View Video</a></span>
												
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInTop">
								<div className="project" style={{backgroundImage: 'url(images/img-3.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">C++ Paint MVC</a></h3>
											<span>This paint application uses the exact same framework as the Gomoku application but instead of gomoku it is a simple paint application. This application is also made with C++</span>
											<p className="icon">
												<span><a href="https://youtu.be/Su29hTfTi9M"><i className="icon-video" /> View Video</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInBottom">
								<div className="project" style={{backgroundImage: 'url(images/img-4.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">This website!</a></h3>
											<span>My website here was deployed using github pages which is uses simple git commands to upadate the website quickly and it is also free. It uses a colorlib template for the styling icons were found free online. It uses a bit of react </span>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInBottom">
								<div className="project" style={{backgroundImage: 'url(images/img-6.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Chat App!</a></h3>
											<span>Simple react app for chatting with other users allows for multiple users to be in one chatroom. Designed for mobile phones also Progressive Web Application approved. It is deployed using heroku which is a free cloud platform </span>
											<p className="icon">
												<span><a href="https://twoods-chatroom.herokuapp.com/"><i className="icon-world2" /> Website</a></span>											
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
