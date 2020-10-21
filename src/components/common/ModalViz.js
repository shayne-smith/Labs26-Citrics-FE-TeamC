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
  state = {};

  componentDidMount() {}

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
                    <Tab eventKey="precipData" title="Precipitation">
                      <ChartContainer>
                        <Plot
                          className="data-viz"
                          data={this.props.precipData.data}
                          layout={this.props.precipData.layout}
                          config={{ displayModeBar: false }}
                        />
                      </ChartContainer>
                    </Tab>
                    <Tab eventKey="snowData" title="Snow">
                      <ChartContainer>
                        <Plot
                          className="data-viz"
                          data={this.props.snowData.data}
                          layout={this.props.snowData.layout}
                          config={{ displayModeBar: false }}
                        />
                      </ChartContainer>
                    </Tab>
                    <Tab eventKey="uvIndexData" title="UV Index">
                      <ChartContainer>
                        <Plot
                          className="data-viz"
                          data={this.props.uvindexData.data}
                          layout={this.props.uvindexData.layout}
                          config={{ displayModeBar: false }}
                        />
                      </ChartContainer>
                    </Tab>
                    <Tab eventKey="humidityData" title="Humidity">
                      <ChartContainer>
                        <Plot
                          className="data-viz"
                          data={this.props.humidityData.data}
                          layout={this.props.humidityData.layout}
                          config={{ displayModeBar: false }}
                        />
                      </ChartContainer>
                    </Tab>
                    <Tab eventKey="windData" title="Wind">
                      <ChartContainer>
                        <Plot
                          className="data-viz"
                          data={this.props.windData.data}
                          layout={this.props.windData.layout}
                          config={{ displayModeBar: false }}
                        />
                      </ChartContainer>
                    </Tab>
                  </Tabs>
                </Tab>
                <Tab eventKey="housing" title="Housing">
                  <ChartContainer>
                    <Plot
                      className="data-viz"
                      data={this.props.housingData.data}
                      layout={this.props.housingData.layout}
                      config={{ displayModeBar: false }}
                    />
                  </ChartContainer>
                </Tab>

                <Tab eventKey="jobs" title="Jobs">
                  <Tabs
                    className="modalTabs"
                    defaultActiveKey="goodsData"
                    id="modal-subtabs"
                  >
                    <Tab eventKey="goodsData" title="Goods">
                      <ChartContainer>
                        <Plot
                          className="data-viz"
                          data={this.props.goodsData.data}
                          layout={this.props.goodsData.layout}
                          config={{ displayModeBar: false }}
                        />
                      </ChartContainer>
                    </Tab>

                    <Tab eventKey="manufacturingData" title="Manufacturing">
                      <ChartContainer>
                        <Plot
                          className="data-viz"
                          data={this.props.manufacturingData.data}
                          layout={this.props.manufacturingData.layout}
                          config={{ displayModeBar: false }}
                        />
                      </ChartContainer>
                    </Tab>
                    <Tab eventKey="constructionData" title="Construction">
                      <ChartContainer>
                        <Plot
                          className="data-viz"
                          data={this.props.constructionData.data}
                          layout={this.props.constructionData.layout}
                          config={{ displayModeBar: false }}
                        />
                      </ChartContainer>
                    </Tab>
                    <Tab
                      eventKey="tradeTransportData"
                      title="Trade & Transport"
                    >
                      <ChartContainer>
                        <Plot
                          className="data-viz"
                          data={this.props.tradeTransportData.data}
                          layout={this.props.tradeTransportData.layout}
                          config={{ displayModeBar: false }}
                        />
                      </ChartContainer>
                    </Tab>
                    <Tab eventKey="financialData" title="Finance">
                      <ChartContainer>
                        <Plot
                          className="data-viz"
                          data={this.props.financialData.data}
                          layout={this.props.financialData.layout}
                          config={{ displayModeBar: false }}
                        />
                      </ChartContainer>
                    </Tab>
                    <Tab eventKey="businessData" title="Business">
                      <ChartContainer>
                        <Plot
                          className="data-viz"
                          data={this.props.businessData.data}
                          layout={this.props.businessData.layout}
                          config={{ displayModeBar: false }}
                        />
                      </ChartContainer>
                    </Tab>
                    <Tab eventKey="eduHealthData" title="Education & Health">
                      <ChartContainer>
                        <Plot
                          className="data-viz"
                          data={this.props.eduHealthData.data}
                          layout={this.props.eduHealthData.layout}
                          config={{ displayModeBar: false }}
                        />
                      </ChartContainer>
                    </Tab>
                    <Tab eventKey="hospitalityData" title="Hospitality">
                      <ChartContainer>
                        <Plot
                          className="data-viz"
                          data={this.props.hospitalityData.data}
                          layout={this.props.hospitalityData.layout}
                          config={{ displayModeBar: false }}
                        />
                      </ChartContainer>
                    </Tab>
                    <Tab eventKey="informationData" title="Information">
                      <ChartContainer>
                        <Plot
                          className="data-viz"
                          data={this.props.informationData.data}
                          layout={this.props.informationData.layout}
                          config={{ displayModeBar: false }}
                        />
                      </ChartContainer>
                    </Tab>
                    <Tab eventKey="servicesData" title="Services">
                      <ChartContainer>
                        <Plot
                          className="data-viz"
                          data={this.props.serviceData.data}
                          layout={this.props.serviceData.layout}
                          config={{ displayModeBar: false }}
                        />
                      </ChartContainer>
                    </Tab>
                    <Tab eventKey="miningData" title="Mining">
                      <ChartContainer>
                        <Plot
                          className="data-viz"
                          data={this.props.miningData.data}
                          layout={this.props.miningData.layout}
                          config={{ displayModeBar: false }}
                        />
                      </ChartContainer>
                    </Tab>
                    <Tab eventKey="otherData" title="Other">
                      <ChartContainer>
                        <Plot
                          className="data-viz"
                          data={this.props.otherData.data}
                          layout={this.props.otherData.layout}
                          config={{ displayModeBar: false }}
                        />
                      </ChartContainer>
                    </Tab>
                    <Tab eventKey="unclassifiedData" title="Unclassified">
                      <ChartContainer>
                        <Plot
                          className="data-viz"
                          data={this.props.unclassifiedData.data}
                          layout={this.props.unclassifiedData.layout}
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
