import React from "react";
import { Slider } from "antd";

import { ReactComponent as Cloud } from "../../assets/cloud.svg";
import { ReactComponent as Sun } from "../../assets/sun.svg";

const IconSlider = props => {
  const { id, min, max, marks, step, defaultValue } = props;

  return (
    <div className="slider-wrapper" id={id}>
      <Cloud />
      <Slider
        range={true}
        min={min}
        max={max}
        marks={marks}
        step={step}
        defaultValue={defaultValue}
      />
      <Sun />
    </div>
  );
};

export default IconSlider;
