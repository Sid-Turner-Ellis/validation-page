import styled from "styled-components";
import { breakpoints } from "./mixins";

const H3 = styled.h3`
  font-family: ${({ theme }) => theme.headingFont};
  color: ${(props) => props.theme.text};
  font-size: calc(2.2rem * 2 / 3);

  ${breakpoints.desktop} {
    font-size: 2.2rem;
  }
`;

export default H3;
