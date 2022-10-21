import React from 'react';
import { motion } from "framer-motion";


const BlogItem = ({ item }) => {

  const shortenText = (text, n) => {
    if (text.length > n) {
      const shortenedText = text.substring(0, n).concat("...");
      return shortenedText;
    }
    return text;
  };
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
        <p className="blog-text">{shortenText(item.description, 200)}</p>
     </div>


   </a>
   </li>
  );
};

export default BlogItem;
