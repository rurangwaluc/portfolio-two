import React, { useState, useEffect } from 'react';
import { AnimatePresence } from "framer-motion";
import Select from 'react-select';
import Option from 'react-select';
// import data
import { projectsData } from '../../data';
import { projectsNav } from '../../data';

// import components
import Project from './Project';

const Projects = () => {
  const [item, setItem] = useState({ name: 'all' });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);


  useEffect(() => {
    // get projects based on item
    if (item.name === 'all') {
      setProjects(projectsData);
    } else {
      const newProjects = projectsData.filter((project) => {
        return project.category.toLowerCase() === item.name;
      });
      setProjects(newProjects);
    }
  }, [item]);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent.toLowerCase() });
    setActive(index);
  };

  

  return (
    <div className="projects">
      {/* projects nav */}
        <div className='button-wrapper'>
          {projectsNav.map((item, index) => {
            return (
              <button
                onClick={(e) => {
                  handleClick(e, index);
                }}
                className={`${
                  active === index ? 'active' : ''
                } `}
                key={index}
              >
                {item.name}
              </button> 
            );
          })}
        </div>
       
      
      {/* projects */}
      <ul className='project-list'>
        {projects.map((item) => {
          return <AnimatePresence><Project item={item} key={item.id} /></AnimatePresence>;
        })}
      </ul>
    </div>
  );
};

export default Projects;
