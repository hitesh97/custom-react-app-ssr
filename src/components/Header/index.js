import React, { Component } from 'react';
import { Layout } from 'antd';

//styles
import './header.scss';

class HeaderView extends Component {
  render() {
    const { Header } = Layout;
    return <Header className="headerView">header</Header>;
  }
}

export default HeaderView;
