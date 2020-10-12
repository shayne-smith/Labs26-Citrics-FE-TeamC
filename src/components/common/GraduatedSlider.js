import React from "react";
import { Slider } from "antd";

const GraduatedSlider = props => {
  const { id, min, max, marks, step, defaultValue } = props;

  return (
    <div className="slider-wrapper" id={id}>
      <Slider
        range={true}
        min={min}
        max={max}
        marks={marks}
        step={step}
        defaultValue={defaultValue}
      />
    </div>
  );
};

export default GraduatedSlider;
