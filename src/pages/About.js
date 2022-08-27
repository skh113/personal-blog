import React from "react";

import Profile from "../components/Profile";

function About() {
  return (
    <div>
      <Profile
        name={"Keyvan Hosseini"}
        position={"Backend Developer"}
        img={"/profile/Profile.jpg"}
      />
    </div>
  );
}

export default About;
