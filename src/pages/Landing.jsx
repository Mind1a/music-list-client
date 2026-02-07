import React, { useEffect, useState } from "react";

const Landing = () => {
  const [musics, setMusics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMusics();
  }, []);

  const fetchMusics = async () => {
    try {
      const response = await fetch("http://localhost:5000/music");

      // JSON.parse + gancalkeveba kontentis sabutebisgan
      const result = await response.json();

      setMusics(result);
      console.log(musics);
    } catch (error) {}
  };

  return (
    <div className="space-y-6">
      <div className="text-center py-8">
        <h1 className="text-4xl font-bold mb-3 text-[#4f46e5]">
          My Music Library
        </h1>
        <p className="text-slate-600">
          Discover and manage your favorite tracks
        </p>
        <div className="flex flex-col gap-5">Count: {musics?.count}</div>
        <div className="flex flex-col gap-5">
          Genre first music: {musics?.data?.[0]?.genre}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {}
      </div>
    </div>
  );
};

export default Landing;
