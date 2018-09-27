import React, { Component } from 'react';
import Page from '../../components/page';
import { DatePicker } from 'antd';

// import logo from '../../assets/logo.jpg';
import sassStyles from '../../Second.module.scss';
import lessStyles from '../../Third.module.less';
import stylusStyles from '../../Fourth.module.styl';

class Help extends Component {
  render() {
    return (
      <Page id="help">
        <div className={stylusStyles.description}>
          <p>Here's our Help Page.</p>
          <div className={sassStyles.command}>
            <code>
              create-react-app my-app --scripts-version custom-react-scripts
            </code>
            <DatePicker />
          </div>

          <p>
            If you want to enable/disable certain features just modify the
            <b> .env</b> file in the root directory of the project.
          </p>

          <b> Styling </b>
          <ul className="configs style-configs">
            <li>
              <code>REACT_APP_SASS=true</code>
              <span>- Enable SASS</span>
            </li>
            <li>
              <code>REACT_APP_LESS=true</code>
              <span>- Enable LESS</span>
            </li>
            <li>
              <code>REACT_APP_STYLUS=true</code>
              <span>- Enable Stylus</span>
            </li>
            <li>
              <code>REACT_APP_CSS_MODULES=true</code>
              <span>- Enable CSS modules </span>
            </li>
            <li>
              <code>REACT_APP_SASS_MODULES=true</code>
              <span>- Enable Sass modules </span>
            </li>
            <li>
              <code>REACT_APP_SASS_MODULES=true</code>
              <span>- Enable Stylus modules </span>
            </li>
            <li>
              <code>REACT_APP_SASS_MODULES=true</code>
              <span>- Enable Less modules </span>
            </li>
          </ul>

          <b>Babel</b>

          <ul className="configs babel-configs">
            <li>
              <code>REACT_APP_BABEL_STAGE_0=true</code>
              <span>- Enable stage-0 preset</span>
            </li>
            <li>
              <code>REACT_APP_DECORATORS=true</code>
              <span>- Enable usage of decorators</span>
            </li>
          </ul>

          <b>Other</b>

          <ul className="configs babel-configs">
            <li>
              <code>REACT_APP_WEBPACK_DASHBOARD=true</code>
              <span>
                - Enables connection to{' '}
                <a
                  target="_blank"
                  ref="noopener noreferrer"
                  href="https://github.com/FormidableLabs/electron-webpack-dashboard"
                >
                  webpack-dashboard
                </a>{' '}
                (must be installed)
              </span>
            </li>
          </ul>

          <br />
          <br />
          <a
            target="_blank"
            rel="noopener noreferrer"
            className={lessStyles.readmeLink}
            href="https://github.com/kitze/create-react-app/tree/master/packages/react-scripts"
          >
            Link to full README.md
          </a>
        </div>
      </Page>
    );
  }
}

export default Help;
