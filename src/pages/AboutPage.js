import React from "react";
import Hero from "../components/Hero";
import Content from "../components/Content";

function AboutPage(props) {
  return (
    <div className="pb-5 kc-h100">
      <Hero title={props.title} />

      <Content>
        <p>
          Hi my name is Kyle Chu and I am a Computer Science and Business
          Administration student at Northeastern University. I am currently a
          third year and plan to graduate May 2022.
        </p>
        <p>
          I have done one Coop at HarbourVest Partners where I mostly worked on
          internal automation in Python. I have also interned at an insurance
          company, Bamboo, where I worked on Python development and automated
          testing in Java. You can read more about my job experiences on my
          resume.
        </p>
        <p className="pb-5">
          I am looking for a Coop or internship for July - Dec 2020. I'm
          applying for software development or engineering jobs. I'm interested
          in full stack or back end.Feel free to contact me on the contact page
          if you're interested.
        </p>
      </Content>
    </div>
  );
}

export default AboutPage;
