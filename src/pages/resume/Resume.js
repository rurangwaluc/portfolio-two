import React from "react";
import { FaGraduationCap, FaCode } from "react-icons/fa";
import "./Resume.scss";
import Skills from "../skills/Skills";


const Resume = ({ myTheme }) => {
  return (
    <section id="resume" className="resume"  data-theme={myTheme}>
         <h2 className="h2 article-title"> Resume </h2>
         <div className="resume-container">
         <section className="timeline">
            <div className="title-wrapper">
                <div className="icon-box">
                  <FaGraduationCap />
                </div>   
                <h3 className="h3">Education</h3>                                                                                                                                                                                                                                                                       
            </div>
            <ol className="timeline-list">
                <li className="timeline-item">
                    <h4 class="h4 timeline-item-title">University school of the arts</h4>

                    <span>2007 — 2008</span>

                    <p class="timeline-text">
                    Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et
                    quas molestias
                    exceptur.
                    </p>
                </li>
                <li className="timeline-item">
                    <h4 class="h4 timeline-item-title">University school of the arts</h4>

                    <span>2007 — 2008</span>

                    <p class="timeline-text">
                    Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et
                    quas molestias
                    exceptur.
                    </p>
                </li>
                <li className="timeline-item">
                    <h4 class="h4 timeline-item-title">University school of the arts</h4>

                    <span>2007 — 2008</span>

                    <p class="timeline-text">
                    Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et
                    quas molestias
                    exceptur.
                    </p>
                </li>
            </ol>
         </section>

         <section className="timeline">
            <div className="title-wrapper">
                <div className="icon-box">
                <FaCode />
                </div>

                <h3 className="h3">Experience</h3>
            </div>
            <ol className="timeline-list">
                <li className="timeline-item">

                    <h4 className="h4 timeline-item-title">Creative director</h4>

                    <span>2015 — Present</span>

                    <p className="timeline-text">
                    Nemo enim ipsam voluptatem blanditiis praesentium voluptum delenit atque corrupti, quos dolores et qvuas
                    molestias
                    exceptur.
                    </p>
                </li>
                <li className="timeline-item">

                    <h4 className="h4 timeline-item-title">Art director</h4>

                    <span>2013 — 2015</span>

                    <p className="timeline-text">
                    Nemo enim ipsam voluptatem blanditiis praesentium voluptum delenit atque corrupti, quos dolores et qvuas
                    molestias
                    exceptur.
                    </p>
                </li>
                <li className="timeline-item">

                    <h4 className="h4 timeline-item-title">Web designer</h4>

                    <span>2010 — 2013</span>

                    <p className="timeline-text">
                    Nemo enim ipsam voluptatem blanditiis praesentium voluptum delenit atque corrupti, quos dolores et qvuas
                    molestias
                    exceptur.
                    </p>
                </li>
            </ol>
         </section>
         </div>
         <Skills /> 
    </section>
  );
};

export default Resume;
