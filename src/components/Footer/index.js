import React, { Component } from 'react';
import { Layout } from 'antd';

//styles
import './footer.scss';

class FooterView extends Component {
  render() {
    const { Footer } = Layout;
    return <Footer className="footerView">Footer</Footer>;
  }
}

export default FooterView;
