import React from "react";
import "../assets/scss/Home.scss";
import HomeAlternativeSlide from "../Components/Home/HomeAlternativeSlide";
import Banners from "../Components/Home/Banners";
import Alternative from '../Components/Home/Alternative'
import { useState, useEffect } from 'react';
// import { Carousel } from "react-bootstrap";
export default function Home() {

  const ScreenSize = () => {
    const [display, setDisplay] = useState('x');
  
    useEffect(() => {
      const updateDisplay = () => {
        if (window.innerWidth > 769) {
          setDisplay(<Alternative/>);
        } else {
          setDisplay(<HomeAlternativeSlide/>);
        }
      };
      updateDisplay();
      window.addEventListener('resize', updateDisplay);
      return () => {
        window.removeEventListener('resize', updateDisplay);
      };
    }, []);
  
    return {display}
  };
  
//https://react-bootstrap.netlify.app/components/accordion/
  

  return (
    <div className="homeContainer">
      <Banners/>
      {ScreenSize().display}
 
 
      



    </div>
  );
  
}

//320px — 480px: Mobile devices.
// 481px — 768px: iPads, Tablets.
// 769px — 1024px: Small screens, laptops.
// 1025px — 1200px: Desktops, large screens.
