import React from "react";
import Styled from "styled-components";

const TitleText = Styled.div`
    color: black;
    ${props => props.styleTitleText};
    @media (max-width:1000px) {
      font: 400 1rem Montserrat;
    }
`;
const BorderLine = Styled.div`
    width: 100%;
    background: transparent;
    height: 0.5rem;
    display: flex;
    border: 0.0625rem solid black;
    border-top: none;
    border-left: none;
    border-right: none;
    ${props => props.styleBorderWrapper};
    @media (max-width:1000px) {
      height: 0.3rem;
    }
`;
const RightBorderLine = Styled.div`
    background: black;
    width: 40%;
    ${props => props.styleRightBorderLine};
`;
const LeftBorderLine = Styled.div`
    background: transparent;
    width: 60%;
    ${props => props.styleLeftBorderLine};
`;
const Title = props => {
  const {
    titleText = "",
    styleBorderWrapper = {},
    styleRightBorderLine = {},
    styleLeftBorderLine = {},
    styleTitleText = {}
  } = props;
  return (
    <>
      <TitleText styleTitleText={styleTitleText}>{titleText}</TitleText>
      <BorderLine styleBorderWrapper={styleBorderWrapper}>
        <LeftBorderLine styleLeftBorderLine={styleLeftBorderLine} />
        <RightBorderLine styleRightBorderLine={styleRightBorderLine} />
      </BorderLine>
    </>
  );
};
Title.defaultProps = {
  titleText: "SKILLS",
  styleBorderWrapper: {},
  styleRightBorderLine: {},
  styleLeftBorderLine: {},
  styleTitleText: {}
};
export default Title;
