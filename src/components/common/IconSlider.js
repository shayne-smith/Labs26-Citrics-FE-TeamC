import React from "react";
import { Slider } from "antd";

import { ReactComponent as Cloud } from "../../assets/cloud.svg";
import { ReactComponent as Sun } from "../../assets/sun.svg";

const IconSlider = props => {
  const { id, min, max, marks, step, defaultValue, setFilters } = props;

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
        onChange={value => {
          console.log(value);
          setFilters(prev => ({
            ...prev,
            avgUVIndexFilter: { low: value[0], high: value[1] }
          }));
        }}
      />
      <Sun />
    </div>
  );
};

export default IconSlider;
