import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';
import logo from '../../logo.svg';

//styles
import './sider.scss';
import './sider.styl';

class SiderView extends Component {
  state = {
    collapsed: false
  };

  toggleCollapsed = () => {
    console.log('collpasing!!');
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    const { Sider } = Layout;
    return (
      <Sider
        trigger={null}
        collapsedWidth="80"
        collapsible
        collapsed={this.state.collapsed}
      >
        <img
          src={logo}
          className="App-logo"
          alt="logo"
          onClick={this.toggleCollapsed}
        />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">
            <Link to="/">
              <Icon type="user" />
              <span className="nav-text">Home</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/help">
              <Icon type="video-camera" />
              <span className="nav-text">Help</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/about">
              <Icon type="upload" />
              <span className="nav-text">About</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link to="/not_exist">
              <Icon type="user" />
              <span className="nav-text">Nav 4</span>
            </Link>
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}

export default SiderView;
