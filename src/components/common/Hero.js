import React from "react";
import useWindowSize from "../../utils/useWindowSize";
import styled from "styled-components";
import { ReactComponent as MailLogo } from "../../assets/mail4.svg";
import { ReactComponent as Driftly } from "../../assets/driftly.svg";
import { ReactComponent as Tagline } from "../../assets/letsFindOurNextHome.svg";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 2rem 0;
`;

const Hero = () => {
  const { width } = useWindowSize();

  const driftlyWidth = width > 700 ? {} : { width: "230px" };
  const mailWidth = width > 700 ? {} : { width: "35px" };

  return (
    <Wrapper>
      <div className="hero">
        <Driftly {...driftlyWidth} />
        <MailLogo className="mail" {...mailWidth} />
      </div>
      <Tagline className="tagline" />
    </Wrapper>
  );
};

export default Hero;
