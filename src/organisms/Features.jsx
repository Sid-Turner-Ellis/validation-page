import styled from "styled-components";
import H1 from "../atoms/H1";
import { breakpoints } from "../atoms/mixins";
import Block from "../atoms/Block";
import Section from "../molecules/Section";
import { SPACING_MOBILE, SPACING_DESKTOP } from "../atoms/constants";

/** @abstract */
const notLastChildSelector = (marginBottom) => {
  return `
  & > *:not(:last-child) {
    margin-bottom: ${marginBottom}px;
  }
  `;
};

const Wrapper = styled.div`
  margin-bottom: ${SPACING_MOBILE}px;

  ${breakpoints.desktop} {
    margin-bottom: ${SPACING_DESKTOP}px;
  }
`;

const SectionsWrapper = styled.div`
  max-width: 90%;
  margin: auto;
  ${notLastChildSelector(40)}

  ${breakpoints.desktop} {
    max-width: 80%;
    ${notLastChildSelector(80)}
  }
`;

const StyledH1 = styled(H1)`
  text-align: center;
  margin-bottom: 35px;

  ${breakpoints.desktop} {
    margin-bottom: 45px;
  }
`;

const Features = ({ sections }) => {
  return (
    <Block>
      <Wrapper>
        <StyledH1>Features</StyledH1>
        <SectionsWrapper>
          {sections.map((section, i) => (
            <Section {...section} imageLeft={i % 2 === 0} />
          ))}
        </SectionsWrapper>
      </Wrapper>
    </Block>
  );
};

export default Features;
