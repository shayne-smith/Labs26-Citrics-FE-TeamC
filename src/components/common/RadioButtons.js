import React, { useState } from "react";
import { Radio, Input } from "antd";

const RadioButtons = props => {
  const [value, setValue] = useState(1);
  const { buttonNames, rowFormat } = props;

  const onChange = e => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  return (
    <Radio.Group onChange={onChange} value={value}>
      {rowFormat &&
        buttonNames.map((name, index) => (
          <Radio
            style={{ display: "inline" }}
            className="radio-buttons"
            value={index + 1}
          >
            {name}
          </Radio>
        ))}
      {!rowFormat &&
        buttonNames.map((name, index) => (
          <Radio className="radio-buttons" value={index + 1}>
            {name}
          </Radio>
        ))}
    </Radio.Group>
  );
};

export default RadioButtons;
