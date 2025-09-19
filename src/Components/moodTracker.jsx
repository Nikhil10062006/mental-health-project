import React, { useState, useEffect } from "react";
import { db, auth } from "../firebase"; 
import { collection, addDoc, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

function MoodTracker() {
  const [moods, setMoods] = useState([]);
  const user = auth.currentUser; // logged-in user
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
  if (!user) {
    return;
  }

  const fetchMoods = async () => {
    const querySnapshot = await getDocs(collection(db, "users", user.uid, "moods"));
    const data = querySnapshot.docs.map(doc => doc.data());
    setMoods(data);
  };

  fetchMoods();
}, [user]);


  const addMood = async () => {
  if (input.trim() && user) {
    const newMood = { date: new Date().toLocaleDateString(), mood: input };

    await addDoc(collection(db, "users", user.uid, "moods"), newMood);

    setMoods(prev => [...prev, newMood]); // update UI
    setInput("");
  }
};
  if (!user) {
      navigate("/login");
      return;
    }


  return (
    <div>
      <h2>Mood Tracker</h2>
      <input
        type="text"
        placeholder="How are you feeling?"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addMood}>Log</button>

      <ul>
        {moods.map((m, i) => (
          <li key={i}>{m.date}: {m.mood}</li>
        ))}
      </ul>
    </div>
  );
}

export default MoodTracker;
