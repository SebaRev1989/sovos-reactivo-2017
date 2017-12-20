import { combineReducers } from 'redux';

import posts from './posts/postsReducer';
import users from './users/usersReducer';

const rootReducer = combineReducers({
  posts,
  users
});

export default rootReducer;
