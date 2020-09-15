import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Header(props) {
  const Wrapper = styled.div`
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
    padding: 0.2rem;

    font-family: Amatic SC;
    font-style: normal;
    font-weight: bold;
    font-size: 1.5rem;
  `;

  return (
    <Wrapper>
      <Navigation>
        <Link class="header-link" to="/">
          Home
        </Link>
        <Link class="header-link">About</Link>
        <Link id="login" class="header-link">
          Login
        </Link>
      </Navigation>
    </Wrapper>
  );
}

export default Header;
