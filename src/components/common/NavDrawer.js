import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Drawer, Button } from "antd";

const NavDrawer = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <i
        class="fa fa-bars hamburger-icon"
        type="primary"
        onClick={showDrawer}
      ></i>
      <Drawer
        title="Menu"
        placement="top"
        closable={true}
        onClose={onClose}
        visible={visible}
      >
        <Link className="menu-link" to="/home">
          Home
        </Link>
        <Link className="menu-link" to="/about">
          About
        </Link>
        <Link className="menu-link" to="/login">
          Logout
        </Link>
      </Drawer>
    </>
  );
};

export default NavDrawer;
