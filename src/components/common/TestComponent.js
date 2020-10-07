import React from "react";

import { Modal, Button, Tabs, Tab } from "react-bootstrap";

export default class TestComponent extends React.Component {
  state = {
    weather: [this.props.weather],
    housing: [this.props.housing],
    jobs: [this.props.jobs]
  };

  stateCode = Object.keys(this.state.weather[0]);
  allCitiesArray = Object.values(this.state.weather[0]);
  dataArray = [];
  cityNames = [];
  megaArray = [];
  housingArray = Object.values(this.state.housing[0]);
  jobsStates = Object.entries(this.state.jobs[0]);
  jobsArray = Object.values(this.state.jobs[0]);

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

    this.cityNames.map(array => {
      array.map(cityName => {
        this.megaArray.push(cityName);
      });
    });
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
                <Tab eventKey="housing" title="Housing">
                  {this.housingArray.map(housingData => {
                    return Object.entries(housingData).map(entry => {
                      return entry[0] === this.props.cityName ? (
                        <div className="modalContainer">
                          <div className="modal-leftSide">
                            <div className="modalData">
                              <span className="modalKey">
                                Average Home Purchase Cost
                              </span>
                              {entry[1]}$
                            </div>
                          </div>
                        </div>
                      ) : (
                        false
                      );
                    });
                  })}
                </Tab>

                <Tab eventKey="jobs" title="Jobs">
                  {//compare this.props.cityName.slice(0, 2).toUpperCase() to entry[0], if they match
                  // return entry[1]['Total Durable Goods']

                  this.jobsStates.map(entry => {
                    // console.log(entry[1])
                    return entry[0] ===
                      this.props.cityName
                        .slice(
                          this.props.cityName.length - 2,
                          this.props.cityName.length
                        )
                        .toUpperCase() ? (
                      <div className="modalContainer">
                        <div className="modal-leftSide">
                          <div className="modalData">
                            <span className="modalKey"></span>
                            People Employed
                          </div>

                          <div className="modalData">
                            <span className="modalKey">
                              Total Manufacturing
                            </span>

                            {(entry[1]["Total Manufacturing"] * 1000).toFixed(
                              0
                            )}
                          </div>
                          <div className="modalData">
                            <span className="modalKey">
                              Total Private Sector
                            </span>
                            {(entry[1]["Total Private Sector"] * 1000).toFixed(
                              0
                            )}
                          </div>
                          <div className="modalData">
                            <span className="modalKey">
                              Total Wholesale Trade
                            </span>
                            {(entry[1]["Total Wholesale Trade"] * 1000).toFixed(
                              0
                            )}
                          </div>
                          <div className="modalData">
                            <span className="modalKey">
                              Total Goods-Producing
                            </span>
                            {(entry[1]["Total Goods-Producing"] * 1000).toFixed(
                              0
                            )}
                          </div>
                          <div className="modalData">
                            <span className="modalKey">Total Real Estate</span>
                            {(entry[1]["Total Real Estate"] * 1000).toFixed(0)}
                          </div>
                          <div className="modalData">
                            <span className="modalKey">
                              Total Service-Providing{" "}
                            </span>
                            {(
                              entry[1]["Total Service-Providing"] * 1000
                            ).toFixed(0)}
                          </div>
                          <div className="modalData">
                            <span className="modalKey">
                              Total Commercial Banking{" "}
                            </span>
                            {(
                              entry[1]["Total Commercial Banking"] * 1000
                            ).toFixed(0)}
                          </div>
                        </div>

                        <div className="modal-rightSide">
                          <div className="modalData">
                            <span className="modalKey"></span>
                            People Employed
                          </div>
                          <div className="modalData">
                            <span className="modalKey">
                              Total Government Sector{" "}
                            </span>
                            {(
                              entry[1]["Total Government Sector"] * 1000
                            ).toFixed(0)}
                          </div>
                          <div className="modalData">
                            <span className="modalKey">
                              Total Telecommunications{" "}
                            </span>
                            {(
                              entry[1]["Total Telecommunications"] * 1000
                            ).toFixed(0)}
                          </div>
                          <div className="modalData">
                            <span className="modalKey">
                              Total Durable Goods{" "}
                            </span>
                            {(entry[1]["Total Durable Goods"] * 1000).toFixed(
                              0
                            )}
                          </div>
                          <div className="modalData">
                            <span className="modalKey">
                              Total Transportation{" "}
                            </span>
                            {(entry[1]["Total Transportation"] * 1000).toFixed(
                              0
                            )}
                          </div>
                          <div className="modalData">
                            <span className="modalKey">
                              Total Transportation and Utilities{" "}
                            </span>
                            {(
                              entry[1]["Total Transportation and Utilities"] *
                              1000
                            ).toFixed(0)}
                          </div>
                          <div className="modalData">
                            <span className="modalKey">
                              Total Mining and Logging{" "}
                            </span>
                            {(
                              entry[1]["Total Mining and Logging"] * 1000
                            ).toFixed(0)}
                          </div>
                        </div>
                      </div>
                    ) : (
                      false
                    );
                  })}
                </Tab>
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
