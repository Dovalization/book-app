import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  @font-face {
  font-family: "SFProDisplay";
  src: url("/fonts/SF-Pro-Display-Regular.otf");
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  }
  @font-face {
  font-family: "SFProDisplay";
  src: url("/fonts/SF-Pro-Display-RegularItalic.otf");
  font-style: italic;
  font-weight: 400;
  font-display: swap;
  }
  @font-face {
  font-family: "SFProDisplay";
  src: url("/fonts/SF-Pro-Display-Medium.otf");
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  }
  @font-face {
  font-family: "SFProDisplay";
  src: url("/fonts/SF-Pro-Display-Semibold.otf");
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  }
  @font-face {
  font-family: "SFProDisplay";
  src: url("/fonts/SF-Pro-Display-Bold.otf");
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  }
  @font-face {
  font-family: "SFProText";
  src: url("/fonts/SF-Pro-Text-Regular.otf");
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  }
  @font-face {
  font-family: "SFProText";
  src: url("/fonts/SF-Pro-Text-Medium.otf");
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  }
  @font-face {
  font-family: "SFProText";
  src: url("/fonts/SF-Pro-Text-Semibold.otf");
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  }



  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #FFFCF9;
  }

  a {
    text-decoration: none;
  }

`
