import React from "react";
import styled from "styled-components";

import Post from "../components/Post";

function Posts() {
  return (
    <Container>
      <Post />
      <Post />
      <Post />
      <Post />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  * {
    margin: 10px;
  }
`;

export default Posts;
