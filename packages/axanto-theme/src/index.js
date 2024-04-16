import Theme from "./components";
import image from "@frontity/html2react/processors/image";
// import { theme } from "@chakra-ui/react";

const chakraTheme = {
  name: "axanto-theme",
  roots: {
    theme: Theme
  },
  state: {
    theme: {
      logo: "Frontity",
      showBackgroundPattern: true,
      showSocialLinks: true,
      socialLinks: [],
      menu: [],
      featured: {
        showOnArchive: false,
        showOnPost: true
      },
      isMobileMenuOpen: false,
      colors: {
        primary: {
          50: "#e9f5f2",
          100: "#d4dcd9",
          200: "#bbc3be",
          300: "#a1aba5",
          400: "#87938b",
          500: "#6d7972",
          600: "#555f58",
          700: "#323c34",
          800: "#232924",
          900: "#272727"
        },
        accent: {
          50: "#ede4d3",
          100: "#fbe3b2",
          200: "#f6d086",
          300: "#f1be58",
          400: "#eca419",
          500: "#d49212",
          600: "#a5710b",
          700: "#775105",
          800: "#483100",
          900: "#1d0f00"
        }
      },
      isSearchModalOpen: false,
      autoPreFetch: "all"
    }
  },
  actions: {
    theme: {
      openMobileMenu: ({ state }) => {
        state.theme.isMobileMenuOpen = true;
      },
      closeMobileMenu: ({ state }) => {
        state.theme.isMobileMenuOpen = false;
      },
    }
  },
  libraries: {
    html2react: {
      processors: [image]
    }
  }
};

export default chakraTheme;
