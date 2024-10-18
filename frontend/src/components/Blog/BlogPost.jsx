import React from "react";
import { useParams } from "react-router-dom";

const BlogPost = () => {
  const { id } = useParams();
  const blogPosts = {
    1: {
      title: "Why Car Inspections Are Crucial",
      content: [
        "When purchasing a used vehicle in Winnipeg, a city known for its harsh winters and diverse road conditions, a car inspection is crucial. While Canada as a whole has stringent vehicle safety standards, Winnipeg’s unique climate and geography pose specific challenges that make thorough inspections an invaluable part of the vehicle-buying process. Let’s explore why these inspections are so critical, focusing on Winnipeg's market and the benefits they bring to buyers, sellers, and car owners alike.",
        // Other paragraphs for blog 1...
      ],
    },
    2: {
      title: "5 Signs You’re Buying a Lemon",
      content: [
        "Buying a second-hand car can be a great way to save money, but it can also be risky if you don’t know what to look out for. A 'lemon' is a vehicle that looks good on the outside but hides mechanical problems that will cost you dearly. Here are the top five signs you’re buying a lemon and what to check before closing the deal.",
        "### 1. Extensive Rust and Corrosion",
        "Rust is one of the most common issues in used cars, particularly in areas with harsh winters like Winnipeg. Inspect the undercarriage, wheel wells, and exhaust system for any signs of rust. While a little rust is expected on older cars, extensive corrosion is a red flag that could mean expensive repairs down the line.",
        "### 2. Strange Noises During a Test Drive",
        "Always test drive a car before buying it. Listen carefully for any strange sounds such as knocking, squealing, or grinding. These noises could indicate serious engine or transmission problems that won’t be cheap to fix.",
        // Add more paragraphs for blog 2 content...
      ],
    },
    3: {
      title: "The AutoInspectors Advantage",
      content: [
        "AutoInspectors is more than just a car inspection service—we're your partner in making informed decisions when purchasing a used vehicle. Our team of certified mechanics provides comprehensive inspections that go beyond the basics, giving you a detailed report on the car’s condition and helping you avoid costly repairs down the road.",
        "### Comprehensive Vehicle Checkups",
        "We perform a complete inspection covering all major components, including the engine, transmission, brakes, suspension, and more. Our thorough process ensures that no issue, however minor, goes unnoticed, giving you confidence in your purchase.",
        "### Expertise You Can Trust",
        "Our team has years of experience in the automotive industry, particularly in Winnipeg, where we understand the unique challenges that cars face. From harsh winter conditions to the effects of road salt, we know exactly what to look for.",
        // Add more paragraphs for blog 3 content...
      ],
    },
  };

  const blog = blogPosts[id];

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
