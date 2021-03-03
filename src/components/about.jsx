import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">About Me</span>
                    <h2 className="colorlib-heading">Who Am I?</h2>
                    <p>
                        I am a Computer Programming graduate from Fanshawe College. I love exploring new technologies and always looking for a challenge and trying to learn new things. When I comes to programming I love being able to create things that people will enjoy and things I will use in my everyday life. Such as automating tasks that are slow to do on my PC like sorting my file system or even searching files looking for a keyword much like linux's grep.
                        Besides coding I have a love for all things history dating all the way back to the Roman empire and Alexanders great empire. I enjoy a good challange and love to solve complex problem. It may be programming or playing a glorfied map painting video game such as Europa Universalis 4 or Crusader Kings. Both of these have one thing in common they are hard and require a creative solution to a problem. Programming has taught me a great deal with problem solving and wanting things to be fast and effcient. 
                    </p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">What I do?</span>
                <h2 className="colorlib-heading">Here are some of my expertise</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i className="icon-bulb" />
                </span>
                <div className="desc">
                    <h3>Patterns in software </h3>
                    <p>I have experience using software design patterns from things such as Model View Controller, Command, Factory and many other software design patterns. A great example of using these programming patterns was during my Gomoku project</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Data Structures & Algorithms</h3>
                    <p>Having graduated from Fanshawe's Computer Programming Analyst, I have understanding of fundamental concepts of Data Structures and Algorithms. I've applied these in my programming to allow it to be fast and effective at handling of database applications for faster CRUD procedures.</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Web Development</h3>
                    <p>Using react to build this website and github pages to deploy it. Also during school I desgined many full stack websites using Angular and Java Spring also using HTML/CSS to design sleak and cool websites. I have also created eCommerance based websites during school where a user would place orders and be able to view and update these orders.</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-2">
                <span className="icon">
                    <i className="icon-npm" />
                </span>
                <div className="desc">
                    <h3>Object Oriented Programming</h3>
                    <p>Use of languages such as C++, Java, and C# to create large scale projects designed for efficency and reusablility. </p>
                </div>
                </div>
            </div>
            
            {/*more here maybe
    
            */}
            </div>
        </div>
        </section>
      </div>
    )
  }
}
