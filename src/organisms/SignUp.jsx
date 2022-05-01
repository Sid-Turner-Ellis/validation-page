import styled from "styled-components";
import H1 from "../atoms/H1";
import { breakpoints } from "../atoms/mixins";
import P from "../atoms/P";
import Block from "../atoms/Block";
import Button from "../molecules/Button";
import { useState } from "react";
import { SPACING_DESKTOP, SPACING_MOBILE } from "../atoms/constants";
import ReactGA from "react-ga4";
import { GA_EVENTS } from "../utils";

const Wrapper = styled.div`
  text-align: center;
  padding: ${SPACING_MOBILE}px 0;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    left: -50vw;
    right: -50vw;
    top: 0;
    bottom: 0;
    background-color: #fbfbfb;
    z-index: -1;
  }

  ${breakpoints.desktop} {
    padding: ${SPACING_DESKTOP}px 0;
  }
`;

/**
 * @abstract
 */

const maxWidth = `
  width: 95%;
  margin-left: auto;
  margin-right: auto;
  max-width: 500px;

  ${breakpoints.desktop}{
    width: 80%;
    max-width: 620px;
  }

`;

const StyledP = styled(P)`
  ${maxWidth}
`;

const InputWrapper = styled.div`
  display: grid;
  grid-auto-rows: 1fr 1fr;
  gap: 10px;
  width: 100%;
  ${maxWidth}
`;

const Input = styled.input`
  all: unset;
  display: block;
  border-radius: ${({ theme }) => theme.radius};
  border: solid 1px ${({ theme }) => theme.primary};
  font-family: "Roboto", sans-serif;
  color: ${({ theme }) => theme.text};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  font-size: 1.8rem;
`;

const StyledH1 = styled(H1)`
  margin-top: 0;

  ${breakpoints.desktop} {
    margin-top: 0;
  }
`;

const SuccessImage = styled.img`
  margin-top: 50px;
  width: 100px;
  height: 100px;
`;

const SignUp = ({ title, text }) => {
  const [value, setValue] = useState("");
  const [status, setStatus] = useState({
    loading: false,
    signedUp: false,
  });

  const handleOnChange = (e) => {
    if (!status.loading) {
      e.preventDefault();
      setValue(e.value);
    }
  };

  const handleSignUp = async () => {
    if (!status.loading && !status.signedUp) {
      setStatus((p) => ({ ...p, loading: true }));
      ReactGA.event(GA_EVENTS.Cta2(value));
      // wait so that it doesnt feel too fast
      await new Promise((res) => {
        setTimeout(() => res(), 1000);
      });

      setStatus({
        loading: false,
        signedUp: true,
      });
    }
  };

  return (
    <Block id="sign-up">
      <Wrapper>
        <StyledH1>
          {status.signedUp
            ? "Successfully joined the beta waiting list"
            : title}
        </StyledH1>
        <StyledP>
          {status.signedUp ? "You should recieve an email shortly" : text}
        </StyledP>
        {status.signedUp ? (
          <SuccessImage src="checked.png" />
        ) : (
          <InputWrapper>
            <Input
              onChange={handleOnChange}
              disabled={status.loading}
              value={value}
            />
            <Button
              loading={status.loading}
              title={status.loading ? "Loading" : "Sign up"}
              onClick={handleSignUp}
            ></Button>
          </InputWrapper>
        )}
      </Wrapper>
    </Block>
  );
};

export default SignUp;
