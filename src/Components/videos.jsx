import React from "react";
import { useState } from "react";
import videos from "../assets/videos/videolinks.json";

const VideoSection = () => {
  const [videonum, setVideonum] = useState(3);
  const handleLoadMore = () => {
      setVideonum((prev) => Math.min(prev + 3, videos.length));
  };
  const handleShowLess = () => {
    setVideonum(3);
  };
  return (
    <section className="py-10 px-6">
      <h3 className="text-2xl font-bold text-gray-800 mb-4">🎥 Video Resources</h3>
      <div className="flex flex-wrap gap-6">
        {videos.slice(0, videonum).map((video) => (
          <iframe
            key={video.id}
            className="w-[32%] h-[40vh] rounded-lg"
            src={video.link}
            title={video.title}
            allowFullScreen
          ></iframe>
        ))}
      </div>
      <div>
        <button onClick={handleLoadMore} className="mt-4 px-4 py-2 bg-blue-600 text-white rounded">
          Load More
        </button>
        <button onClick={handleShowLess} className={`mt-4 px-4 py-2 bg-blue-600 text-white rounded ${videonum === 3 ? 'hidden' : ''} ml-4`}>
          Show Less
        </button>
      </div>
    </section>
  );
};

export default VideoSection;
