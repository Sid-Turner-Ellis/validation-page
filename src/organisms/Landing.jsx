import styled from "styled-components";
import H1 from "../atoms/H1";
import { breakpoints } from "../atoms/mixins";
import P from "../atoms/P";
import Block from "../atoms/Block";
import Button from "../molecules/Button";
import { SPACING_DESKTOP, SPACING_MOBILE } from "../atoms/constants";
import ReactGA from "react-ga4";
import { GA_EVENTS } from "../utils";

const Wrapper = styled.div`
  text-align: center;
  margin: ${SPACING_MOBILE}px auto;

  ${breakpoints.desktop} {
    margin: ${SPACING_DESKTOP}px auto;

    p {
      max-width: 70%;
      margin-left: auto;
      margin-right: auto;
    }
  }
`;

const StyledH1 = styled(H1)`
  margin-bottom: 35px;

  ${breakpoints.desktop} {
    margin-bottom: 45px;
  }
`;

const StyledP = styled(P)`
  margin-bottom: 35px;

  ${breakpoints.desktop} {
    margin-bottom: 45px;
  }
`;

const Img = styled.img`
  width: 100%;
  margin-top: 45px;
  display: block;

  ${breakpoints.desktop} {
    margin: auto;
    width: 85%;
    margin-top: 55px;
  }
`;

const Landing = ({ title, text, imageUrl }) => {
  const handleOnButtonClick = () => {
    ReactGA.event(GA_EVENTS.Cta1());
    window.location.replace("#sign-up");
  };

  return (
    <Block>
      <Wrapper>
        <StyledH1>{title}</StyledH1>
        <StyledP>{text}</StyledP>
        <Button title="Sign up" onClick={handleOnButtonClick} />
        <Img src={imageUrl} />
      </Wrapper>
    </Block>
  );
};

export default Landing;
