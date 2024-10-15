import React from "react";
import { Routes, Route } from "react-router-dom";
import BlogList from "./BlogList.jsx"; // Blog list component showing blog cards
import BlogPost from "./BlogPost.jsx"; // Blog post component for full post
import blogImage from "../../assets/BlogImages/blogimage.jpg"; // Importing the image

const Blog = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat p-8"
      style={{ backgroundImage: `url(${blogImage})` }} // Using the imported image
    >
      <div className="bg-gray-800 bg-opacity-90 rounded-lg shadow-lg max-w-6xl mx-auto p-8">
        <h1 className="text-4xl font-bold text-center text-white mb-6">
          AutoInspectors Blog
        </h1>
        {/* Nested routing for blog section */}
        <Routes>
          {/* Route to display the list of blogs */}
          <Route path="/" element={<BlogList />} />
          {/* Route to display a specific blog post */}
          <Route path="/:id" element={<BlogPost />} />
        </Routes>
      </div>
    </div>
  );
};

export default Blog;
