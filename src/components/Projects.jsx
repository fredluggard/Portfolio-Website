import React from "react";

function Projects() {
  return (
    <div>
      <div id="project" className="project">
        <div className="project-one">
          <h1 className="project-bg">Projects</h1>
          <h1 className="project-header">My Projects</h1>
          <p className="project-p">Some projects I have embarked on so far</p>
        </div>

        <div className="project-two">
          <div className="project-slide">
            <img src="/images/project-4.jpg" alt="" />
            <div className="project-link">
              <a href="/">Fred's Recipe </a>
              <p>Web Design</p>
            </div>
          </div>
          <div className="project-slide1">
            <img src="/images/project-3.jpg" alt="" />
            <div className="project-link">
              <a href="/">E-Commerce Platform</a>
              <p>Web Design</p>
            </div>
          </div>
          <div className="project-slide2">
            <img src="/images/project-1.jpg" alt="" />
            <div className="project-link">
              <a href="/">Whisper Anonymous Messaging </a>
              <p>Web Design</p>
            </div>
          </div>
          <div className="project-slide3">
            <img src="/images/project-2.jpg" alt="" />
            <div className="project-link">
              <a href="/">NollyScore </a>
              <p>Web Design</p>
            </div>
          </div>
          <div className="project-slide4">
            <img src="/images/project-6.jpg" alt="" />
            <div className="project-link">
              <a href="/">Branding & Illustrative Designs </a>
              <p>Web Design</p>
            </div>
          </div>
          <div className="project-slide5">
            <img src="/images/project-5.jpg" alt="" />
            <div className="project-link">
              <a href="/">Branding & Illustrative Designs </a>
              <p>Web Design</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
