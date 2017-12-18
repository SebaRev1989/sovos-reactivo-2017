import React from 'react';
import { Layout, Icon } from 'antd';
const { Header, Content } = Layout;

const HomePage = () => (
  <Layout>
    <Header style={{ background: '#fff', padding: 0 }}>
      <Icon
        className="trigger"
      />
    </Header>
    <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
      Content
    </Content>
  </Layout>
);

export default HomePage;
