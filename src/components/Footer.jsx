import React from "react";

function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="footer-main">
          <div className="foot">
            <h1>About</h1>
            <p>
              I'm a Professional Frontend Web Developer with skills in
              JavaScript and React. I have a lifelong passion and enthusiasm for
              technology most especially programming
            </p>
            <div className="footer-socials">
              <a href="https://twitter.com/fredluggard">
                <img src="/images/twitter.png" alt="" />
              </a>
              <a href="https://facebook.com">
                <img src="/images/facebook.png" alt="" />
              </a>
              <a href="https://instagram.com">
                <img src="/images/instagram.png" alt="" />
              </a>
            </div>
          </div>

          <div className="foot">
            <h1>Links</h1>
            <div className="foot">
              <a href="/">
                <img src="/images/arrow.png" alt="" />
                Home
              </a>
              <a href="#about">
                <img src="/images/arrow.png" alt="" />
                About
              </a>
              <a href="#skill">
                <img src="/images/arrow.png" alt="" />
                Skill
              </a>
              <a href="#project">
                <img src="/images/arrow.png" alt="" />
                Project
              </a>
              <a href="#contact">
                <img src="/images/arrow.png" alt="" />
                Contact
              </a>
            </div>
          </div>

          <div className="foot">
            <h1>Have a Question?</h1>
            <a href="https://www.google.com/maps?q=6.5243793,3.3792057">
              <img src="/images/address.png" alt="" />
              No. 11 Abumchukwu Nnoli Str Abakpa Nike
            </a>
            <a href="tel:+2348140925886">
              <img src="/images/phone-call.png" alt="" />
              +234-814-092-5886
            </a>
            <a href="mailto:fredrick.ebuka33@gmail.com">
              <img src="/images/telegram.png" alt="" />
              fredrick.ebuka33@gmail.com
            </a>
          </div>
        </div>
        <p>Copyright ©2023 All rights reserved by Fred</p>
      </div>
    </div>
  );
}

export default Footer;
