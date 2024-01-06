import React from "react";

function Skills() {
  return (
    <div>
      <div id="skill" className="skills">
        <div className="skill-one">
          <h1 className="skill-bg">Skills</h1>
          <h1 className="skill-header">My Skills</h1>
          <p className="skill-p">Below is a proficiency levels of my skills.</p>
        </div>

        <div className="skill-two">
          <div className="skill-set">
            <div className="skill-up">
              <p>HTML5</p>
              <p className="padding">90%</p>
            </div>
            <div className="skill-down">
              <span className="skill-yellow"></span>
              <span className="skill-black"></span>
            </div>
          </div>

          <div className="skill-set">
            <div className="skill-up">
              <p>CSS 3</p>
              <p className="padding1">85%</p>
            </div>
            <div className="skill-down">
              <span className="skill-yellow1"></span>
              <span className="skill-black1"></span>
            </div>
          </div>

          <div className="skill-set">
            <div className="skill-up">
              <p>JavaScript</p>
              <p className="padding2">75%</p>
            </div>
            <div className="skill-down">
              <span className="skill-yellow2"></span>
              <span className="skill-black2"></span>
            </div>
          </div>

          <div className="skill-set">
            <div className="skill-up">
              <p>React.Js</p>
              <p className="padding3">70%</p>
            </div>
            <div className="skill-down">
              <span className="skill-yellow3"></span>
              <span className="skill-black3"></span>
            </div>
          </div>

          <div className="skill-set">
            <div className="skill-up">
              <p>WordPress</p>
              <p className="padding4">80%</p>
            </div>
            <div className="skill-down">
              <span className="skill-yellow4"></span>
              <span className="skill-black4"></span>
            </div>
          </div>

          <div className="skill-set">
            <div className="skill-up">
              <p>SEO</p>
              <p className="padding5">75%</p>
            </div>
            <div className="skill-down">
              <span className="skill-yellow5"></span>
              <span className="skill-black5"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
