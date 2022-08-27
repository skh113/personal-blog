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
`;

const LeftSide = styled.div`
  a {
    padding: 0 10px;
    text-decoration: none;
    color: black;

    &:first-child {
      font-weight: 700;
    }
  }
`;

export default Header;
