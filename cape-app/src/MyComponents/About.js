import React from "react";
import TeamPhotoSec from "./TeamPhotoSec";

export const About = () => {
  localStorage.clear();
  localStorage.setItem("show", false);
  let st = { width: "70vw", height: "70vh" };
  let sp = {
    textAlign: "center",
    padding: "20px",
    marginTop: "20px"
  };
  return (
    <div>
      <div className="wrapper">
        <div className="background-container">
          <div className="bg-1"></div>
          <div className="bg-2"></div>
        </div>
        <div className="about-container">
          <div className="image-container">
            <lottie-player
              src="https://assets7.lottiefiles.com/packages/lf20_zzasoagh.json"
              background="transparent"
              speed="1"
              className="about-lottie"
              style={st}
              loop
              autoplay
            ></lottie-player>
          </div>

          <div className="text-container">
            <h1>About us</h1>
            <p>
              CAPE is a rapidly expanding software firm that places culture and
              creativity at the centre of all we do. Our objective is to help
              clients unlock their capabilities and provide performance analysis
              utilising our unique analytical platform and our unendingly
              helpful assistance and resources.{" "}
            </p>
          </div>
        </div>
      </div>
      <div>
        <h2 style={sp}>Our Team</h2>
        <TeamPhotoSec />
      </div>
    </div>
  );
};
