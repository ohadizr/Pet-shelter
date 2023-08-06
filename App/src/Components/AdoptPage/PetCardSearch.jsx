// import React from "react";
// import { useState } from "react";
// import { Between, Line, Rows, around } from "../../assets/UiKit/Line/Line";
// import { Grid } from "../../assets/UiKit/grid/Gird";
// import PopUpCardSearch from "./PopUpCardSearch";
// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";
// export default function PetCardSearch(props) {
//   const [showPopUp, setShowPopUp] = useState(false);


//   return (
    
//     <Card style={{ width: "20rem" ,height: "30rem", backgroundColor: "#8BAE82"}}>
//          <Line addClass="around">
//            <img className="dogProfilePicture" src={props.pet.picture} />
//          </Line>
//       <Card.Body>
//         <Card.Title>{props.pet.name}</Card.Title>
//         <Line addClass="between">
//           <h5>{props.pet.breed}</h5>
//           <Rows addClass="between">
//             <h6>Bio:{props.pet.bio}</h6>
//             <h6>Age:{props.pet.age}</h6>
//           </Rows>
//         </Line>
//         <Card.Text>
//           {props.pet.adoption_status}
//         </Card.Text>

//         <Button variant="primary">Go somewhere</Button>
//       </Card.Body>
//     </Card>
//   );
// }
