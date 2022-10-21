import React from "react";
import "./Hero.scss";
import { home } from "../../data";
import Typewriter from "typewriter-effect";


const Hero = ({ myTheme }) => {
  return (
    <section id="home" className="hero" data-theme={myTheme}>
      {home.map((val, i) => (
          <div className='heroContent'>
            <h3 className='fontSize' data-aos='fade-right'>
              {val.text}
            </h3>
            <h1>
              <Typewriter
                options={{
                  strings: [`${val.name}`, `${val.post}`, `${val.design}`],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <p data-aos='fade-left'>{val.desc}</p>
            <button className='btn' >
              Download CV
            </button>
          </div>
        ))}
    </section>
  );
};

export default Hero;
