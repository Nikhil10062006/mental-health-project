import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button.js";
export default function Navbar() {
  return (
    <div className="Navbar">
      <Link to="/counsellorList">
        <Button>Counsellors</Button>
      </Link>
      <Link to="/resources">
        <Button>Resources</Button>
      </Link>
      <Button>About Us</Button>
      <Link to="/login">
       <Button>Login/SignUp</Button>
      </Link>
      <Link to="/chatroom">
       <Button>Chat</Button>
      </Link>
      <Button>
        <i className="fa-solid fa-moon"></i>Dark Mode
      </Button>
    </div>
  );
}
