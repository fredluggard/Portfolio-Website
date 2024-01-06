import React, { useState, useEffect } from "react";
import "../style.css";

function Hero() {
  const [firstDiv1, setFirstDiv1] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFirstDiv1((prevFirstDiv1) => !prevFirstDiv1);
    }, 5000); // Change div every 5000 milliseconds (5 seconds)

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures this effect runs once after mount

  return (
    <div className="hero">
      {firstDiv1 ? (
        <div
          className={`hero-one transition-div ${firstDiv1 ? "" : "hidden-div"}`}
        >
          <div className="left-hero">
            <p>Hello!</p>
            <h1>
              I'm <span className="fred">Fredrick Aniebonam</span>
            </h1>
            <h2>A Frontend Web Developer</h2>
            <div className="hire-work">
              <a className="colored-bg" href="#contact">
                HIRE ME
              </a>
              <a className="colored-bg2" href="#project">
                MY WORKS
              </a>
            </div>
          </div>
          <div className="right-hero">
            <img
              className="main-img"
              src={process.env.PUBLIC_URL + "/images/pictures.png"}
              alt=""
            />
          </div>
        </div>
      ) : (
        <div
          className={`hero-two transition-div ${firstDiv1 ? "hidden-div" : ""}`}
        >
          <div className="lefty-hero">
            <p>Hello!</p>
            <h1>
              I'm a <span className="fred">Web Developer</span> based in Nigeria
            </h1>
            <div className="hire-work">
              <a className="colored-bg" href="#contact">
                HIRE ME
              </a>
              <a className="colored-bg2" href="#project">
                MY WORKS
              </a>
            </div>
          </div>
          <div className="righty-hero">
            <img src={process.env.PUBLIC_URL + "/images/picture.png"} alt="" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Hero;
