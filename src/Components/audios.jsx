import React, { useState, useEffect } from "react";
import { Heart } from "lucide-react";
import { Heart as HeartFilled } from "lucide-react";
import { auth, db } from "../firebase";
import { useNavigate } from "react-router-dom";
import { doc, setDoc, deleteDoc, getDoc, collection, getDocs } from "firebase/firestore";

import meditation_1 from "../assets/music/meditation-music-1.mp3"
import meditation_2 from "../assets/music/meditation-music-2.mp3"

const audios = [
  { id: 1, title: "Meditation Music 1", link: meditation_1 },
  { id: 2, title: "Meditation Music 2", link: meditation_2 },
];

const AudioSection = () => {


  const [saved, setSaved] = useState([]);
  const navigate = useNavigate();
  
  useEffect(() => {
    const fetchSaved = async () => {
      const user = auth.currentUser;
      if (!user) return;

      const savedRef = collection(db, "users", user.uid, "savedAudios");
      const snapshot = await getDocs(savedRef);
      const savedIds = snapshot.docs.map((doc) => doc.id);
      setSaved(savedIds);
    };
    fetchSaved();
  }, [auth.currentUser]);
  
  const toggleSave = async (audio) => {
    const user = auth.currentUser;
    if (!user) {
      navigate("/login");
      return;
    }

    const audioId = audio.id.toString();
    const audioRef = doc(db, "users", user.uid, "savedAudios", audioId);
    const existing = await getDoc(audioRef);

    if (existing.exists()) {
      await deleteDoc(audioRef);
      setSaved((prev) => prev.filter((aid) => aid !== audioId));
    } else {
      await setDoc(audioRef, {
        id: audioId,
        title: audio.title,
        link: audio.link,
        savedAt: new Date(),
      });
      setSaved((prev) => [...prev, audioId]);
    }
  };

  return (
    <section className="py-10 px-6">
      <h3 className="text-2xl font-bold text-gray-800 mb-4">🎧 Audio Resources</h3>
      <div className="space-y-6">
        {audios.map((audio) => (
          <div key={audio.id} className="relative w-full">
            <audio controls preload="metadata" className="w-full">
              <source src={audio.link} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>

            {/* 🔹 Save button */}
            <button
              onClick={() => toggleSave(audio)}
              className="absolute bottom-2 right-2 bg-white p-2 rounded-full shadow hover:bg-gray-100 transition"
            >
              {saved.includes(audio.id.toString()) ? (
                <HeartFilled className="w-5 h-5 text-red-500 fill-red-500" />
              ) : (
                <Heart className="w-5 h-5 text-gray-500" />
              )}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AudioSection;
