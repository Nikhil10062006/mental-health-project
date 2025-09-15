import React from "react";

const tools = [
  { title: "Stress Quiz", desc: "Check your stress levels with a quick quiz" },
  { title: "Mood Tracker", desc: "Log your emotions daily" },
  { title: "Download Worksheets", desc: "Guided journaling & exercises" }
];

const InteractiveTools = () => {
  return (
    <section className="py-10 px-6">
      <h3 className="text-2xl font-bold text-gray-800 mb-4">📊 Interactive Tools</h3>
      <div className="grid md:grid-cols-3 gap-6">
        {tools.map((tool, i) => (
          <div key={i} className="bg-white shadow p-6 rounded-lg">
            <h4 className="font-semibold text-gray-700">{tool.title}</h4>
            <p className="text-sm text-gray-600 mt-2">{tool.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InteractiveTools;
