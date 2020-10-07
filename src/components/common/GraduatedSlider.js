import React from "react";
import { Slider } from "antd";

const marks = {
  500: "$400",
  10000: {
    label: <strong>$10,000</strong>
  }
};

const GraduatedSlider = () => {
  return (
    <>
      <Slider
        range
        min={500}
        max={10000}
        marks={marks}
        defaultValue={[500, 10000]}
      />
    </>
  );
};

export default GraduatedSlider;
