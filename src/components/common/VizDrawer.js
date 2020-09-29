import React, { useState } from "react";
import { Drawer, Button } from "antd";
import styled from "styled-components";

const VizButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: baseline;
  background-color: #656665;
  margin-top: 3rem;
  border: 0px;
  border-radius: 6px;
  width: 75%;
  height: 2vw;
  font-size: 1vw;
  color: #e5e5e5;
  cursor: pointer;

  &:hover {
    opacity: 0.75;
  }
`;

const VizDrawer = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <VizButton
        type="primary"
        onClick={showDrawer}
        className="update-cities-button"
      >
        Update Cities
      </VizButton>
      <Drawer
        title="Basic Drawer"
        placement="left"
        closable={false}
        onClose={onClose}
        visible={visible}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};

export default VizDrawer;
