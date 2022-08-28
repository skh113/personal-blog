import React from "react";
import styled from "styled-components";
import Button from "../components/Button";

import Profile from "../components/Profile";
import Projects from "../components/Projects";
import Tech from "../components/Tech";

function About() {
  return (
    <Container>
      <LeftSide>
        <Profile
          name={"Keyvan Hosseini"}
          position={"Backend Developer"}
          img={"/profile/Profile.jpg"}
        />
        <ContactInfo>
          Contact Information
          <Item href="google">
            <img src="/contact/phone.png" alt="contact-icon" />
            <h4>09305121569</h4>
          </Item>
          <Item href="https://github.com/skh113">
            <img src="/contact/github.png" alt="contact-icon" />
            <h4>SKH113</h4>
          </Item>
          <Item href="https://www.linkedin.com/in/keyvan-hosseini-a12b19238/">
            <img src="/contact/linkedin.png" alt="contact-icon" />
            <h4>Keyvan Hosseini</h4>
          </Item>
          <Item href="https://t.me/SKH113/">
            <img src="/contact/telegram.png" alt="contact-icon" />
            <h4>SKH113</h4>
          </Item>
          <Item href="https://www.instagram.com/skh_113/">
            <img src="/contact/instagram.png" alt="contact-icon" />
            <h4>keyvan_hosseini1</h4>
          </Item>
        </ContactInfo>
        <Button text={"Download Resume"} link={"resume"}></Button>
      </LeftSide>
      <RightSide>
        <Description>
          I'm a Junior web developer interested in web technologies and
          "Python". I am good at learning new concepts and structures swiftly.
          therefore, I enjoy spending my time upskilling my skillset so I'm
          eagerly interested to learn new concepts in the tech world. In
          addition, I’m looking forward to mastering "Django" in an occupation.
        </Description>
        <Projects />
        <Tech />
      </RightSide>
    </Container>
  );
}

const Container = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  margin: 20px 0;

  * {
    margin: 0 10px;
  }

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
`;

const LeftSide = styled.div``;

const ContactInfo = styled.div`
  width: 375px;
  border-radius: 10px;
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  text-align: center;
  font-weight: 700;
  box-shadow: 2.7px 2.6px 3.6px rgba(0, 0, 0, 0.024),
    7.5px 7.3px 10px rgba(0, 0, 0, 0.035),
    18.1px 17.5px 24.1px rgba(0, 0, 0, 0.046);
`;

const Item = styled.a`
  display: flex;
  flex-direction: row;
  margin: 10px 0;

  h4 {
    font-weight: 400;
  }

  img {
    width: 20px;
  }
`;

const RightSide = styled.div``;

const Description = styled.div``;

export default About;
