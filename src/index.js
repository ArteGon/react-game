import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header';
import DifficultyLevel from './components/DifficultyLevel';
import Footer from './components/Footer';


const RenderPage = () => {
  return (
    <>
      <Header />
      <DifficultyLevel />
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
