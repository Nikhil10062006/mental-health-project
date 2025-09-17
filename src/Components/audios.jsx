import React from "react";
import meditation_1 from "../assets/music/meditation-music-1.mp3"
import meditation_2 from "../assets/music/meditation-music-2.mp3"
const AudioSection = () => {
  return (
    <section className="py-10 px-6">
      <h3 className="text-2xl font-bold text-gray-800 mb-4">🎧 Audio Resources</h3>
      <div className="space-y-4">
        <audio controls preload="metadata" className="w-full">
          <source src={meditation_1} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <audio controls className="w-full">
          <source src={meditation_2} type="audio/mpeg" />
        </audio>
      </div>
    </section>
  );
};

export default AudioSection;
