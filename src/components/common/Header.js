import React, { useEffect, useState } from "react";
import useWindowSize from "../../utils/useWindowSize";
import { Link } from "react-router-dom";
import styled from "styled-components";

import NavDrawer from "./NavDrawer";

const Wrapper = styled.header`
  display: flex;
  justify-content: flex-end;
  width: 90%;
  margin: 0 auto;
`;

const Navigation = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 50%;
  margin: 1rem;

  font-family: Amatic SC;
  font-style: normal;
  font-weight: bold;
  font-size: 2rem;
`;

function Header() {
  const { width } = useWindowSize();

  return (
    <>
      <Wrapper className="Header">
        {width > 700 && (
          <Navigation className="Nav">
            <Link className="header-link" to="/">
              Home
            </Link>
            <Link className="header-link" to="/about">
              About
            </Link>
            <Link id="login" className="header-link" to="/login">
              Login
            </Link>
          </Navigation>
        )}
      </Wrapper>
      {width <= 700 && <NavDrawer />}
    </>
  );
}

export default Header;
