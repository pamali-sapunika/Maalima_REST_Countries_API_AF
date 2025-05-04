import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        fontFamily: "'Poppins', sans-serif", // Using Poppins for the body text
      },
    },
  },

  fonts: {
    heading: "'Poppins', sans-serif", // Using Poppins for headings
    body: "'Poppins', sans-serif", // Using Poppins for body text
  },

  colors: {
    light: {
      primary: "#3182ce", // Light blue (Primary color)
      secondary: "#63b3ed", // Lighter blue
      text: "#ffffff", // White text for light mode
      textDark: "#333333", // Dark text for dark mode
      background: "#ffffff", // White background for light mode
      backgroundDark: "#1a202c", // Dark background for dark mode
      hover: "#2b6cb0", // Darker blue on hover for light mode
    },
    dark: {
      primary: "#63b3ed", // Lighter blue (Primary color for dark mode)
      secondary: "#3182ce", // Blue for secondary
      text: "#000000", // Dark text for light mode
      textDark: "#ffffff", // White text for dark mode
      background: "#1a202c", // Dark background for dark mode
      backgroundDark: "#2d3748", // Darker background for dark mode
      hover: "#4299e1", // Lighter blue on hover for dark mode
    },
  },

  components: {
    Button: {
      baseStyle: {
        fontWeight: "bold", // Bold text for buttons
        borderRadius: "full", // Rounded button corners
      },
      variants: {
        solid: {
          bg: "primary", // Button background color
          color: "text", // Button text color
          _hover: {
            bg: "hover", // Hover effect
            color: "textDark", // Change text color on hover
          },
        },
      },
    },

    Text: {
      baseStyle: {
        fontSize: "md", // Set default text size
      },
    },
  },

  config: {
    initialColorMode: "light", // Set the initial color mode
    useSystemColorMode: false, // Don't rely on system color mode
  },
});

export default theme;
