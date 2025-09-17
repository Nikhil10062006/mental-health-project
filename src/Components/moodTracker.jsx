import React, { useState, useEffect } from "react";

function MoodTracker() {
  const [moods, setMoods] = useState(() => {
    return JSON.parse(localStorage.getItem("moods")) || [];
  });
  const [input, setInput] = useState("");

  const addMood = () => {
    if (input.trim()) {
      const newMoods = [...moods, { date: new Date().toLocaleDateString(), mood: input }];
      setMoods(newMoods);
      localStorage.setItem("moods", JSON.stringify(newMoods));
      setInput("");
    }
  };

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
