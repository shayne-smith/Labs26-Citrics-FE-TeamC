import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

import styled from "styled-components";

const CardComparison = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  color: whitesmoke;
  width: 29%;
  height: 250px;
  min-width: 300px;
  margin: 1rem;
  border-radius: 3px;
  flex-grow: 1;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  &:hover {
    transform: scale(1.02);
    transition-duration: 0.1s;
  }

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

function CityCardModal(props) {
  console.log("this is city data", props.cities);
  return (
    <div>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <div>
              {props.cities.map(city => {
                return city.location === props.cityName ? (
                  <h3> {city.location}</h3>
                ) : (
                  false
                );
              })}
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default CityCardModal;
