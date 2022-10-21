import React from 'react';
import "./Portfolio.scss";

// import components
import Projects from './Projects';

const Portfolio =  ({ myTheme }) => {
  return (
    <section id='portfolio' className='portfolio' data-theme={myTheme}>
           
            <div> <h2 class="h2 article-title">Portfolio</h2></div>

        
        <Projects />
     
    </section>
  );
};

export default Portfolio;
