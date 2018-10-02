import React, { Component } from 'react';

import { Layout } from 'antd';

//components
// import Emoji from './Emoji';

//styles
import './App.scss';
import './App.less';
import './App.styl';

//modules
// import cssStyles from './First.module.css';

import Routes from './routes';

import HeaderView from './components/Header';
import FooterView from './components/Footer';
import SiderView from './components/Sider';

class App extends Component {
  render() {
    const { Header, Content, Footer, Sider } = Layout;
    return (
      <Layout className="App">
        <SiderView />
        <Layout style={{ height: '100vh' }}>
          <HeaderView />
          <Content className="appContent">
            <Routes />
          </Content>
          <FooterView />
        </Layout>
      </Layout>
    );
  }
}

export default App;
