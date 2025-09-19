import React from 'react'
import Navbar from './Navbar';
import Footer from './footer';
import Hero from './hero.jsx';
import QuotesCarousel from './quotes.jsx';
import Button from './Button';
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <QuotesCarousel/>
      <Link to="/login">
      <Button>Get Started</Button>
      </Link>
      <Footer/>
    </div>
  )
}
