import React from 'react'
import { useNavigate } from "react-router-dom";

export default function LowerNav() {
  const navigate = useNavigate();
  return (
    <div className='LowerNav'>
    <button className='nakedButton' onClick={() => navigate('/')}>HOME</button>
    <button className='nakedButton' onClick={() => navigate('/adopt')}>ADOPT</button>
    <button className="nakedButton" onClick={() => navigate("/OurMission")}>
          OUR MISSION
          </button>
    <button className='nakedButton' onClick={() => navigate('/contact')}>CONTACT</button>
    </div>
  )
}
