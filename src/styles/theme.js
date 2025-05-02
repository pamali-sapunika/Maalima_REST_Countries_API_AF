import { extendTheme } from "@chakra-ui/react";
//https://wallpapers.com/wallpapers/countries-map-sky-theme-2weo1nlq1g47o441.html

const theme = extendTheme({
  styles: {
    global: {

      body: {
        fontFamily: "'Poppins', sans-serif", 
      },
    },
  },

  fonts: {
    heading: "'Poppins', sans-serif", // For headings
    body: "'Poppins', sans-serif",    // For body text
  },
});

export default theme;
