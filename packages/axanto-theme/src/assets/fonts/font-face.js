import React from "react";
import { Global, css } from "frontity";

// space grotesk
import spaceGroteskRegular from './space-grotesk/SpaceGrotesk-Regular.woff2'
import spaceGroteskBold from './space-grotesk/SpaceGrotesk-Bold.woff2'
import spaceGroteskLight from './space-grotesk/SpaceGrotesk-Light.woff2'
import spaceGroteskMedium from './space-grotesk/SpaceGrotesk-Medium.woff2'
// import spaceGroteskSemiBold from './space-grotesk/SpaceGrotesk-SemiBold.woff2'

// satoshi
import satoshiLight from './satoshi/Satoshi-Light.woff'
import satoshiLightItalic from './satoshi/Satoshi-LightItalic.woff'
import satoshiRegular from './satoshi/Satoshi-Regular.woff'
import satoshiRegularItalic from './satoshi/Satoshi-Italic.woff'
import satoshiBold from './satoshi/Satoshi-Bold.woff'
import satoshiBoldItalic from './satoshi/Satoshi-BoldItalic.woff'
import satoshiMedium from './satoshi/Satoshi-Medium.woff'
import satoshiMediumItalic from './satoshi/Satoshi-MediumItalic.woff'
import satoshiBlack from './satoshi/Satoshi-Black.woff'
import satoshiBlackItalic from './satoshi/Satoshi-BlackItalic.woff'


// nexa
import NexaLight from './nexa/Nexa-Light.woff'
import NexaLightItalic from './nexa/Nexa-LightItalic.woff'
import NexaThin from './nexa/Nexa-Thin.woff'
import NexaThinItalic from './nexa/Nexa-ThinItalic.woff'
import NexaRegular from './nexa/Nexa-Regular.woff'
import NexaRegularItalic from './nexa/Nexa-Italic.woff'
import NexaBold from './nexa/Nexa-Bold.woff'
import NexaBoldItalic from './nexa/Nexa-BoldItalic.woff'
import NexaBook from './nexa/Nexa-Book.woff'
import NexaBookItalic from './nexa/Nexa-BookItalic.woff'
import NexaHeavy from './nexa/Nexa-Heavy.woff'
import NexaHeavyItalic from './nexa/Nexa-HeavyItalic.woff'
import NexaBlack from './nexa/Nexa-Black.woff'
import NexaBlackItalic from './nexa/Nexa-BlackItalic.woff'


const FontFace = () => (
  <Global
    styles={css`
      @font-face {
        font-family: "Space Grotesk";
        src:  url(${spaceGroteskBold}) format("woff2");
        font-weight: 700;
        font-display: swap;
      }
      @font-face {
        font-family: "Space Grotesk";
        src:  url(${spaceGroteskRegular}) format("woff2");
        font-weight: 400;
        font-display: swap;
      }
      @font-face {
        font-family: "Space Grotesk";
        src:  url(${spaceGroteskMedium}) format("woff2");
        font-weight: 500;
        font-display: swap;
      }
      @font-face {
        font-family: "Space Grotesk";
        src:  url(${spaceGroteskLight}) format("woff2");
        font-weight: 300;
        font-display: swap;
      }


      @font-face {
        font-family: "Satoshi";
        src:  url(${satoshiLight}) format("woff");
        font-weight: 300;
        font-display: swap;
      }
      @font-face {
        font-family: "Satoshi";
        src:  url(${satoshiLightItalic}) format("woff");
        font-weight: 300;
        font-style: italic;
        font-display: swap;
      }
      @font-face {
        font-family: "Satoshi";
        src:  url(${satoshiRegular}) format("woff");
        font-weight: 400;
        font-display: swap;
      }
      @font-face {
        font-family: "Satoshi";
        src:  url(${satoshiRegularItalic}) format("woff");
        font-weight: 400;
        font-style: italic;
        font-display: swap;
      }
      @font-face {
        font-family: "Satoshi";
        src:  url(${satoshiMedium}) format("woff");
        font-weight: 500;
        font-display: swap;
      }
      @font-face {
        font-family: "Satoshi";
        src:  url(${satoshiMediumItalic}) format("woff");
        font-weight: 500;
        font-style: italic;
        font-display: swap;
      }
      @font-face {
        font-family: "Satoshi";
        src:  url(${satoshiBold}) format("woff");
        font-weight: 700;
        font-display: swap;
      }
      @font-face {
        font-family: "Satoshi";
        src:  url(${satoshiBoldItalic}) format("woff");
        font-weight: 700;
        font-style: italic;
        font-display: swap;
      }
      @font-face {
        font-family: "Satoshi";
        src:  url(${satoshiBlack}) format("woff");
        font-weight: 900;
        font-display: swap;
      }
      @font-face {
        font-family: "Satoshi";
        src:  url(${satoshiBlackItalic}) format("woff");
        font-weight: 900;
        font-style: italic;
        font-display: swap;
      }



      @font-face {
        font-family: "Nexa";
        src:  url(${NexaThin}) format("woff");
        font-weight: 100;
        font-display: swap;
      }
      @font-face {
        font-family: "Nexa";
        src:  url(${NexaThinItalic}) format("woff");
        font-weight: 100;
        font-style: italic;
        font-display: swap;
      }
      @font-face {
        font-family: "Nexa";
        src:  url(${NexaLight}) format("woff");
        font-weight: 300;
        font-display: swap;
      }
      @font-face {
        font-family: "Nexa";
        src:  url(${NexaLightItalic}) format("woff");
        font-weight: 300;
        font-style: italic;
        font-display: swap;
      }
      @font-face {
        font-family: "Nexa";
        src:  url(${NexaRegular}) format("woff");
        font-weight: 400;
        font-display: swap;
      }
      @font-face {
        font-family: "Nexa";
        src:  url(${NexaRegularItalic}) format("woff");
        font-weight: 400;
        font-style: italic;
        font-display: swap;
      }
      @font-face {
        font-family: "Nexa";
        src:  url(${NexaBook}) format("woff");
        font-weight: 500;
        font-display: swap;
      }
      @font-face {
        font-family: "Nexa";
        src:  url(${NexaBookItalic}) format("woff");
        font-weight: 500;
        font-style: italic;
        font-display: swap;
      }
      @font-face {
        font-family: "Nexa";
        src:  url(${NexaBold}) format("woff");
        font-weight: 700;
        font-display: swap;
      }
      @font-face {
        font-family: "Nexa";
        src:  url(${NexaBoldItalic}) format("woff");
        font-weight: 700;
        font-style: italic;
        font-display: swap;
      }
      @font-face {
        font-family: "Nexa";
        src:  url(${NexaHeavy}) format("woff");
        font-weight: 800;
        font-display: swap;
      }
      @font-face {
        font-family: "Nexa";
        src:  url(${NexaHeavyItalic}) format("woff");
        font-weight: 800;
        font-style: italic;
        font-display: swap;
      }
      @font-face {
        font-family: "Nexa";
        src:  url(${NexaBlack}) format("woff");
        font-weight: 900;
        font-display: swap;
      }
      @font-face {
        font-family: "Nexa";
        src:  url(${NexaBlackItalic}) format("woff");
        font-weight: 900;
        font-style: italic;
        font-display: swap;
      }
      .text-outline {
        -webkit-text-fill-color: transparent; /* Will override color (regardless of order) */
        -webkit-text-stroke: 5px white;
     }
    `}
  />
);

export default FontFace;
