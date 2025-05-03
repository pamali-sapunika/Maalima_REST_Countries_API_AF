import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {

      body: {
        fontFamily: "'Poppins', sans-serif", 
      },
    },
  },

  fonts: {
    heading: "'Poppins', sans-serif", 
    body: "'Poppins', sans-serif",
  },
});

export default theme;
