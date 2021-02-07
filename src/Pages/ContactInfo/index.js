import React from "react";
import Title from "../../Components/Title/index";
import Styled from "styled-components";
import PhoneIcon from "../../assets/images/call.svg";
import EmailIcon from "../../assets/images/email_icon.svg";
import GithubIcon from "../../assets/images/github.svg";
import LinkedInIcon from "../../assets/images/linkedin.svg";

const ContactInfoWrapper = Styled.div`
    background: #5eaaa5;
    padding: 2rem 1rem 1rem 1rem;
    color: #9ce0db;
    font: 600 0.875rem Montserrat;
    height: 50%;
    @media (max-width: 1000px) {
      padding: 2rem 1rem 1rem 1rem;
      font: 600 0.75rem Montserrat;
      height: auto;
    }
`;

const ContactDetailsWrapper = Styled.div`
  margin-top: 1.2rem;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

const ContactDetails = Styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  .icon-wrapper {
    width: 1.5rem;
    > img {
      width: 100%;
      height: 100%;
    }
  }
`;

const ContactInfo = props => {
  const { contactDetails = [], styleWrapper = "" } = props;
  return (
    <ContactInfoWrapper className={styleWrapper}>
      <Title
        titleText={"CONTACT INFO"}
        styleTitleText={{ color: "#9ce0db" }}
        styleBorderWrapper={{
          border: "0.0625rem solid #9ce0db",
          borderTop: "none",
          borderLeft: "none",
          borderRight: "none",
          marginBottom: "0.3rem"
        }}
        styleRightBorderLine={{ background: "#9ce0db" }}
      />
      <ContactDetailsWrapper>
        {contactDetails &&
          contactDetails.map((details, key) => {
            return (
              <ContactDetails key={key}>
                <div className="icon-wrapper">
                  <img src={details?.icon ?? ""} alt="" />
                </div>
                <div>{details?.value ?? ""}</div>
              </ContactDetails>
            );
          })}
      </ContactDetailsWrapper>
    </ContactInfoWrapper>
  );
};

ContactInfo.defaultProps = {
  contactDetails: [
    { icon: PhoneIcon, value: "+918949286343" },
    { icon: EmailIcon, value: "nehakarmakar88888.nk@gmail.com" },
    { icon: GithubIcon, value: "github" },
    { icon: LinkedInIcon, value: "linkedin" }
  ],
  styleWrapper: ""
};

export default ContactInfo;
