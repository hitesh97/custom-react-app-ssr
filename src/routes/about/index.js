import React, { Component } from 'react';
import Page from '../../components/page';
import { DatePicker } from 'antd';

// import logo from '../../assets/logo.jpg';
import sassStyles from '../../Second.module.scss';
import lessStyles from '../../Third.module.less';
import stylusStyles from '../../Fourth.module.styl';

class About extends Component {
  render() {
    return (
      <Page id="About" tags="This is tag for About Page !!!">
        <div className={stylusStyles.description}>
          <h1>About Us</h1>
        </div>
        <div>
          <p>
            The Microlease group is a total solutions provider for electronic
            Test Equipment, helping users deploy equipment when and where needed
            in the most cost-effective way.{' '}
          </p>
          <br />{' '}
          <p>
            {' '}
            We help users minimise the cost of acquiring the right equipment at
            the right time, with applications advice and options including
            rental, rent-to-buy, leasing, finance or purchase.{' '}
          </p>
          <br />
          <p>
            We assist them in optimising equipment with asset management
            services and maximising return after use with trade-in and disposal
            options.{' '}
          </p>
          <br />{' '}
          <p>
            All of this saves time and money at every stage of the equipment’s
            lifecycle to make our customers become the most efficient users of
            Test Equipment and respond to their continuously evolving market
            needs.
          </p>
        </div>
      </Page>
    );
  }
}

export default About;
