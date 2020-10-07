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

  componentDidMount() {
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
                        <Tabs defaultActiveKey="summer" id="modal-subtabs">
                          <Tab eventKey="summer" title="Summer">
                            <div className="modalContainer">
                              <div className="modal-leftSide">
                                <div className="modalData">
                                  <span className="modalKey">
                                    Average Temp (F)
                                  </span>
                                  {Number.parseFloat(
                                    entry[1].summer.MaxTempF
                                  ).toFixed(2)}
                                  °F
                                </div>
                                <div className="modalData">
                                  <span className="modalKey">
                                    Average Temp (C)
                                  </span>
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
                                  <span className="modalKey">
                                    Total Snow (cm)
                                  </span>
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
                          </Tab>
                          <Tab eventKey="winter" title="Winter">
                            <div className="modalContainer">
                              <div className="modal-leftSide">
                                <div className="modalData">
                                  <span className="modalKey">
                                    Average Temp (F)
                                  </span>
                                  {Number.parseFloat(
                                    entry[1].winter.MaxTempF
                                  ).toFixed(2)}
                                  °F
                                </div>
                                <div className="modalData">
                                  <span className="modalKey">
                                    Average Temp (C)
                                  </span>
                                  {Number.parseFloat(
                                    entry[1].winter.FeelsLikeC
                                  ).toFixed(2)}
                                  °C
                                </div>
                                <div className="modalData">
                                  <span className="modalKey">Heat Index</span>
                                  {Number.parseFloat(
                                    entry[1].winter.HeatIndexC
                                  ).toFixed(2)}
                                  °C
                                </div>
                                <div className="modalData">
                                  <span className="modalKey">Wind Chill</span>
                                  {Number.parseFloat(
                                    entry[1].winter.WindChillC
                                  ).toFixed(2)}
                                  °C
                                </div>
                                <div className="modalData">
                                  <span className="modalKey"> Dew Point</span>
                                  {Number.parseFloat(
                                    entry[1].winter.DewPointC
                                  ).toFixed(2)}
                                  °C
                                </div>
                                <div className="modalData">
                                  <span className="modalKey"> Wind Gust</span>
                                  {Number.parseFloat(
                                    entry[1].winter.WindGust_kmph
                                  ).toFixed(2)}{" "}
                                  km/hr
                                </div>
                                <div className="modalData">
                                  <span className="modalKey"> Cloud Cover</span>
                                  {Number.parseFloat(
                                    entry[1].winter.CloudCover
                                  ).toFixed(2)}
                                  %
                                </div>
                                <div className="modalData">
                                  <span className="modalKey"> Humidity</span>
                                  {Number.parseFloat(
                                    entry[1].winter.Humidity
                                  ).toFixed(2)}
                                  %
                                </div>
                                <div className="modalData">
                                  <span className="modalKey">Max Temp (C)</span>
                                  {Number.parseFloat(
                                    entry[1].winter.MaxTempC
                                  ).toFixed(2)}
                                  °C
                                </div>
                              </div>
                              <div className="modal-rightSide">
                                <div className="modalData">
                                  <span className="modalKey">Max Temp (F)</span>
                                  {Number.parseFloat(
                                    entry[1].winter.MaxTempF
                                  ).toFixed(2)}
                                  °F
                                </div>
                                <div className="modalData">
                                  <span className="modalKey">Min Temp (C)</span>
                                  {Number.parseFloat(
                                    entry[1].winter.MinTempC
                                  ).toFixed(2)}
                                  °C
                                </div>
                                <div className="modalData">
                                  <span className="modalKey">Min Temp (F)</span>
                                  {Number.parseFloat(
                                    entry[1].winter.MinTempF
                                  ).toFixed(2)}
                                  °F
                                </div>
                                <div className="modalData">
                                  <span className="modalKey">
                                    Precipitation (mm)
                                  </span>
                                  {Number.parseFloat(
                                    entry[1].winter.Precip_mm
                                  ).toFixed(2)}
                                </div>
                                <div className="modalData">
                                  <span className="modalKey">Pressure</span>
                                  {Number.parseFloat(
                                    entry[1].winter.Pressure
                                  ).toFixed(2)}
                                </div>
                                <div className="modalData">
                                  <span className="modalKey">
                                    Total Snow (cm)
                                  </span>
                                  {Number.parseFloat(
                                    entry[1].winter.TotalSnow_cm
                                  ).toFixed(2)}
                                </div>
                                <div className="modalData">
                                  <span className="modalKey">UV Index</span>
                                  {Number.parseFloat(
                                    entry[1].winter.UVindex
                                  ).toFixed(2)}
                                </div>
                                <div className="modalData">
                                  <span className="modalKey">Visibility</span>
                                  {Number.parseFloat(
                                    entry[1].winter.Visibility
                                  ).toFixed(2)}
                                </div>
                                <div className="modalData">
                                  <span className="modalKey">Wind Speed</span>
                                  {Number.parseFloat(
                                    entry[1].winter.WindSpeed_kmph
                                  ).toFixed(2)}{" "}
                                  km/hr
                                </div>
                              </div>
                            </div>
                          </Tab>
                        </Tabs>
                      ) : (
                        false
                      );
                    });
                  })}
                </Tab>
                <Tab eventKey="housing" title="Housing"></Tab>
                <Tab eventKey="jobs" title="Jobs"></Tab>
                <Tab eventKey="covid" title="Covid"></Tab>
                <Tab eventKey="overview" title="Overview"></Tab>
              </Tabs>
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
