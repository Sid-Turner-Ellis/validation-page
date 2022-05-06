import styled from "styled-components";
import H1 from "../atoms/H1";
import { breakpoints } from "../atoms/mixins";
import Block from "../atoms/Block";
import { SPACING_MOBILE, SPACING_DESKTOP } from "../atoms/constants";
import Card from "../molecules/Card";

export const createHowItWorksCard = (title, text) => ({
  title,
  text,
});

const Wrapper = styled.div`
  margin-bottom: ${SPACING_MOBILE}px;

  ${breakpoints.desktop} {
    margin-bottom: ${SPACING_DESKTOP}px;
  }
`;

const StyledH1 = styled(H1)`
  text-align: center;
  margin-bottom: 35px;

  ${breakpoints.desktop} {
    margin-bottom: 45px;
  }
`;

const CardWrapper = styled.div`
  display: grid;
  gap: 20px;

  ${breakpoints.desktop} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const HowItWorks = ({ howItWorksCards }) => {
  return (
    <Block>
      <Wrapper>
        <StyledH1>How it works</StyledH1>
        <CardWrapper>
          {howItWorksCards.map((card) => (
            <Card {...card} />
          ))}
        </CardWrapper>
      </Wrapper>
    </Block>
  );
};

export default HowItWorks;
