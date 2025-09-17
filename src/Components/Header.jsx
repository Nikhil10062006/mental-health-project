import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="flex justify-between items-center px-6 py-4 bg-white shadow">
      <h1 className="text-xl font-bold text-indigo-600">College Mental Health</h1>
      <nav>
        <ul className="flex gap-6 text-gray-700">
          <Link to="/">Home</Link> |{" "}
          <li>Resources</li>
          <li>Counselors</li>
          <li>Events</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
