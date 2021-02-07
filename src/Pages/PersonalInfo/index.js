import React from "react";
import Styled from "styled-components";

const PersonalDetailsWrapper = Styled.div`
    background: #f6f6f6;
    padding: 4rem;
    h1,h4 {margin: 0};
    h1 {
        color: #5eaaa5;
        font: 700 2.625rem Montserrat;
    }
    h4 {
       color: #989898;
       font: 400 1.25rem Montserrat;
    }
    @media (max-width: 1000px) {
      padding: 1rem;
      h1 {
        font: 700 1.625rem Montserrat;
      }
      h4 {font: 400 0.875rem Montserrat;}
    }
`;

const PersonalInfo = () => {
  return (
    <PersonalDetailsWrapper>
      <h1>Neha Karmakar</h1>
      <h4>Software Development Engineer I</h4>
    </PersonalDetailsWrapper>
  );
};

export default PersonalInfo;
