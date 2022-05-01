import styled from "styled-components";
import { breakpoints } from "../atoms/mixins";

const Wrapper = styled.div`
  width: 100%;
`;
const Logo = styled.img`
  width: 130px;
  display: block;
  margin: auto;

  ${breakpoints.desktop} {
    width: 120px;
    margin: 0;
  }
`;
const Nav = ({ logoUrl }) => {
  return (
    <Wrapper>
      <Logo src={logoUrl} />
    </Wrapper>
  );
};

export default Nav;
