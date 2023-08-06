import { useState } from "react";
import { createContext ,useEffect } from "react";
import localForage from "localforage";
import UserApi from "./Data/UserApi";

const AuthContext = createContext();
const userApi = new UserApi();
function AuthContextProvider({ children }) {
  const [token, setToken] = useState("");
  const [userData, setUserData] = useState([]);
  const [isLogged, setIsLogged] = useState(false);
  const [userDataStored, setUserDataStored] = useState(false);

  async function getUserData() {
    const petApp = await localForage.getItem("petApp");
    const data = await userApi.getUserById(petApp._id, petApp.token);
    
    if (data.status === 200) {
    setUserData(userData);
    setUserDataStored(true);


    }
  }
  getUserData() 

  async function validatePorcces(){
    try {
      const petApp = await localForage.getItem("petApp");
      const userData = await userApi.getUserById(petApp._id, petApp.token);
      if (userData.status === 200) {

      setUserData(userData);
      setIsLogged(true);
      setUserDataStored(true);
      };
    } catch (error) {
      // console.log(error);
    }
  }
  if (!isLogged && userDataStored) {
    // console.log("!isLogged && userDataStored");
    validatePorcces()
}
  if (isLogged && !userDataStored) {
    // console.log("isLogged && !userDataStored");
    getUserData();
  }

    if (!isLogged && !userDataStored) {
      // console.log("!isLogged && !userDataStored");
      validatePorcces()
    }  

  return (
    <AuthContext.Provider
      value={{ userDataStored, userData, setUserData, isLogged, setIsLogged }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthContextProvider };
