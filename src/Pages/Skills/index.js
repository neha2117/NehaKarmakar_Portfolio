import React from "react";
import Styled from "styled-components";
import Title from "../../Components/Title/index";

const SkillsWrapper = Styled.div`
    padding: 2rem 4rem;
    @media (max-width: 1000px) {
      padding: 2rem 1rem;
    }
`;

const SkillsDetailsWrapper = Styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-top: 2rem;
    @media (max-width: 1000px) {
      gap: 0.8rem;
      margin-top: 1.2rem;
    }
`;

const SkillsDetails = Styled.div`
    width: auto;
    border: 1px solid #5eaaa5;
    padding: 0.5rem 0.8rem;
    border-radius: 15px;
    color: #989898;
    font: 600 0.875rem Montserrat;
    &:hover {
        background:#5eaaa5;
        color: #fff;
        transition: all 0.3s;
        cursor: pointer;
    }
    @media (max-width: 1000px) { 
      font: 600 0.75rem Montserrat;
    }
`;

const Skills = props => {
  const { skillsDetails = [] } = props;
  return (
    <SkillsWrapper>
      <Title
        titleText={"SKILLS"}
        styleBorderWrapper={{
          border: "0.0625rem solid #5eaaa5",
          borderTop: "none",
          borderLeft: "none",
          borderRight: "none"
        }}
        styleRightBorderLine={{ background: "#5eaaa5" }}
        styleTitleText={{ font: "400 1.375rem Montserrat", color: "#5eaaa5" }}
      />
      <SkillsDetailsWrapper>
        {skillsDetails &&
          skillsDetails.map((details, key) => {
            return (
              <SkillsDetails key={key}>{details?.value ?? ""}</SkillsDetails>
            );
          })}
      </SkillsDetailsWrapper>
    </SkillsWrapper>
  );
};

Skills.defaultProps = {
  skillsDetails: [
    { value: "C" },
    { value: "C++" },
    { value: "Python" },
    { value: "HTML" },
    { value: "CSS" },
    { value: "Javascript" },
    { value: "Bootstrap" },
    { value: "ReactJs" },
    { value: "Redux" },
    { value: "MySQL" },
    { value: "Git" },
    { value: "GitLab" },
    { value: "Jira" },
    { value: "Postman" }
  ]
};
export default Skills;
