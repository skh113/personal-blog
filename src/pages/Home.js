import React from "react";
import Header from "../components/Header";
import Profile from "../components/Profile";

function Home() {
  return (
    <div>
      <Profile
        name={"Keyvan Hosseini"}
        city={"Karaj"}
        img={"/profile/Profile.jpg"}
      />
    </div>
  );
}

export default Home;
