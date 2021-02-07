import React from "react";
import Styled from "styled-components";
import Title from "../../Components/Title/index";

const ExperienceWrapper = Styled.div`
    padding: 2rem 4rem;
    @media (max-width: 1000px) {
      padding: 2rem 1rem;
    }
`;

const ExperienceDetailsWrapper = Styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.3rem;
    margin-top: 2rem;
    @media (max-width: 1000px) {
      margin-top: 1.2rem;
    }
`;

const DetailsWrapper = Styled.div`
    display: flex;
    justify-content: space-between;
    .details-wrapper {
        &__company-name {
            color: black;
            font: 600 1rem Montserrat;
        }
        &__role {
            color: #989898;
            font: 500 0.875rem Montserrat;
        }
        &__location {
            color: rgb(152 152 152 / 70%);
            font: 400 0.875rem Montserrat;
        }
        &__right-aside {
            color: #989898;
            font: 500 0.875rem Montserrat;
        }
    }
    @media (max-width: 1000px) { 
      display: block; 
      .details-wrapper {
        &__company-name {
          font: 600 0.875rem Montserrat;
        }
        &__role {
            font: 500 0.75rem Montserrat;
        }
        &__location {
            font: 400 0.75rem Montserrat;
        }
        &__right-aside {
            font: 400 0.75rem Montserrat;
            color: rgb(152 152 152 / 70%);
        }
      }
    }
`;

const Experience = props => {
  const { experienceDetails = [] } = props;
  return (
    <ExperienceWrapper>
      <Title
        titleText={"EXPERIENCE"}
        styleBorderWrapper={{
          border: "0.0625rem solid #5eaaa5",
          borderTop: "none",
          borderLeft: "none",
          borderRight: "none"
        }}
        styleRightBorderLine={{ background: "#5eaaa5" }}
        styleTitleText={{ font: "400 1.375rem Montserrat", color: "#5eaaa5" }}
      />
      <ExperienceDetailsWrapper>
        {experienceDetails &&
          experienceDetails.map((details, key) => {
            return (
              <DetailsWrapper className="details-wrapper" key={key}>
                <div className="details-wrapper__left-aside">
                  <div className="details-wrapper__company-name">
                    {details?.company_name ?? ""}
                  </div>
                  <div className="details-wrapper__role">
                    {details?.role ?? ""}
                  </div>
                  <div className="details-wrapper__location">
                    {details?.location ?? ""}
                  </div>
                </div>
                <div className="details-wrapper__right-aside">
                  {details?.years_of_experience ?? ""}
                </div>
              </DetailsWrapper>
            );
          })}
      </ExperienceDetailsWrapper>
    </ExperienceWrapper>
  );
};

Experience.defaultProps = {
  experienceDetails: [
    {
      company_name: "Indiavidual Learning Pvt. Ltd. (EMBIBE)",
      years_of_experience: "Nov 2019 - Present",
      role: "Software Development Enigneer I",
      location: "Bengaluru Area, India"
    },
    {
      company_name: "Crosslight Appmissions Pvt. Ltd. (CHURCHTALK)",
      years_of_experience: "Sept 2018 - Nov 2019",
      role: "Software Developer",
      location: "Bengaluru Area, India"
    }
  ]
};

export default Experience;
