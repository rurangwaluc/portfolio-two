import React, { useState, useEffect } from 'react';
import { AnimatePresence } from "framer-motion";
import Select from 'react-select';
import Option from 'react-select';
// import data
import { blogData } from '../../data';
import { blogListNav } from '../../data';

// import components
import BlogItem from './BlogItem';

const BlogList = () => {
  const [item, setItem] = useState({ name: 'all' });
  const [blogList, setblogList] = useState([]);
  const [active, setActive] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);


  useEffect(() => {
    // get blogList based on item
    setblogList(blogData);

  }, [item]);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent.toLowerCase() });
    setActive(index);
  };

  

  return (
    <section className="blog-posts">
     
       
      
      {/* blogList */}
      <ul className='blog-posts-list'>
        {blogList.map((item) => {
          return <AnimatePresence><BlogItem item={item} key={item.id} /></AnimatePresence>;
        })}
      </ul>
    </section>
  );
};

export default BlogList;
