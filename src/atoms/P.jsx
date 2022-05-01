import styled from "styled-components";
import { breakpoints } from "./mixins";

const P = styled.p`
  font-family: ${({ theme }) => theme.defaultFont};

  font-size: calc(2.2rem * 180 / 300);
  color: ${(props) => props.theme.text};
  font-weight: 100;

  ${breakpoints.desktop} {
    font-size: calc(calc(2.2rem * 4 / 3) * 220 / 400);
  }
`;

export default P;
