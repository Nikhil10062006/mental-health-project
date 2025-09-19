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
      <Link to="/chatroom">
       <Button>Chat</Button>
      </Link>
      <Link to="/profile">
       <Button>Profile</Button>
      </Link>
    </div>
  );
}
