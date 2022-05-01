import styled from "styled-components";
import { breakpoints } from "../atoms/mixins";

const ButtonText = styled.p`
  all: unset;
  font-family: "Roboto Condensed", sans-serif;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.secondary};
  font-weight: 700;

  ${breakpoints.desktop} {
    font-size: 1.8rem;
  }
`;

const Wrapper = styled.button`
  all: unset;
  padding: 10px 20px;
  border-radius: ${({ theme }) => theme.radius};
  border: solid 1px ${({ theme }) => theme.primary};
  background-color: ${(props) => props.theme.primary};
  cursor: ${({ loading }) => (loading ? "not-allowed" : "pointer")};

  &:hover {
    background-color: ${(props) => props.theme.secondary};
    border: solid 1px ${({ theme }) => theme.secondary};

    ${ButtonText} {
      color: ${({ theme }) => theme.primary};
    }
  }

  ${breakpoints.desktop} {
  }
`;

const Button = ({ title, onClick, loading }) => {
  return (
    <Wrapper loading={loading} onClick={onClick}>
      <ButtonText themeColor="secondary">{title}</ButtonText>
    </Wrapper>
  );
};

export default Button;
