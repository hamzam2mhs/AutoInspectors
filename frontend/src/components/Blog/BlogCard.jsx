import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ id, title, description }) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg m-4">
      <div className="p-5">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="mb-3 text-gray-700">{description}</p>
        <Link
          to={`/blog/${id}`}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-600"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
