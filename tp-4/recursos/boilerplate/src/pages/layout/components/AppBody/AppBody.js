import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from '../../../home/HomePage';
import PostsPage from '../../../posts/PostsPage';

const AppBody = () => (
  <div>
    <Route exact path="/" component={ HomePage } />
    <Route path="/home" component={ HomePage } />
    <Route exact path="/posts" component={ PostsPage } />
  </div>
);

export default AppBody;
