import { createGlobalStyle } from 'styled-components';

// import font from '../assets/fonts/frenchfries.woff';
import font from '../assets/fonts/GatsbyflfBold-owMo.ttf';
import fonts from '../assets/fonts/AtlasRegular.ttf';

const Typography = createGlobalStyle`
  @font-face {
    font-family: GatsbyflfBold;
    src: url(${font});
  }
  @font-face {
    font-family: AtlasRegular;
    src: url(${fonts});
  }
  html {
    font-family: GatsbyflfBold, AtlasRegular, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: var(--black);
  }
  p, li {
    letter-spacing: 0.5px;
  }
  h1,h2,h3,h4,h5,h6 {
    font-weight: normal;
    margin: 0;
  }
  a {
    color: var(--black);
    text-decoration-color: var(--black);
    /* Chrome renders this weird with this font, so we turn it off */
    text-decoration-skip-ink: none;
  }
  mark, .mark {
    background: var(--gold);
    color: white;
    border: solid 3px white;
    padding: 8px;
    margin: 0;
    display: inline;
    line-height: 1;
  }

  .center {
    text-align: center;
  }

  .tilt {
    transform: rotate(-2deg);
  }
`;

export default Typography;
