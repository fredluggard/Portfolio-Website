import React from "react";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { useAnimation, useInView } from "framer-motion";

function Projects() {
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
      <div id="project" className="project top-space">
        <div className="project-one">
          <h1 className="project-bg">Projects</h1>
          <h1 className="project-header">My Projects</h1>
          <p className="project-p">Some projects I have embarked on so far</p>
        </div>

        <div className="project-two">
          <div className="project-slide">
            <img src="/images/bandage.png" alt="Bandage" />
            <div className="project-link">
              <a href="https://bandage-pi-puce.vercel.app/">Bandage E-store</a>
              <p>Web Design</p>
            </div>
          </div>
          <div className="project-slide1">
            <img src="/images/reflex.png" alt="Reflex" />
            <div className="project-link">
              <a href="https://reflex-zeta.vercel.app/">Reflex App</a>
              <p>Web Design</p>
            </div>
          </div>
          <div className="project-slide2">
            <img src="/images/healthkeep.png" alt="HealthKeep" />
            <div className="project-link">
              <a href="https://elastic-bath-tacky-doctor-production.pipeops.app/">
                HealthKeep App
              </a>
              <p>Web Design</p>
            </div>
          </div>
          <div className="project-slide3">
            <img src="/images/whisper.png" alt="" />
            <div className="project-link">
              <a href="https://whisper-app-three.vercel.app/">
                Whisper Anonymous Messaging App
              </a>
              <p>Web Design</p>
            </div>
          </div>
          <div className="project-slide4">
            <img src="/images/project-6.jpg" alt="Fylo" />
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
    </motion.div>
  );
}

export default Projects;
