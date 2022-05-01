import styled from "styled-components";
import H3 from "../atoms/H3";
import { breakpoints } from "../atoms/mixins";
import P from "../atoms/P";

export const createSection = (title, text, imageUrl) => {
  return {
    title,
    text,
    imageUrl,
  };
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  ${breakpoints.desktop} {
    gap: 20px;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    flex-direction: row-reverse;
    flex-direction: ${(props) => (props.imageLeft ? "row-reverse" : "row")};
  }
`;
const Image = styled.img`
  max-width: 100%;

  ${breakpoints.desktop} {
    max-width: 40%;
  }
`;
const ContentWrapper = styled.div`
  flex-grow: 1;
`;

const Section = ({ imageUrl, title, text, imageLeft }) => {
  return (
    <Wrapper imageLeft={imageLeft}>
      <Image src={imageUrl} />
      <ContentWrapper>
        <H3>{title}</H3>
        <P>{text}</P>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Section;
