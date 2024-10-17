import React from "react";
import { useParams } from "react-router-dom";

const BlogPost = () => {
  const { id } = useParams();
  const blogPosts = {
    1: {
      title: "Why Car Inspections Are Crucial",
      content: [
        "Discover the importance of inspecting a second-hand car before making a purchase.",
      ],
    },
    2: {
      title: "5 Signs You’re Buying a Lemon",
      content: [
        "Learn the top warning signs that indicate a second-hand car may be more trouble than it's worth.",
      ],
    },
    3: {
      title: "The AutoInspectors Advantage",
      content: [
        "### The AutoInspectors Advantage: Ensuring a Smooth Ride and Saving You From Unexpected Repair Costs",
        "When it comes to buying a used vehicle, the stakes are high. No one wants to drive off the lot only to encounter costly repairs that could have been avoided. That’s where AutoInspectors steps in—a service designed to give you peace of mind by ensuring your second-hand car purchase is a wise and reliable investment.",

        "### Why AutoInspectors?",
        "AutoInspectors offers more than just a basic car check. Our thorough and expert vehicle inspection process digs deep into the technical aspects of a car, identifying any hidden issues that might not be apparent during a test drive or basic inspection. With our service, you’re not just getting a quick look under the hood—you’re getting a comprehensive evaluation of the entire vehicle to ensure it’s in peak condition.",

        "We know how important your vehicle is to your daily life, and we understand that buying a second-hand car is a big financial decision. That’s why we’ve crafted an inspection process that leaves no stone unturned, ensuring that you get a vehicle that’s not just functional but also safe and durable.",

        "### Advanced Inspection Technology",
        "At AutoInspectors, we use state-of-the-art diagnostic tools that allow us to inspect every critical component of your potential vehicle purchase. From engine health to suspension durability, and from brake functionality to the condition of the car’s electrical systems, we ensure every part of the car is checked to avoid any surprises down the road.",

        "Our advanced equipment includes tools for scanning the car’s onboard computer for fault codes, checking battery health, and even measuring brake wear and tire quality. These checks provide insights into the car’s current condition and predict future problems that could arise, saving you from unexpected repairs.",

        "### Saving You from Costly Repairs",
        "Perhaps one of the greatest advantages of using AutoInspectors is how much money we can save you in the long run. Cars are complex machines, and without a proper inspection, you could end up buying a vehicle that has hidden issues—issues that could cost thousands of dollars in repairs shortly after purchase.",

        "For instance, a seemingly perfect car might have underlying issues with its transmission, engine seals, or suspension system, which could lead to sudden breakdowns. Our inspections reveal these problems before you commit to a purchase, allowing you to negotiate a better price or avoid buying a problematic car altogether.",

        "### Transparency in the Used Car Market",
        "One of the biggest challenges in the used car market is trust. With AutoInspectors, you don’t have to rely on the seller’s word alone. We provide an objective, third-party evaluation that lays out all the facts. Sellers who use AutoInspectors are also better positioned in the market because they can offer buyers transparency about the car’s condition, building trust and helping to justify their asking price.",

        "This level of transparency benefits both buyers and sellers, creating a healthier, more honest marketplace where everyone wins. Whether you’re a buyer looking for a reliable vehicle or a seller aiming to build trust with potential customers, AutoInspectors is your partner in ensuring a smooth and worry-free transaction.",

        "### Special Focus on Winnipeg’s Unique Driving Conditions",
        "Winnipeg, with its extreme weather conditions, places unique demands on vehicles. AutoInspectors understands the specific challenges that vehicles in Winnipeg face, from freezing winters to rough roads. Our inspections include checks for rust, corrosion, and wear caused by road salt and icy conditions, ensuring that the car you’re considering can handle Winnipeg’s environment without trouble.",

        "During the winter months, Winnipeg drivers need vehicles that are equipped for harsh, icy conditions. Our inspections take into account factors like tire quality, brake functionality, and battery health, making sure that the car is road-ready for the most challenging seasons.",

        "### More than Just an Inspection: Expert Advice",
        "AutoInspectors doesn’t just hand you a report and send you on your way. We offer expert advice on how to maintain your vehicle based on our findings. If we uncover any minor issues during the inspection, we’ll let you know how to address them before they become bigger, more expensive problems. If everything looks good, we’ll provide you with tips on keeping your car in top shape so that it lasts longer and performs better.",

        "### Conclusion: A Wise Investment for Your Future",
        "Buying a second-hand vehicle can be stressful, but with AutoInspectors, it doesn’t have to be. Our comprehensive inspection services are designed to protect you from unexpected costs and ensure that the car you purchase will serve you reliably for years to come.",

        "In the long run, investing in a professional inspection with AutoInspectors is a small price to pay for the confidence and security of knowing your vehicle is road-ready. Whether you’re buying, selling, or just wanting to check the health of your current car, AutoInspectors is here to help you make the best decision possible.",

        "Make your next vehicle purchase with peace of mind—choose AutoInspectors and drive confidently.",
      ],
    },
    // Add more posts as needed
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
