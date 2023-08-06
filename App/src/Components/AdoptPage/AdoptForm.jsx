import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import DoubleRangeSlider from "../../assets/UiKit/premade_componenets/DoubleRangeSlider/DoubleRangeSlider";
import { Grid } from "../../assets/UiKit/grid/Gird";
import { Rows } from "../../assets/UiKit/Line/Line";

export default function AdoptForm(props) {
  const [adoption_status, setAdoptionStatus] = useState([]);
  const [type, setType] = useState([]);
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [age, setAge] = useState(null);
  useEffect(() => {
    props.onData({
      adoption_status: adoption_status,
      type: type,
      height: height,
      weight: weight,
      age: age,
    });
  }, [adoption_status, type, height, weight, age]);

  const handleAdoptStatus = (e) => {
    if (e.target.checked) {
      setAdoptionStatus([...adoption_status, e.target.value]);
    } else {
      setAdoptionStatus(
        adoption_status.filter((item) => item !== e.target.value)
      );
    }
  };

  const handleType = (e) => {
    if (e.target.checked) {
      setType([...type, e.target.value]);
    } else {
      setType(type.filter((item) => item !== e.target.value));
    }
  };

//get with child function componentDidUpdate the min and max values for age height and weight
  const handleAge = (value) => {
    setAge(value);
  };
  const handleHeight = (value) => {
    setHeight(value);
  };
  const handleWeight = (value) => {
    setWeight(value);
  };







  return (
    <>
      <Grid>
        <Rows>
          <Form>
            <h5>Adoption Status</h5>
            <Form.Check
              reverse
              label="Adopted"
              name="adoption_status"
              value="adopted"
              onChange={handleAdoptStatus}
            />
            <Form.Check
              reverse
              label="Available"
              name="adoption_status"
              value="available"
              onChange={handleAdoptStatus}
            />
            <Form.Check
              reverse
              label="Foster"
              name="adoption_status"
              value="foster"
              onChange={handleAdoptStatus}
            />
            <h5>Type</h5>
            <Form.Check
              reverse
              label="Dog"
              name="type"
              value="dog"
              onChange={handleType}
            />
            <Form.Check
              reverse
              label="Cat"
              name="type"
              value="cat"
              onChange={handleType}
            />
            <Form.Check
              reverse
              label="Other"
              name="type"
              value="other"
              onChange={handleType}
            />

            <DoubleRangeSlider
              max={60}
              min={0}
              minValueBetween
              onChange={(value) => setHeight(value)}
              title="Height"
            />
            <DoubleRangeSlider
              max={70}
              min={0}
              minValueBetween
              onChange={(value) => setWeight(value)}
              title="Weight"
            />
            <DoubleRangeSlider
              max={20}
              min={0}
              inputMax
              inputMin
              minValueBetween
              onChange={(inputMin) => {
                // handleAge(value);
               console.log(inputMin)
                }
              }
            />
          </Form>
        </Rows>
      </Grid>
    </>
  );
}
