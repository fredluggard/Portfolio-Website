import React from "react";

function Resume() {
  return (
    <div>
      <div id="resume" className="resume">
        <div className="resume-one">
          <h1 className="resume-bg">Resume</h1>
          <h1 className="resume-header">Resume</h1>
          <p className="resume-p">
            A close look at some professional degrees or experience I have
            acquired over time.
          </p>
        </div>
        <div className="resume-two">
          <div className="boxOne">
            <h1>2016 - 2021</h1>
            <h2>Bachelor of Science in Biochemistry</h2>
            <p className="resume-small-p">University of Nigeria Nsukka</p>
            <p className="resume-p">
              After 4 years of study and 1 year of strike, I obtained a Bsc in
              Biochemistry from the prestigious university of Nigeria Nsukka in
              2021.
            </p>
          </div>

          <div className="boxOne">
            <h1>2022 - 2023</h1>
            <h2>National Youth Service</h2>
            <p className="resume-small-p">Delta State</p>
            <p className="resume-p">
              I served my country as a school teacher at a secondary school in a
              community called Ezionum in a mandatory one year youth service
              program in Delta State, Nigeria.
            </p>
          </div>

          <div className="boxOne">
            <h1>2023</h1>
            <h2>Up-Skill on Web Development </h2>
            <p className="resume-small-p">GeneSys</p>
            <p className="resume-p">
              I registered and completed a three months course by GeneSys
              Tech-Hub named Up-Skill for web development.
            </p>
          </div>

          <div className="boxOne">
            <h1>2023</h1>
            <h2>Learnable by GeneSys Tech-Hub</h2>
            <p className="resume-small-p">GeneSys</p>
            <p className="resume-p">
              I applied and was admitted for Learnable, a 6 months internship
              program by GeneSys Tech-Hub for Web development
            </p>
          </div>
        </div>
        <div className="resume-three">
          <a className="colored-bg" href="/">
            DOWNLOAD CV
          </a>
        </div>
      </div>
    </div>
  );
}

export default Resume;
