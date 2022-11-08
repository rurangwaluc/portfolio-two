import React from "react";
import { Link } from "react-router-dom";
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
              <Link to='/about'>About</Link>
            </button>
          </div>
        ))}
    </section>
  );
};

export default Hero;
