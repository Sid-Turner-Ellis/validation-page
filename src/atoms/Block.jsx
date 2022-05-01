import styled from "styled-components";
import { breakpoints } from "./mixins";

const Block = styled.div`
  ${breakpoints.desktop} {
    padding: 0 50px;
  }
`;

export default Block;
