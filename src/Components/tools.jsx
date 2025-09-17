import React from "react";
import { useState } from "react";
import StressQuiz from "./stress_quiz";
import Worksheets from "./worksheets";
import MoodTracker from "./moodTracker";
const tools = [
  { title: "Stress Quiz", desc: "Check your stress levels with a quick quiz" },
  { title: "Mood Tracker", desc: "Log your emotions daily" },
  { title: "Download Worksheets", desc: "Guided journaling & exercises" }
];

const InteractiveTools = () => {

  const [selectedTool, setSelectedTool] = useState(null);

  const handleToolClick = (tool) => {
    setSelectedTool(tool);
  };
  const closeModal = () => {
    setSelectedTool(null);
  };

  return (
    <section className="py-10 px-6">
      <h3 className="text-2xl font-bold text-gray-800 mb-4">📊 Interactive Tools</h3>
      <div className="grid md:grid-cols-3 gap-6">
        {tools.map((tool, i) => (
          <button key={i} onClick={() => handleToolClick(tool)} className="bg-white shadow p-6 rounded-lg">
            <h4 className="font-semibold text-gray-700">{tool.title}</h4>
            <p className="text-sm text-gray-600 mt-2">{tool.desc}</p>
          </button>
        ))}
      </div>
      <div>

      {/* Popup modal */}
      {selectedTool && (
        <div style={styles.overlay}>
          <div style={styles.modal}>
            <button onClick={closeModal} style={styles.closeBtn}>X</button>

            {selectedTool.title === "Stress Quiz" && <StressQuiz />}
            {selectedTool.title === "Mood Tracker" && <MoodTracker />}
            {selectedTool.title === "Download Worksheets" && <Worksheets />}
          </div>
        </div>
      )}
    </div>

    </section>
  );
};
const styles = {
  overlay: {
    position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: "rgba(0,0,0,0.5)", display: "flex",
    justifyContent: "center", alignItems: "center",
  },
  modal: {
    background: "#fff", padding: "2rem", borderRadius: "12px",
    minWidth: "400px", position: "relative"
  },
  closeBtn: {
    position: "absolute", top: "10px", right: "10px", cursor: "pointer"
  }
};

export default InteractiveTools;
