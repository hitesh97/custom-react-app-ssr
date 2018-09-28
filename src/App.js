import React, { Component } from 'react';
import logo from './logo.svg';

import { Layout, Menu, Icon } from 'antd';

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
    const { Header, Content, Footer, Sider } = Layout;
    return (
      <Layout className="App">
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={broken => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <img src={logo} className="App-logo" alt="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
            <Menu.Item key="1">
              <Icon type="user" />
              <span className="nav-text">nav 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="video-camera" />
              <span className="nav-text">nav 2</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="upload" />
              <span className="nav-text">nav 3</span>
            </Menu.Item>
            <Menu.Item key="4">
              <Icon type="user" />
              <span className="nav-text">nav 4</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header>header</Header>
          <Content className="appContent">
            <div>
              <Routes />
            </div>
          </Content>
          <Footer>header</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default App;
