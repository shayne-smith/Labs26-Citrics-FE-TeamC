import React from "react";
import styled from "styled-components";

import Header from "../../common/Header.js";
import {
  GithubOutlined,
  LinkedinOutlined,
  UserOutlined
} from "@ant-design/icons";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 2rem;
  font-family: Amatic SC;
`;

const El = styled.div`
  margin: 1.5rem;
  padding-top: 1%;
  width: 25%;
  background: rgba(112, 199, 131, 0.9);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Footer = styled.div`
  text-align: center;
`;

const Image = styled.img`
  width: 15%;
  border-radius: 0.5rem;
`;
function About() {
  return (
    <>
      <Header />
      <h2
        style={{
          textAlign: "center",
          fontFamily: "Amatic SC",
          fontSize: "2rem"
        }}
      >
        A team from Lambda School
      </h2>
      <Wrapper>
        {data.map((e, index) => (
          <El key={index}>
            <Image alt="img" src={e.image} />
            <h3 style={{ fontWeight: "700", fontSize: "1.4rem" }}>{e.name}</h3>
            <p
              style={{
                fontWeight: "700",
                fontSize: "1.3rem",
                marginBottom: "0"
              }}
            >
              {e.role}
            </p>
            <div style={{ display: "flex", fontSize: "1.2rem" }}>
              <a
                href={e.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social"
              >
                <GithubOutlined className="icon" />
                <span className="text">Github</span>
              </a>
              <a
                href={e.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="social"
              >
                <LinkedinOutlined className="icon" />
                <span className="text">LinkedIn</span>
              </a>
            </div>
          </El>
        ))}
      </Wrapper>
      <Footer>
        Copyright 2020{" "}
        <span style={{ color: "rgba(112, 199, 131, 0.9)" }}>Driftly Team</span>
      </Footer>
    </>
  );
}

const data = [
  {
    name: "Vlad",
    role: "APL",
    github: "",
    linkedIn: "",
    image: "https://ca.slack-edge.com/ESZCHB482-W012X6RQ5G9-833633f70058-512"
  },
  {
    name: "Connor Angelis",
    role: "TPL",
    github: "",
    linkedIn: "",
    image: "https://ca.slack-edge.com/ESZCHB482-W0138D6L6UQ-bbfef33c1387-512"
  },
  {
    name: "Shayne Smith",
    role: "Full Stack Engineer",
    github: "",
    linkedIn: "",
    image: "https://ca.slack-edge.com/ESZCHB482-W0123RTM51V-bf749dc3288f-512"
  },
  {
    name: "Guillermo Alfaro",
    role: "Full Stack Engineer",
    github: "",
    linkedIn: "",
    image: "https://ca.slack-edge.com/ESZCHB482-W0123RTV5QX-3ba8de22b37c-512"
  },
  {
    name: "Nathan Nguyen",
    role: "Full Stack Engineer",
    github: "https://github.com/NathanNNguyen/",
    linkedIn: "https://www.linkedin.com/in/nathannnguyen/",
    image: "https://ca.slack-edge.com/ESZCHB482-W012QNUUE6Q-79b5f4d3d5d8-512"
  },
  {
    name: "Michael Toce",
    role: "Data Scientist",
    github: "",
    linkedIn: "",
    image: "https://ca.slack-edge.com/ESZCHB482-W012JHYTBU2-f789bad4aa18-512"
  },
  {
    name: "Rourke Struthers",
    role: "Data Scientist",
    github: "",
    linkedIn: "",
    image: "https://ca.slack-edge.com/ESZCHB482-W012QNXTZMJ-4c660cb71977-512"
  },
  {
    name: "Fatai King",
    role: "Data Scientist",
    github: "",
    linkedIn: "",
    image: "https://ca.slack-edge.com/ESZCHB482-W012BRSS6EA-1757906d14b2-512"
  }
];

export default About;
