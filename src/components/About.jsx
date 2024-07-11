import React from "react";
import "../style.css";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { useAnimation, useInView } from "framer-motion";

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      transition={{ duration: 1 }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 },
      }}
    >
      <div id="about" className="main-about top-space">
        <div className="about-one">
          <img src={process.env.PUBLIC_URL + "/images/pictures.png"} alt="" />
        </div>
        <div className="about-two">
          <h1 className="about-bg">About</h1>
          <h1 className="about-header">About Me</h1>
          <p>
            I'm a Professional Frontend Web Developer with skills in JavaScript
            and React. I have a lifelong passion and enthusiasm for technology
            most especially programming. I am passionate about leveraging my
            diverse backgrounds to decipher challenging problems and create
            delightful solutions and experiences. I build web applications with
            modern technologies which includes JavaScript, React and CSS
            together with other frameworks it supports. I look forward to honing
            my skills in backend technologies like Node.JS, Express.JS,
            Firebase. Being a diligent, hardworking and result oriented young
            man, I always work towards achieving the best results on each
            project I embark on.
          </p>

          <table className="about-table">
            <tbody>
              <tr>
                <td>Name:</td>
                <td className="about-table-td">
                  Fredrick Aniebonam Chukwuebuka
                </td>
              </tr>
              {/* <tr>
                <td>Date of Birth:</td>
                <td className="about-table-td">April 10, 1999</td>
              </tr> */}
              <tr>
                <td>Address:</td>
                <td className="about-table-td">
                  No. 11 Abumchukwu Nnoli Str Abakpa Nike
                </td>
              </tr>
              <tr>
                <td>Email:</td>
                <td className="about-table-td">fredrick.ebuka33@gmail.com</td>
              </tr>
              <tr>
                <td>Phone</td>
                <td className="about-table-td">+234-814-092-5886</td>
              </tr>
            </tbody>
          </table>
          <a className="colored-bg" href="/">
            DOWNLOAD CV
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
