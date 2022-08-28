import React from "react";
import styled from "styled-components";
import Button from "./Button";

function Header() {
  return (
    <Container>
      <LeftSide>
        <a href="/">Home</a>
        <a href="/posts">Posts</a>
        <a href="/about">About</a>
      </LeftSide>
      <Button
        text={"Contact Me"}
        link={"mailto:skhprogramming@gmail.com"}
      ></Button>
    </Container>
  );
}

const Container = styled.div`
  padding: 10px;
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid hsl(0, 0%, 90%);
  box-shadow: 2.7px 2.6px 3.6px rgba(0, 0, 0, 0.024),
    7.5px 7.3px 10px rgba(0, 0, 0, 0.035);
`;

const LeftSide = styled.div`
  a {
    padding: 0 10px;

    &:first-child {
      font-weight: 700;
    }
  }
`;

export default Header;
