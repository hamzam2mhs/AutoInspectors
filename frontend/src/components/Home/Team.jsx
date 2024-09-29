import React from "react";

const Team = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="team-item bg-white p-4 rounded-md text-center">
            <h3 className="font-bold text-xl">John Doe</h3>
            <p>Engineer</p>
          </div>
          <div className="team-item bg-white p-4 rounded-md text-center">
            <h3 className="font-bold text-xl">Jane Smith</h3>
            <p>Worker</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
