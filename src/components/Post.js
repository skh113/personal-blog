import React from "react";
import styled from "styled-components";

function Post() {
  return (
    <Container>
      <PostImg src="django.jpg" alt="post-image" />
      <Author>
        <a href="google">author name</a>
        <div>2022-8-27</div>
      </Author>
      <Title href="google">
        <h2>This is a really long Title</h2>
      </Title>
      <Views>
        <div>100</div>
        <div>time to read: 5 min</div>
      </Views>
    </Container>
  );
}

const Container = styled.div`
  width: 40%;
  border-radius: 10px;
  overflow: hidden;
  border-bottom: 1px solid hsl(0, 0%, 70%);
  border-right: 1px solid hsl(0, 0%, 70%);
  box-shadow: 2.7px 2.6px 3.6px rgba(0, 0, 0, 0.024),
    7.5px 7.3px 10px rgba(0, 0, 0, 0.035),
    18.1px 17.5px 24.1px rgba(0, 0, 0, 0.046);

  * {
    margin: 0;
  }

  @media (max-width: 768px) {
    width: 80%;
  }
`;

const PostImg = styled.img`
  width: 100%;
  border-radius: 10px;
  cursor: pointer;
`;

const Author = styled.div`
  display: flex;
  color: hsl(0, 0%, 50%);
  font-size: 12px;
  align-items: center;

  a {
    padding: 5px;
    color: whitesmoke;
    background-color: #47b1ff;
    text-decoration: none;
    border-radius: 8px;
    margin: 8px 10px;
  }
`;

const Title = styled.a`
  * {
    padding: 0 10px 10px;
  }
`;

const Views = styled.div`
  display: flex;
  color: hsl(0, 0%, 50%);
  font-size: 12px;
  padding: 0 10px 10px;

  * {
    margin: 0 20px 0 0;
  }
`;

export default Post;
