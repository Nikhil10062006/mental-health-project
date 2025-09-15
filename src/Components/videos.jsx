import React from "react";

const VideoSection = () => {
  return (
    <section className="py-10 px-6">
      <h3 className="text-2xl font-bold text-gray-800 mb-4">🎥 Video Resources</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <iframe
          className="w-full h-[60vh] rounded-lg"
          src="https://www.youtube.com/embed/2OEL4P1Rz04"
          title="Video Resource"
          allowFullScreen
        ></iframe>
        <iframe
          className="w-full h-[60vh] rounded-lg"
          src="https://www.youtube.com/embed/z6X5oEIg6Ak"
          title="Video Resource"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default VideoSection;
