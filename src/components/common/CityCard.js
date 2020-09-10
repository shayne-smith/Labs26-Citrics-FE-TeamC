import React, { useState } from "react";
import styled from "styled-components";

import ny from "../../assets/ny.jpg";
import boulder from "../../assets/boulder.jpg";
import la from "../../assets/la.jpg";
import miami from "../../assets/miami.jpg";

function CityCard(props) {
  const CardContainer = styled.div`
    background: url(${boulder}) no-repeat center;
    background-size: cover;
    background-repeat: no-repeat;
    color: whitesmoke;
    width: 29%;
    height: 150px;
    min-width: 300px;
    margin: 1rem;
    padding: 0.5rem;
    border-radius: 3px;
    flex-grow: 1;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

    &:hover {
      transform: scale(1.05);
      transition-duration: 0.1s;
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
    white-space: nowrap;

    display: flex;
    justify-content: center;
    align-items: center;

    font-family: Amatic SC;
    font-style: normal;
    font-weight: bold;
    font-size: 1.2rem;
    text-align: center;

    background: #70c783;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    &:after {
      content: "";
      position: absolute;
      left: 100%;
      height: 0;
      width: 0;
      border-left: 11.5px solid #70c783;
      border-right: 11.5px solid transparent;
      border-bottom: 11.5px solid transparent;
      border-top: 11.5px solid transparent;
    }
  `;

  const CardFooter = styled.div`
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
    background: rgba(112, 199, 131, 0.8);

    font-family: Amatic SC;
    font-style: normal;
    font-weight: bold;
    font-size: 1.1rem;
  `;

  return (
    <CardContainer>
      <CardHeader>{props.city}</CardHeader>

      <CardFooter>
        <div class="attributes">
          <span class="rent-price">{"$1,379 / mo"}</span>
          <span class="star-rating bottom-right">
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
          </span>
        </div>
      </CardFooter>
    </CardContainer>
  );
}

export default CityCard;
