import React from "react";

const AudioSection = () => {
  return (
    <section className="py-10 px-6">
      <h3 className="text-2xl font-bold text-gray-800 mb-4">🎧 Audio Resources</h3>
      <div className="space-y-4">
        <audio controls className="w-full">
          <source src="/audio/meditation.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <audio controls className="w-full">
          <source src="/audio/affirmation.mp3" type="audio/mpeg" />
        </audio>
      </div>
    </section>
  );
};

export default AudioSection;
