import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button.js";
export default function Navbar() {
  return (
    <div className="Navbar flex justify-between items-center px-6 py-4 bg-white shadow">
      <Link to="/counsellorList">
        <Button>Counsellors</Button>
      </Link>
      <Link to="/resources">
        <Button>Resources</Button>
      </Link>

  <Link to="/chat">🤖 Chatbot Support</Link>

      <Button>About Us</Button>
      <Link to="/login">
       <Button>Login/SignUp</Button>
      </Link>
      <Button>Chat</Button>
      <Button>Profile</Button>
      <Button>
        <i className="fa-solid fa-moon"></i>Dark Mode
      </Button>
    </div>
  );
}
