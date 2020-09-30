import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

//import styled from "styled-components";

function CityCardModal(props) {
  // const valuesArr = []
  // const weatherArr = []

  // props.cities.map(city => {
  //     valuesArr.push(Object.values(city))
  // })

  // valuesArr.map(weatherValues => {
  //     weatherValues.map(value => {
  //         console.log(value.toString().toFixed(2))
  //         //weatherArr.push(value.toString().substr(0, 5))
  //     })
  // })

  //console.log(weatherArr)

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
                  <span className="modalKey">Average Temp (F)</span>
                  {Number.parseFloat(city.FeelsLikeF).toFixed(2)}°F
                </div>
                <div className="modalData">
                  <span className="modalKey">Average Temp (C)</span>
                  {Number.parseFloat(city.FeelsLikeC).toFixed(2)}°C
                </div>
                <div className="modalData">
                  <span className="modalKey">Heat Index</span>
                  {Number.parseFloat(city.HeatIndexC).toFixed(2)}°C
                </div>
                <div className="modalData">
                  <span className="modalKey">Wind Chill</span>
                  {Number.parseFloat(city.WindChillC).toFixed(2)}°C
                </div>
                <div className="modalData">
                  <span className="modalKey"> Dew Point</span>
                  {Number.parseFloat(city.DewPointC).toFixed(2)}°C
                </div>
                <div className="modalData">
                  <span className="modalKey"> Wind Gust</span>
                  {Number.parseFloat(city.WindGustKmph).toFixed(2)} km/hr
                </div>
                <div className="modalData">
                  <span className="modalKey"> Cloud Cover</span>
                  {Number.parseFloat(city.cloudcover).toFixed(2)}%
                </div>
                <div className="modalData">
                  <span className="modalKey"> Humidity</span>
                  {Number.parseFloat(city.humidity).toFixed(2)}%
                </div>
                <div className="modalData">
                  <span className="modalKey">Max Temp (C)</span>
                  {Number.parseFloat(city.maxtempC).toFixed(2)}°C
                </div>

                <div className="modalData">
                  <span className="modalKey">Max Temp (F)</span>
                  {Number.parseFloat(city.maxtempF).toFixed(2)}°F
                </div>

                <div className="modalData">
                  <span className="modalKey">Min Temp (C)</span>
                  {Number.parseFloat(city.mintempC).toFixed(2)}°C
                </div>

                <div className="modalData">
                  <span className="modalKey">Min Temp (F)</span>
                  {Number.parseFloat(city.mintempF).toFixed(2)}°F
                </div>
                <div className="modalData">
                  <span className="modalKey">Precipitation (mm)</span>
                  {Number.parseFloat(city.precipMM).toFixed(2)}
                </div>
                <div className="modalData">
                  <span className="modalKey">Pressure</span>
                  {Number.parseFloat(city.pressure).toFixed(2)}
                </div>
                <div className="modalData">
                  <span className="modalKey">Total Snow (cm)</span>
                  {Number.parseFloat(city.totalSnow_cm).toFixed(2)}
                </div>
                <div className="modalData">
                  <span className="modalKey">UV Index</span>
                  {Number.parseFloat(city.uvIndex).toFixed(2)}
                </div>
                <div className="modalData">
                  <span className="modalKey">Visibility</span>
                  {Number.parseFloat(city.visibility).toFixed(2)}
                </div>
                <div className="modalData">
                  <span className="modalKey">Wind Speed</span>
                  {Number.parseFloat(city.windspeedKmph).toFixed(2)} km/hr
                </div>
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
