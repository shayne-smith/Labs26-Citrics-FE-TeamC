import React from "react";

import { Modal, Button, Tabs, Tab } from "react-bootstrap";

export default class TestComponent extends React.Component {
  state = {
    weather: [this.props.weather]
  };

  stateCode = Object.keys(this.state.weather[0]);
  allCitiesArray = Object.values(this.state.weather[0]);
  dataArray = [];
  cityNames = [];
  megaArray = [];
  // states = Object.keys(this.state.weather[0]);

  //   // //console.log(states);

  //   // let obj = props.weather

  //   // const stateKeys = Object.keys(obj)

  //   // //console.log(keys)

  //   // //values is city name and housing
  //   // const valuesArr = Object.values(obj)

  //   // //console.log(valuesArr)

  //   // //all the cities followed by a comma and the state code
  //   //let cityStateArr = []

  //   // for (let i = 0; i < valuesArr.length; i++) {
  //   //   let obj3 = Object.keys(valuesArr[i])
  //   //   obj3.map(e => {
  //   //     cityStateArr.push(e)
  //   //   })
  //   // }

  //   //console.log(cityStateArr)

  //   //   for (let i = 0; i < states.length; i++) {
  //   //     for (let j = 0; j < cityStateArr.length; j++) {
  //   //       const strReplace = states[i].replace(/"/g, "");
  //   //       console.log('this data', weatherArray[0][strReplace][cityStateArr[j]]);
  //   //     }
  //   //   }
  //   // })

  componentDidMount() {
    // console.log(this.state.weather);
    // console.log(this.stateCode);
    //console.log(this.allCitiesArray);

    //for each object in the array,
    //get into the object, get all the object's keys
    // if those keys match the name of the card
    // render the data of those inner objects

    this.allCitiesArray.map(cities => {
      // console.log('this is cities', cities);
      // //cities keys has each city name
      //console.log('this is cities keys', Object.keys(cities));
      this.cityNames.push(Object.keys(cities));
      // console.log('this is cities values', Object.values(cities)[0]);
      this.dataArray.push(Object.values(cities));

      // return Object.keys(cities) === this.props.cityName ? (
      //   <div>

      //   </div>
      // )
    });

    //console.log('pushed', this.dataArray)

    this.cityNames.map(array => {
      array.map(cityName => {
        this.megaArray.push(cityName);
      });
    });
    //each individual city name in an array
    //console.log('city names', this.megaArray)
  }

