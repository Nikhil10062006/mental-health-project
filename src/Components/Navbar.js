import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button.js";
export default function Navbar() {
  return (
    <div className="Navbar">
      <Link to="/counsellorList">
        <Button>Counsellors</Button>
      </Link>
      <Button>Resouces</Button>
      <Button>About Us</Button>
      <Button>Login/SignUp</Button>
      <Button>Chat</Button>
      <Button>Profile</Button>
      <Button>
        <i className="fa-solid fa-moon"></i>Dark Mode
      </Button>
    </div>
  );
}
