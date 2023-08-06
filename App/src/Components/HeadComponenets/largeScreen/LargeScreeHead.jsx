import React from 'react'
import TopMessage from '../topmessage/TopMessage'
import UpperNav from '../upernav_signin/UpperNav'
import LowerNav from './LowerNav'

export default function LargeScreeHead(props) {
  const {uperNav} = props

  return (
    <div className='headContainer'>
    <div className='TopMessage'> 
    <TopMessage/>
    </div>

    <div className='UpperNav'>
            <UpperNav/>
    </div>
    <hr className='hr_standard'/>

    <div className='LowerNav'>
      {<LowerNav/>}
      </div>
    </div>
  )
}
