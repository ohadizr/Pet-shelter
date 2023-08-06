import React from 'react'
import TopMessage from '../topmessage/TopMessage'
import LowerNavPhone from './LowerNavPhone'
import logo from '../../../assets/Photos/onlydoglogo.png'
import { useNavigate } from 'react-router-dom'
import UpperNav from '../upernav_signin/UpperNav'


export default function PhoneScreenSizeHome() {
  return (
    <div className='headContainer'>
    <div className='TopMessage'> 
    <TopMessage/>
    </div>

     <UpperNav/>
    

      {<LowerNavPhone/>}
      </div>
  )
}
