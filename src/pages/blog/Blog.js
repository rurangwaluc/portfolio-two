import React from "react";
import "./Blog.scss";
import BlogList from './BlogList';


const Blog = ({ myTheme }) => {
  return (
    <section id="blog" className="blog"  data-theme={myTheme}>
         <h2 className="h2 article-title"> Blog </h2>
 
          <BlogList />
    </section>
  );
};

export default Blog;
