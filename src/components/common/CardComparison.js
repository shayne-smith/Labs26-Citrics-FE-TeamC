import React from "react";
import styled from "styled-components";

import ny from "../../assets/ny.jpg";
import boulder from "../../assets/boulder.jpg";
import la from "../../assets/la.jpg";
import miami from "../../assets/miami.jpg";

import { MinusCircleOutlined } from "@ant-design/icons";
import { ReactComponent as Arrow } from "../../assets/arrow.svg";

const CardContainer = styled.div`
  /* background: url(${boulder}) no-repeat center; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-size: cover;
  background-repeat: no-repeat;
  color: whitesmoke;
  width: 25%;
  height: 500px;
  min-width: 300px;
  margin: 2rem;
  border-radius: 3px;
  flex-grow: 1;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  &:hover {
    transform: scale(1.02);
    transition-duration: 0.3s;
  }

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

const CardHeader = styled.div`
  position: absolute;
  width: 25%;
  height: 15%;
  left: 0px;
  top: 10px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: Amatic SC;
  font-style: normal;
  font-weight: bold;
  font-size: 1.2rem;
  font-size: 1.25vw;
  text-align: center;

  background: rgba(112, 199, 131, 0.8);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  &:after {
    content: "";
    position: absolute;
    left: 100%;
    height: 0;
    width: 0;
    border-left: 11.5px solid rgba(112, 199, 131, 0.8);
    border-right: 11.5px solid transparent;
    border-bottom: 11.5px solid transparent;
    border-top: 11.5px solid transparent;
  }

  @media (max-width: 1106px) {
    font-size: 1.2rem;
    font-size: 1.5vw;
  }
  @media (max-width: 1000px) {
    font-size: 1.2rem;
    font-size: 1.75vw;
  }
  @media (max-width: 737px) {
    font-size: 1.2rem;
    font-size: 3vw;
  }
`;

const CardFooter = styled.div`
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
  border-radius: 3px;
  background: rgba(112, 199, 131, 0.8);

  font-family: Amatic SC;
  font-style: normal;
  font-weight: bold;
  font-size: 1.1rem;
`;

function CardComparison(props) {
  return (
    <CardContainer
      style={{ background: `url(${props.image}) no-repeat center` }}
    >
      <CardHeader>
        {/* <Arrow class="arrow" /> */}
        {props.city}
      </CardHeader>
      <button
        className="plus-button"
        onClick={e => {
          props.removeCity([props.city, props.image]);
        }}
      >
        <MinusCircleOutlined className="plus-sign" />
      </button>

      <CardFooter>
        <div className="attributes">
          <span className="rent-price">{"$1,379 / mo"}</span>
          <span className="star-rating bottom-right">
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
          </span>
        </div>
      </CardFooter>
    </CardContainer>
  );
}

export default CardComparison;