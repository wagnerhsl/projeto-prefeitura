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

import pages from './pages.json';
import {useEffect, useState} from 'react';


const List = () => {
  const [data, setDataState] = useState([]);
  useEffect(async () => {
    const url = "http://localhost:8080/pages";
    let req_config = new Object();
    req_config.method = 'POST';
    req_config.headers = {'Content-Type': 'application/json', 'Accept': 'application/json'};
    const res = await fetch(url, req_config);
    const datares = await res.json();
    setDataState(datares);  
  }, []);
  const items = data.map(item => <li>{item.name}</li>);

  return <ul>
    <p>{items}</p>
  </ul>;
}

const App = () => (
  <AppStyle style = {{background: color.cinco}}>
    <Wrapper area = "header" style = {{background: color.gradient.um(color.green, color.facebook)}}><Header maxsize = {3840}/></Wrapper>
    <Main area="main">
      <Wrapper><List/></Wrapper>
      <Wrapper><Pages {...{pages}}/></Wrapper>
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

