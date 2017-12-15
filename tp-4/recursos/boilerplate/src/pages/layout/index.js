import React from 'react';
import { Layout } from 'antd';
import { withRouter } from 'react-router-dom';
import SideBar from './components/AppSideBar/AppSideBar';
import AppBody from './components/AppBody/AppBody';

const App = () => (
  <Layout>
    <SideBar />
    <AppBody />
  </Layout>
);

export default withRouter(App);