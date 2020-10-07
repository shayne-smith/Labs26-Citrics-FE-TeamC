import React from "react";
import { Slider, InputNumber, Row, Col } from "antd";

export default class DecimalSlider extends React.Component {
  state = {
    inputValue: 0
  };

  onChange = value => {
    if (isNaN(value)) {
      return;
    }
    this.setState({
      inputValue: value
    });
  };

  render() {
    const { inputValue } = this.state;
    return (
      <Row>
        <Col span={12}>
          <Slider
            min={this.props.min}
            max={this.props.max}
            onChange={this.onChange}
            value={typeof inputValue === "number" ? inputValue : 0}
            step={0.01}
          />
        </Col>
        <Col span={4}>
          <InputNumber
            className="advanced-search-input"
            min={this.props.min}
            max={this.props.max}
            style={{ margin: "0 16px" }}
            step={0.01}
            value={inputValue}
            onChange={this.onChange}
          />
        </Col>
      </Row>
    );
  }
}
