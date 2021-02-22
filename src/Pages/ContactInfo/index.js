import React from "react";
import Title from "../../Components/Title/index";
import Styled from "styled-components";
import PhoneIcon from "../../assets/images/call.svg";
import EmailIcon from "../../assets/images/email_icon.svg";
import GithubIcon from "../../assets/images/github.svg";
import LinkedInIcon from "../../assets/images/linkedin.svg";
import Resume from "../../assets/document/NehaKarmakar.pdf";

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
  .contact-details {
    color: #9ce0db;
    font: 600 0.875rem Montserrat;
    text-decoration: none;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const DownloadBtn = Styled.div`
  text-align: center;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid;
  width: 11rem;
  margin: 2rem auto;
  border-radius: 4px;
  > a {
    color: #9ce0db;
    font: 600 0.875rem Montserrat;
    text-decoration: none;
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
                <a
                  href={details?.link}
                  target="_blank"
                  className="contact-details"
                  title={details?.value ?? ""}
                >
                  {details?.value ?? ""}
                </a>
              </ContactDetails>
            );
          })}
      </ContactDetailsWrapper>
      <DownloadBtn>
        <a href={Resume} download="Neha_Karmakar_Resume">
          Download Resume
        </a>
      </DownloadBtn>
    </ContactInfoWrapper>
  );
};

ContactInfo.defaultProps = {
  contactDetails: [
    { icon: PhoneIcon, value: "+918949286343", link: "tel:+918949286343" },
    {
      icon: EmailIcon,
      value: "nehakarmakar88888.nk@gmail.com",
      link:
        "https://mail.google.com/mail/?view=cm&fs=1&to=nehakarmakar88888.nk@gmail.com"
    },
    {
      icon: GithubIcon,
      value: "GitHub",
      link: "https://github.com/neha2117"
    },
    {
      icon: LinkedInIcon,
      value: "LinkedIn",
      link: "https://www.linkedin.com/in/nehakarmakar/"
    }
  ],
  styleWrapper: ""
};

export default ContactInfo;
