import React from "react";
import "../style.css";

function Services() {
  return (
    <div>
      <div id="services" className="services">
        <div className="service-one">
          <h1 className="services-bg">Services</h1>
          <h1 className="services-header">Services</h1>
          <p className="services-p">
            A close look at services I can help you with.
          </p>
        </div>

        <div className="service-two">
          <div className="services-box">
            <img src={process.env.PUBLIC_URL + "/images/analysis.png"} alt="" />
            <p className="child">WEB DEVELOPMENT</p>
          </div>

          <div className="services-box">
            <img src={process.env.PUBLIC_URL + "/images/flasks.png"} alt="" />
            <p className="child">CONTENT CREATION</p>
          </div>

          <div className="services-box">
            <img
              src={process.env.PUBLIC_URL + "/images/new-product.png"}
              alt=""
            />
            <p className="child">WEBSITE DESIGN</p>
          </div>

          <div className="services-box">
            <img src={process.env.PUBLIC_URL + "/images/analysis.png"} alt="" />
            <p className="child">YOUTUBE ADS</p>
          </div>

          <div className="services-box">
            <img src={process.env.PUBLIC_URL + "/images/flasks.png"} alt="" />
            <p className="child">CRYPTO TRADING</p>
          </div>

          <div className="services-box">
            <img
              src={process.env.PUBLIC_URL + "/images/new-product.png"}
              alt=""
            />
            <p className="child">FOREX TRADING</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
