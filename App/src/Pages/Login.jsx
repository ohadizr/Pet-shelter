import React from "react";
import { useState, useEffect } from "react";
import { Grid } from "../assets/UiKit/grid/Gird";
import { Line, Rows } from "../assets/UiKit/Line/Line";
import { useNavigate } from "react-router-dom";
import "../assets/scss/Login.scss";
import UserAPI from ".././Data/UserApi";
import { AuthContext } from ".././AuthContextProvider";
import { useContext } from "react";
import localforage from "localforage";
import Loading from "../assets/UiKit/premade_componenets/loading/Loading";

export default function Login() {
  const navigate = useNavigate();
  const [registerEmail, setEmail] = useState("");
  const [registerPassWord, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { userData, setUserData,isLogged, setIsLogged,userDataStored } = useContext(AuthContext);
  const userApi = new UserAPI();
  const [loading, setLoading] = useState(false);


  async function checkToken(LogInToken) {
    //take token from local storage and check if it is valid with token from login
    try {
      const tokenFromStorage = await userApi.getToken();
      if (tokenFromStorage.token === LogInToken) {
        setIsLogged(true);
        console.log("token stored is valid");
      }
    } catch (error) {
      console.log(error);
      setErrorMessage(error.message);
    } finally {
      setLoading(false);

    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setLoading(true);
      const userLogIn = await userApi.login(registerEmail, registerPassWord);

      if (userLogIn.status === 200) {
        await userApi.setToken(userLogIn.token,  userLogIn.user._id)
        checkToken(userLogIn.token);
        setLoading(false);
        return
      }
    } catch (error) {
      console.log(error);
      setErrorMessage(error.message);
    } finally {
      setLoading(false);
    }
  }

if (isLogged === true ) {
  navigate("/");
}



  


  return (
    <div className="loginContainer">
      <h2>LogIn</h2>
      <Grid>
        <Rows>
          <form>
            <Line>
              <label>Email</label>
              <input
                type="email"
                value={registerEmail}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Line>

            <Line>
              <label>Password</label>
              <input
                type="password"
                value={registerPassWord}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Line>
            <Line></Line>
            <Line>
              <div>
                <button className="nakedButton" onClick={handleSubmit}>
                  Submit
                </button>
              </div>
            </Line>
            <Line>
              <h5>{errorMessage}</h5>
              {loading ? <Loading /> : null}
            </Line>
          </form>
        </Rows>
      </Grid>
    </div>
  );
}
