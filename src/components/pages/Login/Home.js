import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withOktaAuth } from "@okta/okta-react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: Amatic SC;
`;

const Header = styled.h1`
  color: rgba(112, 199, 131, 0.9);
  font-size: 4rem;
`;

const Text = styled.h4`
  font-size: 3rem;
`;

const Button = styled.button`
  border-radius: 1rem;
  background: rgba(112, 199, 131, 0.9);
  color: white;
  width: 10rem;
  border: none;
  font-size: 1.4rem;
  font-weight: 700;
  margin: 0.2rem auto;
  box-shadow: 5px 5px 10px rgba(112, 199, 131, 0.6);
`;

export default withOktaAuth(
  class Home extends Component {
    constructor(props) {
      super(props);
      this.login = this.login.bind(this);
      this.logout = this.logout.bind(this);
    }

    async login() {
      this.props.authService.login("/");
    }

    async logout() {
      this.props.authService.logout("/");
    }

    render() {
      if (this.props.authState.isPending) return null;

      const mainContent = this.props.authState.isAuthenticated ? (
        <div>
          <Text>
            Welcome to the staff portal,{" "}
            <Link style={{ color: "rgba(112, 199, 131, 0.9)" }} to="/home">
              click here{" "}
            </Link>
            to go to the home page.
          </Text>
          <Button onClick={this.logout}>Logout</Button>
        </div>
      ) : (
        <div>
          <Text>
            If you are a staff member, please log in to get to{" "}
            <Link style={{ color: "rgba(112, 199, 131, 0.9)" }} to="/home">
              main site
            </Link>
          </Text>
          <Button onClick={this.login}>Login</Button>
        </div>
      );

      return (
        <Container>
          <Header>Driftly Staff Portal</Header>
          {mainContent}
        </Container>
      );
    }
  }
);
