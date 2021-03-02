import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header';
import Game from './components/Game';
import Footer from './components/Footer';


class RenderPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isBlackTheme : false
    };
  };

  setBlackTheme = value => {
    document.body.classList.toggle('black-theme');
    this.setState({ isBlackTheme: value });
  };

  render() {
    const {isBlackTheme} = this.state;
    
    return (
      <>
        <Header 
          setBlackTheme = {this.setBlackTheme}
        />
        <Game />
        <Footer 
          isBlackTheme = {isBlackTheme}
        />
      </>
    );
  };
};

ReactDOM.render(
  <React.StrictMode>
    <RenderPage />
  </React.StrictMode>,
  document.getElementById('root')
);
