import React from "react";
import styled from "styled-components";

function Button(props) {
  return (
    <Container>
      <a href={props.link}>{props.text}</a>
    </Container>
  );
}

const Container = styled.button`
  border: 1px solid hsl(0, 0%, 40%);
  border-radius: 10px;
  background-color: white;
  padding: 10px 20px;
  transition: 500ms;
  cursor: pointer;

  a {
    text-decoration: none;
    color: hsl(0, 0%, 40%);
  }

  &:hover {
    border-radius: 15px;
    a {
      color: black;
    }
  }
`;

export default Button;
