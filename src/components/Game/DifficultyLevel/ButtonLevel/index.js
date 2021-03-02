import React from 'react';
import cl from 'classnames';
import './style.css';

class ButtonLevel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  };

  render() {
    return (
      <button
        onClick = {() => this.props.selectButton(this.props.cardList, this.props.btnLevel, this.props.isHardcoreMode)}
        className = {cl('btn', this.props.btnLevel)}
      >
        {this.props.btnText}
      </button>  
    );
  };
};

export default ButtonLevel;