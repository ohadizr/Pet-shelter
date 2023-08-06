import React from "react";
import localforage from "localforage";
import { useNavigate } from "react-router-dom";

class UserApi extends React.Component {
  constructor(props) {
    super(props);
    this.url = "http://localhost:8000";
    this.state = {
      users: [],
      f_name: "",
      l_name: "",
      email: "",
      password: "",
      password_validate: "",
      phone_num: "",
      bio: "",
      loading: true,
      error: false,
    };
  }

  async setToken(token, _id) {
    try {
      await localforage.setItem("petApp", { token, _id });

      return;
    
    } catch (error) {
      console.log(error);
    }
  }

  async getToken() {
    try {
      const petApp = await localforage.getItem("petApp");
      return petApp;
    } catch (error) {
      console.log(error);
    }
  }

  async newUser(
    f_name,
    l_name,
    email,
    password,
    password_validate,
    phone_num,
    bio
  )
   {
    try {
      
      const response = await fetch("http://localhost:8000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          f_name: f_name,
          l_name: l_name,
          email: email,
          password: password,
          password_validate: password_validate,
          phone_num: phone_num,
          bio: bio,
        }),
      });
      const data = await response.json();
      console.log(data);
      localStorage.setItem("petApp", data.token);
      //redirect to home page

      return;
    } catch (error) {
      console.log(error);
    }
  }

  async login(email, password) {
    const url = "http://localhost:8000/login/";

    const body = JSON.stringify({ email, password });
    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };

    try {
      const response = await fetch(url, { method: "POST", headers, body });
      const data = await response.json();
      console.log(data);
      if (response.ok) {
        return { user: data.user, token: data.token, status: response.status };
      } else {
        throw new Error(data.message || "Login failed");
      }
    } catch (error) {
      console.error(error);
      throw new Error("Network error");
    }
  }

  async logout() {
    try {
      await localforage.removeItem("petApp");
    } catch (error) {
      console.log(error);
    }
  }
  async getUserById() {
    const user = await this.getToken();
    const _id = user._id;
    const bearer = user.token;
    const url = `http://localhost:8000/user/${_id}`;
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${bearer}`,
        },
      });
      const result = await response.json();
      return {
        status: response.status,
        data: result,
      };
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }
    if (this.state.error) {
      return <div>error...</div>;
    }
    return (
      <div>
        <h1>Users</h1>
        <ul>
          {this.state.users.map((user) => (
            <li key={user.id}>
              {user.f_name} {user.l_name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  //make function that validate user id and token from forage with the api 
  // async validateUser() {
  //   const user = await this.getToken();
  //   console.log(user.token);


  //   const url = `http://localhost:8000/user/validate/${user._id}`;
  //   const bearer = user.token;
  //   const headers = {
  //     Authorization: `Bearer ${bearer}`,
  //   };
  //   const response = await fetch(url, { method: "GET", headers });
  //   const isValid = await response.json();

  //   if (isValid.status === 200) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }
}

export default UserApi;
