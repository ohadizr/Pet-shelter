import React from "react";
import "./PetTableUser.scss";
import { useContext, useState,useEffect } from "react";

export default function PetTableUser(props) {
  const { pets } = props;
  // let headers = [];
  let pet = [];

  // if (pets.length > 0) {
  //   // headers = Object.keys(pets[0]);
  //   pet = pets;
  // }
  

  return (
    <table className="table">
      
   <thead>
       {/* <tr>
          {headers.map((header) => (
            <th key={header}>{header}</th>
          ))}
        </tr> */}
      </thead>
     <tbody>
        {/* {pet.map((item, index) => (
          <tr key={index}>
            {headers.map((header) => (
              <td key={header}>{item[header]}</td>
            ))}
          </tr>
        ))} */}
      </tbody> 
    </table>
  )
}



