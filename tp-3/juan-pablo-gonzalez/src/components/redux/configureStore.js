import { createStore, applyMiddleware, compose } from 'redux';
import { responsiveStoreEnhancer } from 'redux-responsive';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './rootReducer';

export default function configureStore() {
  const getMiddlewares = () => {
    let middleware = [thunk];
    if (process.env.NODE_ENV === 'development') {
      const logger = createLogger({
        collapsed: true
      });
      middleware = [...middleware, logger];
      const composeWithDevTools = require('redux-devtools-extension').composeWithDevTools; // eslint-disable-line global-require
      return composeWithDevTools(applyMiddleware(...middleware));
    }
    return applyMiddleware(...middleware);
  };
  return createStore(
    rootReducer, compose(responsiveStoreEnhancer, getMiddlewares())
  );
}
