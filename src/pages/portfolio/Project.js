import React from 'react';
import { motion } from "framer-motion";


const Project = ({ item }) => {
  return (
   <li className="project-item  active" key={item.id}>
    <a href={item.url} target="_blank">

    <figure className="project-img">
        <div className="project-item-icon-box">
        <i className="fa fa-eye"></i>
        </div>
        <img  src={item.image} alt='' />

     </figure>
     <h3 className="project-title">{item.name}</h3>

    <p className="project-category">{item.category}</p>

   </a>
   </li>
  );
};

export default Project;
