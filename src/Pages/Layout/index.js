import React from "react";
import ContactInfo from "../ContactInfo/index";
import PersonalInfo from "../PersonalInfo/index";
import CareerObjective from "../CareerObjective/index";
import Skills from "../Skills/index";
import Experience from "../Experience/index";
import "./index.scss";

const Layout = () => {
  return (
    <div className="layout">
      <div className="layout__wrapper">
        {/* <div className="layout__container"> */}
        <div className="layout__left-aside">
          <div className="layout__personalInfo--sm">
            <PersonalInfo />
          </div>
          <CareerObjective />
          <ContactInfo styleWrapper="hello" />
        </div>
        <div className="layout__right-aside">
          <div className="layout__personalInfo--lg">
            <PersonalInfo />
          </div>
          <div>
            <Skills />
          </div>
          <div>
            <Experience />
          </div>
          <div className="layout__contact--sm">
            <ContactInfo />
          </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Layout;
