import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import Landing from "./organisms/Landing";
import Nav from "./organisms/Nav";
import SignUp from "./organisms/SignUp";
import Features from "./organisms/Features";
import ReactGA from "react-ga4";
import { useLayoutEffect } from "react";
import { getUserId } from "./utils";
import { content } from "./content";
import { useState } from "react";

const MEASUREMENT_ID =
  process.env.NODE_ENV === "development"
    ? content.analytics.measurement_ids.dev
    : content.analytics.measurement_ids.prod;

const theme = {
  primary: content.theme.colours.primary,
  secondary: content.theme.colours.secondary,
  text: content.theme.colours.text,
  radius: "7px",
  headingFont: content.theme.fonts.heading.fontName,
  defaultFont: content.theme.fonts.default.fontName,
};

const GlobalStyle = createGlobalStyle`
  @import url('${content.theme.fonts.heading.link}');
  @import url('${content.theme.fonts.default.link}');
  
  html {
    overflow-x: hidden;
    scroll-behavior: smooth;
  }
`;

const AppWrap = styled.div`
  padding: 10px 20px 0 10px;
  max-width: 1150px;
  margin: auto;
`;

function App() {
  const [statefulContent, setStatefulContent] = useState(content);
  useLayoutEffect(() => {
    (async () => {
      /** */
      const url = `https://x4k26suv.directus.app/items/images/${content.directusId}`;
      const req = await fetch(url);
      const res = await req.json();
      const { hero_image, feat_1, feat_2, feat_3, feat_4 } = res.data;
      const fetchedImages = [feat_1, feat_2, feat_3, feat_4];
      const newState = { ...statefulContent };

      if (hero_image) {
        newState.landingImageUrl = hero_image;
      }

      newState.sections = newState.sections.map((section, i) => {
        if (fetchedImages[i]) {
          return { ...section, imageUrl: fetchedImages[i] };
        }

        return section;
      });

      setStatefulContent(newState);

      /** */
      const userId = getUserId();
      ReactGA.initialize(MEASUREMENT_ID, {
        gaOptions: {
          userId,
        },
      });

      ReactGA.send("pageview");
    })();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <AppWrap>
        <GlobalStyle />
        <Nav logoUrl={content.site.logoUrl} />
        <Landing
          title={content.landingTitle}
          text={content.landingText}
          imageUrl={statefulContent.landingImageUrl}
        />
        <Features sections={statefulContent.sections} />
        <SignUp title={content.signUpTitle} text={content.signUpText} />
      </AppWrap>
    </ThemeProvider>
  );
}

export default App;
