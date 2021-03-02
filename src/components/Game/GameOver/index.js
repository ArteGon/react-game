import React from 'react';
import cl from 'classnames';
import './style.css';

class GameOver extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  };

  render() {
    return (
      <section className={cl('end-game')}>
        <div className={cl('container')}>
          <div className={cl('title')}>
            <h2>Вы проиграли :(</h2>
          </div>  
        </div>
      </section>
    )
  }
};

export default GameOver;