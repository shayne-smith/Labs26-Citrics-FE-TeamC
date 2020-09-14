import React from "react";
import styled from "styled-components";
import { ReactComponent as MailLogo } from "../../assets/mail4.svg";
import { ReactComponent as Driftly } from "../../assets/driftly.svg";
import { ReactComponent as Tagline } from "../../assets/letsFindOurNextHome.svg";

const Hero = () => {
  const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin: 2rem 0;
  `;

  return (
    <Wrapper>
      <div class="hero">
        <Driftly />
        <MailLogo class="mail" />
      </div>
      <Tagline class="tagline" />
    </Wrapper>
  );
};

export default Hero;
