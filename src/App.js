import React, { Component } from 'react';
import logo from './logo.svg';

//components
import Emoji from './Emoji';

//styles
import './App.scss';
import './App.less';
import './App.styl';

//modules
import cssStyles from './First.module.css';

import Routes from './routes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className={cssStyles.header}>
          <img src={logo} className="App-logo" alt="logo" />
          <h2 className="App-title">
            <Emoji label="danger" emoji="☢" />
            <span> custom-react-scripts </span>
            <Emoji label="danger" emoji="☢" />
          </h2>
          <div className="App-subtitle">
            allow custom config for create-react-app without ejecting
          </div>
        </div>
        <Routes />
      </div>
    );
  }
}

export default App;
