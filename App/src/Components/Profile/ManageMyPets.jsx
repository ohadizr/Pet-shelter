import React from 'react';
import { useContext, useState,useEffect } from "react";
import { AuthContext } from '../.././AuthContextProvider';
import PetsApi from "../.././Data/PetApi";
import UserApi from "../.././Data/UserApi";
import { Grid } from "../.././assets/UiKit/grid/Gird";
import { Line, Rows } from "../.././assets/UiKit/Line/Line";
import PetTableUser from './PetTableUser';





export default function ManageMyPets() {

  const petApi = new PetsApi();
  const userApi = new UserApi();
  const [pets, setPets] = useState([]);

  const { userData } = useContext(AuthContext);
  console.log("userData", userData);


 async function getOwnerPets() {
  try {
    const bearer = await userApi.getToken();
    const url = `http://localhost:8000/pet/user/${bearer._id}`;
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${bearer.token}`,
      },
    };

    const response = await fetch(url, options);
    const data = await response.json();
    const ownerPets = data.owner;


    return ownerPets;
  } catch (error) {
    // console.log(error);
    
  }

  }

async function getingOwnerPets() {
  const data = await getOwnerPets();
  setPets(data);
}


useEffect(() => {
  getingOwnerPets();
}, []);


  return (
    <div>
          <div className="dashboard">
      <h1>My Pets</h1>
      <Grid>
        <Line>
          <Rows>
          {pets?
          <PetTableUser
            pet={pets}
          />
          :null}
          </Rows>
        </Line>
      </Grid>

      

    </div>

    </div>
  )
}


