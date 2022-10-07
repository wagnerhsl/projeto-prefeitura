import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import {CookiesProvider} from 'react-cookie';
import {AppStyle, GlobalStyle, Wrapper, color} from './styles/styles';
import Header from './components/Header';
import Main from './components/Main';
import About from './components/About';
// import Adm from './components/Adm';
import Pages from './components/Pages';
import Footer from './components/Footer';

const App = () => (
  <AppStyle style = {{background: color.cinco}}>
    <Wrapper area = "header" style = {{background: color.gradient.um(color.green, color.facebook)}}><Header maxsize = {3840}/></Wrapper>
    <Main area="main">
      <Wrapper><Pages/></Wrapper>
      <Wrapper><About/></Wrapper>
    </Main>
    <Wrapper area="footer"><Footer/></Wrapper>
  </AppStyle>
);

ReactDOM.render(
  <StrictMode>
    <CookiesProvider>
      <GlobalStyle/>
      <App/>
    </CookiesProvider>
  </StrictMode>,
  document.getElementById('app')
);

