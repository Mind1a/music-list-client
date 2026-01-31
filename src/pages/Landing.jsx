import React from "react";

const Landing = () => {
  return (
    <div className="space-y-6">
      <div className="text-center py-8">
        <h1 className="text-4xl font-bold mb-3 text-[#4f46e5]">
          My Music Library
        </h1>
        <p className="text-slate-600">
          Discover and manage your favorite tracks
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Landing;
