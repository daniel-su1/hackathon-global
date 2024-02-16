import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  
  colors: {
    background: {
      dark: "#141425",
      light: "#29264F",
    },
    text: {
      dark: {
        white: "#FFFFFFDE",
        gray: "#FFFFFF99",
        black: "#FFFFFF61",
      },
      light: {
        black: "#0D0D0B",
        gray: "#6D6D6D",
        white: "#BDBDBD",
      },
    },
    primary: {
      cyan: "#19FBFF",
      blue: "#1FA6FF",
      purple: "#896BFF",
      pink: "#FF2CFB",
      yellow: "#F7CE58",
      orange: "#F09343",
    },
    secondary: {
      cyan: "#009B9E",
      blue: "#1574B3",
      purple: "#8149F2",
      pink: "#BF21BD",
      yellow: "#B1923B",
      orange: "#C47937",
    },
    state: {
      error: "#FE8888",
      success: "#88FE8D",
      informative: "#88E2FE",
      warning: "#FCFE88",
    },
  },
  fonts: {
    heading: `'Outfit', sans-serif`,
    body: `'Outfit', sans-serif`,
  },
  components: {
    Text: {
      baseStyle: {
        color: "text.dark.white",
      },
    },
    // Define other components here as needed, following the same pattern.
  },
  styles: {
    global: {
      body: {
        bg: "background.dark",
        color: "text.dark.gray",
      },
      // Add other global styles here.
    },
  },
});

export default theme;
