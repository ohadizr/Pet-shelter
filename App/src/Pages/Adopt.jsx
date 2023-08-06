import React from "react";
import { useState, useEffect } from "react";
import AdoptForm from ".././Components/AdoptPage/AdoptForm";
// import PetCardSearch from ".././Components/AdoptPage/PetCardSearch";
import PetsApi from "../Data/PetApi";
import "../assets/scss/Adopt.scss";
import { Between, Line, Rows } from "../assets/UiKit/Line/Line";
import { Grid } from "../assets/UiKit/grid/Gird";
import Card from ".././assets/UiKit/premade_componenets/card/Card";

export default function Adopt() {
  const petApi = new PetsApi();
  const [filter, setFilter] = useState({});
  const [petArr, setPetArr] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [dataFromChild, setDataFromChild] = useState({});

  const handleDataFromChild = async(data) => {
 

    const values = {
      adoption_status: data.adoption_status,
      type: data.type,
      height: data.height,
      weight: data.weight,
      age: data.age,
    };
    // remove null and empty keys and values
    const filter = Object.keys(values)
      .filter((key) => values[key] !== null && values[key] !== "")
      .reduce((obj, key) => {
        obj[key] = values[key];
        return obj;
      }, {});


    setFilter(filter);

    setLoading(true);
    
    const petData = await petApi.filtered(filter);

    setPetArr(petData);
    setLoading(false);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        // setLoading(true);
        // const petData = await petApi.filtered(filter);
        // console.log(petData);
        // setPetArr(petData);
        // setLoading(false);
      } catch (error) {
        setErrorMessage(error.message);
        setLoading(false);
      }
    }

    fetchData();
  }, [filter]);

  const cardsList = petArr.map((pet) => {
    return <Card key={pet.id} pet={pet} />;
  });
  return (
    <Grid>
      <Line>
        <div className="adoptContainer">
          <div className="adoptHeader">
            <h1>Adopt a Pet</h1>
          </div>

          <div className={"sideNav"}>
            <AdoptForm onData={handleDataFromChild} />
          </div>

          {loading ? (
            <div>Loading...</div>
          ) : (
            <div className="petsContainer">
              {errorMessage ? (
                <div>{errorMessage}</div>
              ) : (
                <Line addClass="between">{cardsList}</Line>
              )}
            </div>
          )}
        </div>
      </Line>
    </Grid>
  );
}
