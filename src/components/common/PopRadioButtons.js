import React, { useState } from "react";
import { Radio } from "antd";

const RadioButtons = props => {
  const [value, setValue] = useState(3);
  const { buttonNames, rowFormat, setFilters } = props;

  const onChange = e => {
    setValue(e.target.value);
    if (e.target.value === 1) {
      setFilters(prev => ({ ...prev, popFilter: "small" }));
    } else if (e.target.value === 2) {
      setFilters(prev => ({ ...prev, popFilter: "medium" }));
    } else if (e.target.value === 3) {
      setFilters(prev => ({ ...prev, popFilter: "large" }));
    } else if (e.target.value === 4) {
      setFilters(prev => ({ ...prev, popFilter: "mega" }));
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
