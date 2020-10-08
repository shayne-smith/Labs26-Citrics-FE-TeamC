import React, { useState } from "react";
import { Slider, InputNumber, Row, Col } from "antd";

const DecimalSlider = props => {
  const { min, max, step } = props;
  const [inputValue, setInputValue] = useState(0);

  const onChange = value => {
    if (isNaN(value)) {
      return;
    }
    setInputValue(value);
  };

  return (
    <Row>
      <Col span={12}>
        <Slider
          min={min}
          max={max}
          onChange={onChange}
          value={typeof inputValue === "number" ? inputValue : 0}
          step={step}
        />
      </Col>
      <Col span={4}>
        <InputNumber
          className="advanced-search-input"
          min={min}
          max={max}
          style={{ margin: "0 16px" }}
          step={step}
          value={inputValue}
          onChange={onChange}
        />
      </Col>
    </Row>
  );
};

export default DecimalSlider;
