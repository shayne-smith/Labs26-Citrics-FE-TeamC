import React from "react";
import Plot from "react-plotly.js";
import styled from "styled-components";

import { Modal, Button, Tabs, Tab } from "react-bootstrap";

const ChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default class TestComponent extends React.Component {
  state = {
    weather: [this.props.weather],
    housing: [this.props.housing],
    jobs: [this.props.jobs],
    covid: [this.props.covid]
  };

  stateCode = Object.keys(this.state.weather[0]);
  allCitiesArray = Object.values(this.state.weather[0]);
  dataArray = [];
  cityNames = [];
  allCityNamesArray = [];
  housingArray = Object.values(this.state.housing[0]);
  jobsStates = Object.entries(this.state.jobs[0]);
  covidArray = Object.entries(this.state.covid[0]);
  overviewArray = [];

  numberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  overviewData(element) {
    this.overviewArray.push(element);
  }

  componentDidMount() {
    this.allCitiesArray.map(cities => {
      this.dataArray.push(Object.values(cities));
      this.cityNames.push(Object.keys(cities));
    });
    this.cityNames.map(array => {
      array.map(cityName => {
        this.allCityNamesArray.push(cityName);
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
                background: `url(${this.props.image}) no-repeat center`,
                backgroundSize: "cover"
              }}
            >
              <Modal.Title id="contained-modal-title-vcenter">
                {this.props.cityName}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="modalSubheader">City Visualizations</div>
              <Tabs
                className="modalTabs"
                defaultActiveKey="weather"
                id="modal-tabs"
              >
                <Tab eventKey="weather" title="Weather">
                  <Tabs
                    className="modalTabs"
                    defaultActiveKey="tempData"
                    id="modal-subtabs"
                  >
                    <Tab eventKey="tempData" title="Temperature">
                      <ChartContainer>
                        <Plot
                          className="data-viz"
                          data={this.props.tempData.data}
                          layout={this.props.tempData.layout}
                          config={{ displayModeBar: false }}
                        />
                      </ChartContainer>
                    </Tab>
                  </Tabs>
                </Tab>

                <Tab eventKey="covid" title="COVID-19">
                  <ChartContainer>
                    <Plot
                      className="data-viz"
                      data={this.props.covidData.data}
                      layout={this.props.covidData.layout}
                      config={{ displayModeBar: false }}
                    />
                  </ChartContainer>
                </Tab>
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
