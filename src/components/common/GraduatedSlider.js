import React from "react";
import { Slider } from "antd";

const GraduatedSlider = props => {
  const { min, max, marks, step, defaultValue } = props;

  return (
    <>
      <Slider
        range
        min={min}
        max={max}
        marks={marks}
        step={step}
        defaultValue={defaultValue}
      />
    </>
  );
};

export default GraduatedSlider;
