import React from "react";
import { Radio, Input } from "antd";

export default class RadioButtons extends React.Component {
  state = {
    value: 1
  };

  onChange = e => {
    console.log("radio checked", e.target.value);
    this.setState({
      value: e.target.value
    });
  };

  render() {
    const { value } = this.state;
    return (
      <Radio.Group onChange={this.onChange} value={value}>
        <Radio className="radio-buttons" value={1}>
          {"Small | <500K"}
        </Radio>
        <Radio className="radio-buttons" value={2}>
          {"Medium | 500K - 1M"}
        </Radio>
        <Radio className="radio-buttons" value={3}>
          {"Large | 1M - 2M"}
        </Radio>
        <Radio className="radio-buttons" value={4}>
          {"Mega | 2M+"}
        </Radio>
      </Radio.Group>
    );
  }
}
