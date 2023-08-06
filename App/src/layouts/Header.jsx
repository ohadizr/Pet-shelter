import React from 'react'

import '../assets/scss/Head.scss'
import { useState, useEffect } from 'react';
import LargeScreeHead from '../Components/HeadComponenets/largeScreen/LargeScreeHead'
import PhoneScreenSizeHome from '../Components/HeadComponenets/smallScreen/PhoneScreenSizeHome';
export default function Head() {

  const ScreenSize = () => {
    const [display, setDisplay] = useState('x');
  
    useEffect(() => {
      const updateDisplay = () => {
        if (window.innerWidth > 769) {
          setDisplay(<LargeScreeHead/>);
        } else {
          setDisplay(<PhoneScreenSizeHome/>);
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
  

  
  return (
    <>
    {ScreenSize().display}
    </>


  )
}
