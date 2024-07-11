import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useAnimation, useInView } from "framer-motion";

function Skills() {
  const ref = useRef(null);
  const initial = "hidden";
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const transition = { duration: 1.5, delay: 0.25 };
  const animationVariants = {
    hidden: {
      opacity: 0,
      x: -100,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  };

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <motion.div
      ref={ref}
      whileInView="visible"
      initial={initial}
      variants={animationVariants}
      animate={mainControls}
      transition={transition}
    >
      <div id="skill" className="skills top-space">
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
    </motion.div>
  );
}

export default Skills;
