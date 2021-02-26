import React from 'react';
import cl from 'classnames';
import './style.css';
import footerRsLogo from './img/footer-rs-logo.svg';
import { GithubOutlined, CopyrightOutlined } from '@ant-design/icons';

class Footer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  };
  
  render() {
    return (
      <footer>
        <div className={cl('container')}>
          <div className={cl('footer-blocks-wrap')}>
            <div className={cl('footer-rs-logo')}>
              <a href="https://rs.school/js/" target="_blank">
                <img src={footerRsLogo} />
              </a>   
            </div>  
            <div className={cl('date-game-create')}>
              <p>
                <CopyrightOutlined /> 
                Copyright 2021
              </p>
            </div>  
            <div className={cl('footer-link-repo')}>
              <a href="https://github.com/ArteGon" target="_blank">
                <GithubOutlined />
                ArteGon
              </a> 
            </div> 
          </div>  
        </div>   
      </footer> 
    )
  }
};

export default Footer;