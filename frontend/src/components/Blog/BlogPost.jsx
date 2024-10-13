import React from "react";
import { useParams } from "react-router-dom";

const BlogPost = () => {
  const { id } = useParams();
  const blogPosts = {
    1: {
      title: "Why Car Inspections Are Crucial",
      content:
        "When buying a second-hand car, inspection is essential to avoid costly repairs...",
    },
    2: {
      title: "5 Signs You’re Buying a Lemon",
      content:
        "Buying a used car can save you money, but if you're not careful, you might end up with a lemon...",
    },
    3: {
      title: "The AutoInspectors Advantage",
      content:
        "AutoInspectors provide detailed car inspections that can help you make informed decisions when buying a second-hand car...",
    },
  };

  const blog = blogPosts[id];

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
      <p className="text-gray-700 text-lg">{blog.content}</p>
    </div>
  );
};

export default BlogPost;
