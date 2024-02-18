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
              <a href="https://todo-app-pi-umber.vercel.app/">Todo App</a>
              <p>Web Design</p>
            </div>
          </div>
          <div className="project-slide1">
            <img src="/images/pet.png" alt="" />
            <div className="project-link">
              <a href="https://0f83aaab-62a6-492b-9de5-e94a7ef770b7-00-10f0l137h90s4.kirk.replit.dev/">
                Pet Trading
              </a>
              <p>Web Design</p>
            </div>
          </div>
          <div className="project-slide2">
            <img src="/images/whisper.png" alt="" />
            <div className="project-link">
              <a href="https://whisper-app-three.vercel.app/">
                Whisper Anonymous Messaging
              </a>
              <p>Web Design</p>
            </div>
          </div>
          <div className="project-slide3">
            <img src="/images/nolly.png" alt="" />
            <div className="project-link">
              <a href="https://8ae787e1-74e3-42a7-beab-57e02bf356f5-00-6071oeo5avwk.janeway.replit.dev/">
                NollyScore{" "}
              </a>
              <p>Web Design</p>
            </div>
          </div>
          <div className="project-slide4">
            <img src="/images/project-6.jpg" alt="" />
            <div className="project-link">
              <a href="https://fylo-two-zeta.vercel.app/">Fylo</a>
              <p>Web Design</p>
            </div>
          </div>
          <div className="project-slide5">
            <img src="/images/relax.png" alt="" />
            <div className="project-link">
              <a href="https://relax-animation.vercel.app/">Relax Animation</a>
              <p>Web Design</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
