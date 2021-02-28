import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header';
import Game from './components/Game';
import Footer from './components/Footer';


const RenderPage = () => {
  return (
    <>
      <Header />
      <Game />
      <Footer />
    </>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <RenderPage />
  </React.StrictMode>,
  document.getElementById('root')
);
