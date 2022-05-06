import styled from "styled-components";
import { breakpoints } from "../atoms/mixins";
import H3 from "../atoms/H3";
import P from "../atoms/P";

const Wrapper = styled.div`
  text-align: center;
  background-color: #fbfbfb;
  border-radius: ${({ theme }) => theme.radius};
  -webkit-box-shadow: 0px 0px 11px -5px rgba(18, 18, 18, 1);
  -moz-box-shadow: 0px 0px 11px -5px rgba(18, 18, 18, 1);
  box-shadow: 0px 0px 11px -5px rgba(18, 18, 18, 1);
  padding: 10px;
  ${breakpoints.desktop} {
  }
`;

const Card = ({ title, text }) => {
  return (
    <Wrapper>
      <H3>{title}</H3>
      <P>{text}</P>
    </Wrapper>
  );
};

export default Card;
