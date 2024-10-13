import React from "react";
import { Routes, Route } from "react-router-dom";
import BlogList from "./BlogList.jsx"; // Blog list component showing blog cards
import BlogPost from "./BlogPost"; // Blog post component for full post

const Blog = () => {
  return (
    <div className="p-4">
      {/* Nested routing for blog section */}
      <Routes>
        {/* Route to display the list of blogs */}
        <Route path="/" element={<BlogList />} />
        {/* Route to display a specific blog post */}
        <Route path="/:id" element={<BlogPost />} />
      </Routes>
    </div>
  );
};

export default Blog;
