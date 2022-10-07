import styled, {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
`;

const size = {
  mini: 2,
  small: 4,
  big: 6,
  large: 10
}

const color = {
  zero: "#737b8b",
  um: "rgb(29 38 54)",
  dois: "rgb(23 151 86)",
  tres: "rgb(10 20 40)",
  quatro: "#293852",
  cinco: "rgb(0 10 26)",
  seis: "rgb(45 67 112)",
  green: "#00b975",
  white: "rgb(250 250 255)",
  facebook: "hsl(214deg 89% 52%)",
  instagram: "hsl(332deg 89% 52%)",
  light: {
    white: "rgba(255, 255, 255, 0.7)"
  },
  red: 'rgb(255, 0, 106)',
  gradient: {
    um: (c1, c2) => (`linear-gradient(90deg, ${c1} 40%, ${c2} 100%)`)
  }
}

const font = {
  Roboto: "'Roboto Mono', monospace",
  Baloo: "'Baloo Bhaijaan 2', cursive",
  Secular: "'Secular One', sans-serif",
  Biz: "'BIZ UDPMincho', serif",
  Oswald: "'Oswald', sans-serif",
  Source: "'Source Sans Pro', sans-serif",
  Kantumruy: "'Kantumruy Pro', sans-serif"
};

const Wrapper = styled.div`
  grid-area: ${props => props.area ? props.area : ""};
  width: 100%;
  > section { 
    display: block;
    margin: 0px auto !important;
  }
`;

const AppStyle = styled.div`
  * {
    border: none;
    border-radius: 0px;
    box-shadow: none;
    padding: 0px;
    text-decoration: none;
  }

  ul {
    list-style-type: none;
  }


  button {
    background: transparent;
    display: flex;
  }

  :target {
    scroll-margin-top: .8em;
  }

  h2 {
    font-family: ${font.Kantumruy};
    font-size: 23px;
    word-spacing: 1px;
    margin-bottom: 40px !important;
  }

  h3 {
    font-family: ${font.Kantumruy};
    font-size: 20px;
    font-weight: bolder;
    margin-bottom: 30px;
    text-align: left;
  }

  background: ${props => props.bg};
  box-sizing: border-box;
  min-height: 100vh;
  display: grid;
  grid-template-areas: 'header' 'main' 'footer';
  grid-template-rows: min-content auto min-content;
`;

const breakpoints = [620, 900, 800, 1000, 720, 1150, 950, 310];
const mq =  breakpoints.map(bp => `@media (max-width: ${bp}px)`);


export {styled, GlobalStyle, Wrapper, AppStyle, size, color, font, mq};