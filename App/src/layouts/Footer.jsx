import React from 'react'
import { useState, useEffect } from 'react'
import LinkRow from '../Components/FooterComponenets/LinkRow'
import '../assets/scss/Footer.scss'
export default function Footer() {



  return (
    <div className='footerContainer'>
      <LinkRow/>
      <LinkRow/>
      <LinkRow/>
    </div>
  )
}
