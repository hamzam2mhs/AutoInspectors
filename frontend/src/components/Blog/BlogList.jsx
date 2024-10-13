import React from "react";
import BlogCard from "./BlogCard"; // BlogCard component

const BlogList = () => {
  const blogs = [
    {
      id: 1,
      title: "Why Car Inspections Are Crucial",
      description:
        "Discover the importance of inspecting a second-hand car before making a purchase.",
    },
    {
      id: 2,
      title: "5 Signs You’re Buying a Lemon",
      description:
        "Learn the top warning signs that indicate a second-hand car may be more trouble than it's worth.",
    },
    {
      id: 3,
      title: "The AutoInspectors Advantage",
      description:
        "Find out how AutoInspectors can save you from unexpected repair costs and ensure a smooth ride.",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {blogs.map((blog) => (
        <BlogCard key={blog.id} {...blog} />
      ))}
    </div>
  );
};

export default BlogList;
