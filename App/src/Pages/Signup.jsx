import React from 'react'
import { useState } from 'react'
import { Grid } from "../assets/UiKit/grid/Gird";
import { Line,Rows } from "../assets/UiKit/Line/Line";
import { useNavigate } from "react-router-dom";
import '../assets/scss/Signup.scss'


export default function Signup() {
  const navigate = useNavigate();
  async function register(f_name, l_name, email, password, password_validate, phone_num, bio) {
    try {
      const response = await fetch('http://localhost:8000/signup' , {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          f_name: f_name,
          l_name: l_name,
          email: email,
          password: password,
          password_validate: password_validate,
          phone_num: phone_num,
          bio: bio
          
        })
  })
  const data = await response.json()
  console.log(data)
  //save token to local storage
  localStorage.setItem('token', data.token)
  } catch (error) {
      console.log(error)
  }
}

register()
  return (
    <div>
      <h1>Signup</h1>
      <Grid>
        <button 
        onClick={() => {
            register()
        }
        }
         >submit</button>
      </Grid>
      
    </div>
  )
}

