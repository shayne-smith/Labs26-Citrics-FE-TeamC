import React from "react";
import { Slider } from "antd";

const GraduatedSlider = props => {
  const { id, min, max, marks, step, defaultValue, setFilters } = props;

  return (
    <div className="slider-wrapper" id={id}>
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
            avgCloudCoverFilter: { low: value[0], high: value[1] }
          }));
        }}
      />
    </div>
  );
};

export default GraduatedSlider;
