import React from "react";
import styled from "styled-components";
import { ReactComponent as MailLogo } from "../../assets/mail4.svg";
import { ReactComponent as Driftly } from "../../assets/driftly.svg";

const Hero = () => {
  const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem 0;
  `;

  return (
    <Wrapper>
      <Driftly />
      <MailLogo />
    </Wrapper>
  );
};

export default Hero;
