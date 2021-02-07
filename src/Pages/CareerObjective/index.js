import React from "react";
import Styled from "styled-components";
import Icon from "../../assets/images/NehaKarmakar.jpg";
import Title from "../../Components/Title/index";
const IconWrapper = Styled.div`
    position:relative;
    height: calc(100% - 50%);
    >img {
        width:100%;
        height:100%;
    }
`;

const IconOverlay = Styled.div`
    position: absolute;
    background: rgb(0 0 0 / 20%);
    width: 100%;
    bottom: 0;
    height: 50%;
    font: 500 0.75rem Montserrat;
    padding: 1rem;
    box-sizing: border-box;
    color: rgb(255, 255, 255, 0.6);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    @media (max-width: 1000px) {
      font: 500 0.625rem Montserrat;
      height: auto;
    }
`;

const CareerObjective = () => {
  return (
    <IconWrapper>
      <img src={Icon} alt="" />
      <IconOverlay>
        <Title
          titleText={"CAREER OBJECTIVE"}
          styleTitleText={{ color: "inherit" }}
          styleBorderWrapper={{
            border: "0.0625rem solid rgb(255, 255, 255, 0.3)",
            borderTop: "none",
            borderLeft: "none",
            borderRight: "none",
            marginBottom: "0.3rem"
          }}
          styleRightBorderLine={{ background: "rgb(255, 255, 255, 0.4)" }}
        />
        <div>
          A dedicated self learner who is keen to resolve new challenges using
          knowledge and skillset.Looking for an organization which will act as a
          launchpad for my knowledge and individual identity. A curious and
          goal-oriented individual who is always up for learning new
          technologies to make the product more efficient using time management
          skills.
        </div>
      </IconOverlay>
    </IconWrapper>
  );
};

export default CareerObjective;
