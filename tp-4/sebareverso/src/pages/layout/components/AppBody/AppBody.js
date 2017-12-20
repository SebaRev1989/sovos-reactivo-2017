import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from '../../../home/HomePage';
import PostsPage from '../../../posts/PostsPage';
import UsersPage from '../../../users/UsersPage';

const AppBody = () => (
  <div>
    <Route exact path="/" component={ HomePage } />
    <Route path="/home" component={ HomePage } />
    <Route exact path="/users" component={ UsersPage } />
    <Route exact path="/posts" component={ PostsPage } />
  </div>
);

export default AppBody;
