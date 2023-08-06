import React from 'react'
import { useNavigate } from "react-router-dom";
import {useState} from 'react'
import '../assets/scss/Register.scss'
import { Grid } from "../assets/UiKit/grid/Gird";
import { Line,Rows } from "../assets/UiKit/Line/Line";
import UserApi from '.././Data/UserApi'

export default function Register() {
    const navigate = useNavigate();
    const [registerEmail, setEmail] = useState("");
    const [registerPassWord, setPassword] = useState("");
    const [confirmationPassWord, setConfirmationPassWordPassword] = useState("");
    const [phone_num, setPhone_num] = useState("");
    const [f_name, setF_name] = useState("");
    const [l_name, setL_name] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    function handlesubmit(e) {
      e.preventDefault();
      const userApi = new UserApi()

      registerPassWord === confirmationPassWord
        ? 
        userApi.newUser(f_name, l_name, registerEmail, registerPassWord, confirmationPassWord, phone_num, "bio")
        .then((response) => {
          if (response.status === 200) {
            navigate("/home");
          } else {
            setErrorMessage("ERROR: Something went wrong.");
          }
        })
        : setErrorMessage(
            "ERROR: Your password and confirmation password do not match."
          );
}  

  return (
    <div className='RegisterContainer'>
    <Grid>
    <h2>Register User</h2>
        <form className="registerDiv" onSubmit={handlesubmit}>

    <Rows>
        <label>First Name</label>
        <input
          type="text"
          value={f_name}
          onChange={(e) => setF_name(e.target.value)}
        />
        <label>Last name</label>
        <input
          type="text"
          value={l_name}
          onChange={(e) => setL_name(e.target.value)}
        />
        <label>Email</label>
        <input
          type="email"
          value={registerEmail}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Phone Number</label>
        <input
          type="phone"
          value={phone_num}
          onChange={(e) => setPhone_num(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          value={registerPassWord}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label>Confirm Password</label>
        <input
          type="password"
          value={confirmationPassWord}
          onChange={(e) => setConfirmationPassWordPassword(e.target.value)}
        />
        <button type="submit"
        handlesubmit={handlesubmit}
        >Register</button>

        <p>{errorMessage}</p>

        </Rows>
        </form> 
        </Grid>
    </div>
  )
}

