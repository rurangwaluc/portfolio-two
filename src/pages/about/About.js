import React from "react";
import "./About.scss";
import icon1 from "../../assets/icon-design.svg";
import icon2 from "../../assets/icon-dev.svg";
import icon3 from "../../assets/icon-app.svg";
import icon4 from "../../assets/icon-photo.svg";
import TestimonialsSection from "./TestimonialsSection";

const About = ({ myTheme }) => {
  return (
    <section id="about" className="about"  data-theme={myTheme}>
      <h2 className="h2 article-title">About me</h2>
      <div className="about-text">
          <p>
            I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media.
            I enjoy
            turning complex problems into simple, beautiful and intuitive designs.
          </p>

          <p>
            My job is to build your website so that it is functional and user-friendly but at the same time attractive.
            Moreover, I
            add personal touch to your product and make sure that is eye-catching and easy to use. My aim is to bring
            across your
            message and identity in the most creative way. I created web design for many famous brand companies.
          </p>
      </div>
      <div className="service">
        <h3 className="h3 service-title">What I Do</h3>
        <ul className="service-list">
          <li className="service-item">
           <div className="service-icon-box">
                <img src={icon1} alt="design icon" width="40" />
             </div>
             <div className="service-content-box">
              <h4 className="h4 service-item-title">Web design</h4>
              <p className="service-item-text">
                  The most modern and high-quality design made at a professional level.
                </p>
             </div>
          </li>
          <li className="service-item">
           <div className="service-icon-box">
                <img src={icon2} alt="design icon" width="40" />
             </div>
             <div className="service-content-box">
              <h4 className="h4 service-item-title">Web development</h4>
              <p className="service-item-text">
                High-quality development of sites at the professional level.
                </p>
             </div>
          </li>
          <li className="service-item">
           <div className="service-icon-box">
                <img src={icon3} alt="design icon" width="40" />
             </div>
             <div className="service-content-box">
              <h4 className="h4 service-item-title">Mobile apps</h4>
              <p className="service-item-text">
                  The most modern and high-quality design made at a professional level.
                </p>
             </div>
          </li>
          <li className="service-item">
           <div className="service-icon-box">
                <img src={icon4} alt="design icon" width="40" />
             </div>
             <div className="service-content-box">
              <h4 className="h4 service-item-title">Photography</h4>
              <p className="service-item-text">
              I make high-quality photos of any category at a professional level.
                </p>
             </div>
          </li>
        </ul>
      </div>
      <div className="testimonials">
         <h2 className="h2 article-title">Testimonials</h2>
     

      <TestimonialsSection />
      </div>
    </section>
  );
};

export default About;
