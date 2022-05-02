import { createSection } from "./molecules/Section";

export const content = {
  site: {
    name: "slist",
    logoUrl: "logo.png",
  },
  analytics: {
    measurement_ids: {
      dev: "G-H6TC95BHS5",
      prod: "not set yet",
    },
  },
  theme: {
    colours: {
      primary: "#4AA79E",
      secondary: "#F0E4BC",
      text: "#434651",
    },
    fonts: {
      heading: {
        fontName: `"Roboto Condensed", sans-serif`,
        link: "https://fonts.googleapis.com/css2?family=Roboto&family=Roboto+Condensed:ital,wght@0,700;1,700&family=Roboto+Mono:wght@700&display=swap",
      },
      default: {
        fontName: `"Roboto", sans-serif`,
        link: "https://fonts.googleapis.com/css2?family=Roboto&family=Roboto+Mono:wght@700&display=swap",
      },
    },
  },
  // landingTitle: "A simple yet powerful task manager with gamification built in",
  landingTitle: "Gamification for personal development & productivity",
  landingImageUrl: "landing.png",
  landingText:
    "Quantify and gamify your productivity with a powerful task manager focused on increasing efficiency and productivity",
  sections: [
    createSection(
      "Simple but powerful interface",
      "Speed is important, you can add tasks and projects with a few taps of the keyboard. Projects, tags, smartlist, infinite task nesting are included by default",
      "https://images.unsplash.com/photo-1650608396908-d60f4eea95c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
    ),
    createSection(
      "Robust gamification capabilities",
      "Multiple game modes (including beat the clock), point rewards, real-time skill progress and increasing difficulties for enhanced motivation and energy",
      "https://images.unsplash.com/photo-1650608396908-d60f4eea95c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
    ),
    createSection(
      "In-depth analytics and progress tracking",
      "You cant manage what you cant measure, our gamification model will give you a simple measure of how productive you were in any given day and how it compares to where you were at a month ago ",
      "https://images.unsplash.com/photo-1650608396908-d60f4eea95c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
    ),
    createSection(
      "Reflect, grow and change",
      "Reflect on tasks, projects and days for incremental improvement. Goals and focuses change and your productivity system should accommodate this",
      "https://images.unsplash.com/photo-1650608396908-d60f4eea95c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
    ),
  ],

  signUpTitle: "Free for 14 days, $5 per month after that",
  signUpText: "Sign up to our beta and see how this product helps you",
};