  render() {
    return (
      <div>
        <div onClick={e => e.stopPropagation()}>
          <Modal
            {...this.props}
            size="xl"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            dialogClassName="modal-100w"
          >
            <Modal.Header
              className="modalHeader"
              closeButton
              style={{
                background: `url(${this.props.image}) no-repeat center`
              }}
            >
              <Modal.Title id="contained-modal-title-vcenter">
                {this.megaArray.map(city => {
                  //remove this ternary when all cities get added to the DB
                  return city === this.props.cityName ? (
                    <div>{city}</div>
                  ) : (
                    false
                  );
                })}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="modalSubheader">City Guide</div>
              <Tabs defaultActiveKey="weather" id="modal-tabs">
                <Tab eventKey="weather" title="Weather">
                  {this.allCitiesArray.map(cities => {
                    let entries = Object.entries(cities);

                    return entries.map(entry => {
                      return entry[0] === this.props.cityName ? (
                        <div className="modalContainer">
                          <div className="modal-leftSide">
                            <div className="modalData">
                              <span className="modalKey">Average Temp (F)</span>
                              {Number.parseFloat(
                                entry[1].summer.MaxTempF
                              ).toFixed(2)}
                              °F
                            </div>
                            <div className="modalData">
                              <span className="modalKey">Average Temp (C)</span>
                              {Number.parseFloat(
                                entry[1].summer.FeelsLikeC
                              ).toFixed(2)}
                              °C
                            </div>
                            <div className="modalData">
                              <span className="modalKey">Heat Index</span>
                              {Number.parseFloat(
                                entry[1].summer.HeatIndexC
                              ).toFixed(2)}
                              °C
                            </div>
                            <div className="modalData">
                              <span className="modalKey">Wind Chill</span>
                              {Number.parseFloat(
                                entry[1].summer.WindChillC
                              ).toFixed(2)}
                              °C
                            </div>
                            <div className="modalData">
                              <span className="modalKey"> Dew Point</span>
                              {Number.parseFloat(
                                entry[1].summer.DewPointC
                              ).toFixed(2)}
                              °C
                            </div>
                            <div className="modalData">
                              <span className="modalKey"> Wind Gust</span>
                              {Number.parseFloat(
                                entry[1].summer.WindGust_kmph
                              ).toFixed(2)}{" "}
                              km/hr
                            </div>
                            <div className="modalData">
                              <span className="modalKey"> Cloud Cover</span>
                              {Number.parseFloat(
                                entry[1].summer.CloudCover
                              ).toFixed(2)}
                              %
                            </div>
                            <div className="modalData">
                              <span className="modalKey"> Humidity</span>
                              {Number.parseFloat(
                                entry[1].summer.Humidity
                              ).toFixed(2)}
                              %
                            </div>
                            <div className="modalData">
                              <span className="modalKey">Max Temp (C)</span>
                              {Number.parseFloat(
                                entry[1].summer.MaxTempC
                              ).toFixed(2)}
                              °C
                            </div>
                          </div>
                          <div className="modal-rightSide">
                            <div className="modalData">
                              <span className="modalKey">Max Temp (F)</span>
                              {Number.parseFloat(
                                entry[1].summer.MaxTempF
                              ).toFixed(2)}
                              °F
                            </div>
                            <div className="modalData">
                              <span className="modalKey">Min Temp (C)</span>
                              {Number.parseFloat(
                                entry[1].summer.MinTempC
                              ).toFixed(2)}
                              °C
                            </div>
                            <div className="modalData">
                              <span className="modalKey">Min Temp (F)</span>
                              {Number.parseFloat(
                                entry[1].summer.MinTempF
                              ).toFixed(2)}
                              °F
                            </div>
                            <div className="modalData">
                              <span className="modalKey">
                                Precipitation (mm)
                              </span>
                              {Number.parseFloat(
                                entry[1].summer.Precip_mm
                              ).toFixed(2)}
                            </div>
                            <div className="modalData">
                              <span className="modalKey">Pressure</span>
                              {Number.parseFloat(
                                entry[1].summer.Pressure
                              ).toFixed(2)}
                            </div>
                            <div className="modalData">
                              <span className="modalKey">Total Snow (cm)</span>
                              {Number.parseFloat(
                                entry[1].summer.TotalSnow_cm
                              ).toFixed(2)}
                            </div>
                            <div className="modalData">
                              <span className="modalKey">UV Index</span>
                              {Number.parseFloat(
                                entry[1].summer.UVindex
                              ).toFixed(2)}
                            </div>
                            <div className="modalData">
                              <span className="modalKey">Visibility</span>
                              {Number.parseFloat(
                                entry[1].summer.Visibility
                              ).toFixed(2)}
                            </div>
                            <div className="modalData">
                              <span className="modalKey">Wind Speed</span>
                              {Number.parseFloat(
                                entry[1].summer.WindSpeed_kmph
                              ).toFixed(2)}{" "}
                              km/hr
                            </div>
                          </div>
                        </div>
                      ) : (
                        false
                      );
                    });
                  })}
                </Tab>
              </Tabs>

              {/*                                 
                                {this.props.cities.map(city => {
                                    return city.location === this.props.cityName ? (
                                        <div className="modalContainer">
                                            <div className="modal-leftSide">
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
                                                    {Number.parseFloat(city.WindGustKmph).toFixed(2)}{" "}
                                km/hr
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
                                            </div>
                                            <div className="modal-rightSide">
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
                                                    {Number.parseFloat(city.windspeedKmph).toFixed(
                                                        2
                                                    )}{" "}
                                km/hr
                              </div>
                                            </div>
                                        </div>
                                    ) : (
                                            false
                                        );
                                })} */}
              {/* </Tab>
                        </Tabs> */}
            </Modal.Body>
            <Modal.Footer>
              <Button className="modalBtn" onClick={this.props.onHide}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    );
  }
}
