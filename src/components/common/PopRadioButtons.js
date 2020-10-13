import React, { useState } from "react";
import { Radio } from "antd";

const RadioButtons = props => {
  const [value, setValue] = useState(2);
  const { buttonNames, rowFormat, setFilters } = props;

  const onChange = e => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
    if (e.target.value === 1) {
      // update state
    } else if (e.target.value === 2) {
      // update state
    } else if (e.target.value === 3) {
      // update state
    } else if (e.target.value === 4) {
      // update state
    }
  };

  return (
    <Radio.Group onChange={onChange} value={value}>
      {rowFormat &&
        buttonNames.map((name, index) => (
          <Radio
            key={index}
            style={{ display: "inline" }}
            className="radio-buttons"
            value={index + 1}
          >
            {name}
          </Radio>
        ))}
      {!rowFormat &&
        buttonNames.map((name, index) => (
          <Radio key={index} className="radio-buttons" value={index + 1}>
            {name}
          </Radio>
        ))}
    </Radio.Group>
  );
};

export default RadioButtons;
