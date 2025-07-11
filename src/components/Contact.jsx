import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useAnimation, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qkyb6mi",
        "template_3lwcm4r",
        form.current,
        "0dpCurKgxpSUnFUJw"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert("Message sent successfully");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const widthSize = window.innerWidth;
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
  const animationHidden = {
    hidden: {
      opacity: 1,
      x: 0,
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
      variants={widthSize > 500 ? animationVariants : animationHidden}
      animate={mainControls}
      transition={transition}
    >
      <div id="contact" className="contact top-space">
        {/* The Header Section */}
        <div className="contact-one">
          <h1 className="contact-bg">Contact</h1>
          <h1 className="contact-header">Contact Me</h1>
          {/* <p className="contact-p">You can contact me through the following:</p> */}
        </div>

        {/* The Icon Section */}
        <div className="contact-two">
          <div className="contact-address">
            <div className="address-icon">
              <a href="https://www.google.com/maps?q=6.5243793,3.3792057">
                <img src="/images/address.png" alt="" />
              </a>
            </div>
            <h3>Address</h3>
            <p>No. 11 Abumchukwu Nnoli Str before Nike Lake, Enugu</p>
          </div>

          <div className="contact-number">
            <div className="number-icon">
              <a href="tel:+2348140925886">
                <img src="/images/phone-call.png" alt="" />
              </a>
            </div>
            <h3>Phone Number</h3>
            <p>+234-814-092-5886</p>
          </div>

          <div className="email-address">
            <div className="email-icon">
              <a href="mailto:fredrick.ebuka33@gmail.com">
                <img src="/images/telegram.png" alt="" />
              </a>
            </div>
            <h3>Email</h3>
            <p>fredrick.ebuka33@gmail.com</p>
          </div>

          <div className="twitter">
            <div className="twitter-icon">
              <a href="https://twitter.com/fredluggard">
                <img src="/images/planet-earth.png" alt="" />
              </a>
            </div>
            <h3>Twitter Handle</h3>
            <p>@fredluggard</p>
          </div>
        </div>

        {/* The contact form */}
        <div className="contact-three">
          <div className="contact-form-image">
            <img src="/images/pictures.png" alt="" />
          </div>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <input type="text" placeholder="Your Name" name="user_name" />
              <input type="text" placeholder="Your Email" name="user_email" />
              <input type="text" placeholder="Subject" name="subject" />
              <textarea
                id=""
                cols="30"
                rows="7"
                placeholder="Message"
                name="message"
              ></textarea>
              <input
                type="submit"
                className="colored-input"
                value="Send Message"
              />
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Contact;
