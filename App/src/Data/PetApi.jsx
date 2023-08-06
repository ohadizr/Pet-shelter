import React from "react";
import localforage from "localforage";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

class PetsApi extends React.Component {
  async getPetData() {
    const web = "http://localhost:8000/pets";
    try {
      const response = await fetch(web);
      const results = await response.json();
      return results;
    } catch (error) {
      console.log(error);
    }
  }

  async addPet(formData, id) {
    const url = "http://localhost:8000/addPet";

    const data = {
      type: formData.type,
      name: formData.name,
      adoption_status: formData.adoption_status,
      picture:
        "https://w7.pngwing.com/pngs/68/852/png-transparent-catdog-season-2-cat-mammal-animals-cat-like-mammal-thumbnail.png",
      height: formData.height,
      weight: formData.weight,
      color: formData.color,
      bio: formData.bio,
      hypoallergenic: formData.hypoallergenic,
      breed: formData.breed,
      dietary_restrictions: formData.dietary_restrictions,
      owner: id,
      age: formData.age,
    };
    console.log(data);
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    };
    try {
      const response = await fetch(url, options);
      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  async getPetById(id) {
    const web = `http://localhost:8000/pets/${id}`;
    try {
      const response = await fetch(web);
      const results = await response.json();
      return results;
    } catch (error) {
      console.log(error);
    }
  }

  async getPetByUserId(id) {
    const web = `http://localhost:8000/pets/user/${id}`;
    try {
      const response = await fetch(web);
      const results = await response.json();
      return results;
    } catch (error) {
      console.log(error);
    }
  }

  async updatePet(id, pet) {
    const web = `http://localhost:8000/pet/${id}`;
    try {
      const response = await fetch(web, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(pet),
      });
      const results = await response.json();
      return results;
    } catch (error) {
      console.log(error);
    }
  }

  async filtered(input) {
    console.log("input", input);
    const filter = {
      type: input.type,
      adoption_status: input.adoption_status,
      height: input.height,
      weight: input.weight,
      age: input.age,
    };
    console.log("filter", filter);
    const url = "http://localhost:8000/pet";

    try {
      const response = await fetch(url, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(),
      });
      const result = await response.json();
      return result;
    } catch (error) {
      console.error(error);
    }
  }
}
export default PetsApi;
