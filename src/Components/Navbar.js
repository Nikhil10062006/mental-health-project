import React from 'react'
import Button from './Button.js'
export default function Navbar() {
  return (
    <div className="Navbar">
       <Button>Resouces</Button>
       <Button>About Us</Button>
       <Button>Login/SignUp</Button>
       <Button>Chat</Button>
       <Button>Profile</Button>
       <Button>Counsellors</Button>
       <Button><i className="fa-solid fa-moon"></i>Dark Mode</Button>
    </div>
  )
}
