import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

//import styled from "styled-components";

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
            {props.cities.map(city => {
              return city.location === props.cityName ? (
                <div className="modalHeader"> {city.location}</div>
              ) : (
                false
              );
            })}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modalSubheader">City Guide</div>
          {props.cities.map(city => {
            return city.location === props.cityName ? (
              <div className="modalContainer">
                <div className="modalData">
                  <span className="modalKey">Average Temp in F </span>
                  {city.FeelsLikeF}
                </div>
                <div className="modalData">
                  <span className="modalKey">Average Temp in C </span>
                  {city.FeelsLikeC}
                </div>
                <div className="modalData">
                  <span className="modalKey">Heat Index </span>
                  {city.HeatIndexC} C
                </div>
                <div className="modalData">
                  <span className="modalKey">Wind Chill </span>
                  {city.WindChillC} C
                </div>
                <div className="modalData">
                  <span className="modalKey"> Dew Point </span>
                  {city.DewPointC} C{" "}
                </div>
                <div className="modalData">
                  <span className="modalKey"> Wind Gust </span>
                  {city.WindGustKmph} km/hr{" "}
                </div>
                <div className="modalData">
                  <span className="modalKey"> Cloud Cover </span>
                  {city.cloudcover}{" "}
                </div>
                <div className="modalData">
                  <span className="modalKey"> Humidity </span>
                  {city.humidity}%
                </div>

                {/* 

WindGustKmph: "15.50109649122807"
cloudcover: "69.24890350877193"
humidity: "87.8344298245614"
id: 1
image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Parque_Eagle_River%2C_Anchorage%2C_Alaska%2C_Estados_Unidos%2C_2017-09-01%2C_DD_02.jpg/2880px-Parque_Eagle_River%2C_Anchorage%2C_Alaska%2C_Estados_Unidos%2C_2017-09-01%2C_DD_02.jpg"
location: "Juneau, AK"
location_id: 1
maxtempC: "-1.3793859649122806"
maxtempF: "29.48201754385964"
mintempC: "-5.640350877192983"
mintempF: "21.81228070175439"
precipMM: "8.517434210526318"
pressure: "1010.9309210526316"
totalSnow_cm: "3.773684210526315"
uvIndex: "1.3475877192982457"
visibility: "6.830043859649122"
windspeedKmph: "9.12390350877193" */}
              </div>
            ) : (
              false
            );
          })}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default CityCardModal;
