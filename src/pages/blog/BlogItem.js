import React from 'react';
import { motion } from "framer-motion";


const BlogItem = ({ item }) => {
  return (
   <li className="blog-post-item" key={item.id}>
    <a href={item.url} target="_blank">

    <figure className="blog-banner-box">
        <img  src={item.image} alt="Design conferences in 2022" loading="lazy" />
     </figure>
     <div className="blog-content">
      <div className="blog-meta">
        <p className="blog-category">{item.category}</p>
        <span className="dot"></span>
        <time datetime="2022-02-23">{item.time}</time>
      </div>
        <h3 className="h3 blog-item-title">{item.name}</h3>
        <p className="blog-text">{item.description}</p>
     </div>


   </a>
   </li>
  );
};

export default BlogItem;
