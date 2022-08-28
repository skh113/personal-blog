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
  transition: 750ms;
  cursor: pointer;

  a {
    color: black;
  }

  &:hover {
    border-radius: 15px;
    background-color: black;

    a {
      color: whitesmoke;
    }
  }
`;

export default Button;
