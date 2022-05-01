import styled from "styled-components";
import { breakpoints } from "./mixins";

const H1 = styled.h1`
  font-family: ${({ theme }) => theme.headingFont};

  color: ${({ theme, themeColor }) =>
    themeColor ? theme[themeColor] : theme.text};
  font-size: 2.2rem;

  ${breakpoints.desktop} {
    font-size: calc(2.2rem * 4 / 3);
  }
`;

export default H1;
