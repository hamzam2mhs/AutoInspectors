//BlogPost.jsx
import React from "react";
import { useParams } from "react-router-dom";

const BlogPost = () => {
  const { id } = useParams();
  const blogPosts = {
    1: {
      title: "Why Car Inspections Are Crucial",
      content: [
        "When purchasing a used vehicle in Winnipeg, a city known for its harsh winters and diverse road conditions, a car inspection is crucial...",
        // The rest of the content for this post
      ],
    },
    2: {
      title: "5 Signs You’re Buying a Lemon",
      content: [
        "When buying a second-hand car, there are several red flags to watch for...",
        "### 1. Mismatched Paint",
        "A common indicator of hidden damage is mismatched paint on different parts of the car...",
        "### 2. Unusual Noises",
        "Pay attention to any strange noises coming from the engine...",
        "### 3. Wear on Interior Components",
        "Check for excessive wear and tear on pedals, seats, and the steering wheel...",
        "### 4. Questionable Vehicle History",
        "A vehicle history report can reveal accidents, title issues, and more...",
        "### 5. Inconsistent Mileage",
        "Be wary if the mileage seems unusually low for the car’s age...",
        "Conclusion: Always ensure a thorough inspection before committing to a purchase.",
      ],
    },
    3: {
      title: "The AutoInspectors Advantage",
      content: [
        "AutoInspectors offers comprehensive pre-purchase inspections that give you peace of mind...",
        "### Our Comprehensive Inspection",
        "We thoroughly inspect the engine, transmission, tires, suspension, and more...",
        "### Why Choose AutoInspectors?",
        "We offer expert inspections backed by years of industry experience...",
        "### Saving You Money",
        "Avoid costly repairs down the road by identifying issues before buying a used car...",
        "Conclusion: Trust AutoInspectors to help you make an informed decision.",
      ],
    },
  };

  const blog = blogPosts[id];

  if (!blog) {
    return <p className="text-white">Blog post not found.</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-black bg-opacity-60 rounded-lg">
      <h1 className="text-4xl font-bold mb-6 text-white">{blog.title}</h1>
      {blog.content.map((paragraph, index) => (
        <p key={index} className="text-lg text-white mb-4 leading-relaxed">
          {paragraph}
        </p>
      ))}
    </div>
  );
};

export default BlogPost;
