import React from "react";
import styled from "styled-components";

function Profile(props) {
  return (
    <Container>
      <BgImg src="/profile/bg-pattern-card.svg" alt="bg" />
      <Info>
        <ProfileImg src={props.img} alt="profile-image" />
        <h1>{props.name}</h1>
        {props.position}
      </Info>
      <Insight>
        <Item>
          4<span>Posts</span>
        </Item>
        <Item>
          50
          <span>Views</span>
        </Item>
        <Item>
          10K
          <span>Likes</span>
        </Item>
      </Insight>
    </Container>
  );
}

const Container = styled.div`
  width: 375px;
  height: 375px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  box-shadow: 2.7px 2.6px 3.6px rgba(0, 0, 0, 0.024),
    7.5px 7.3px 10px rgba(0, 0, 0, 0.035),
    18.1px 17.5px 24.1px rgba(0, 0, 0, 0.046);
`;

const BgImg = styled.img`
  width: 100%;
  border-bottom: 1px solid hsl(0, 0%, 90%);
`;

const Info = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  color: hsl(0, 0%, 59%);
  top: -20%;
  padding-bottom: 20px;
  border-bottom: 1px solid hsl(0, 0%, 90%);

  a {
    text-decoration: none;
    font-weight: 700;
    color: black;
  }

  * {
    padding-bottom: 5px;
  }
`;

const ProfileImg = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 5px solid whitesmoke;
  margin-bottom: 5px;
`;

const Insight = styled.div`
  position: relative;
  top: -17%;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 700;
  text-align: center;

  span {
    padding-top: 5px;
    font-weight: 400;
    font-size: 10px;
    color: hsl(0, 0%, 59%);
  }
`;

export default Profile;
