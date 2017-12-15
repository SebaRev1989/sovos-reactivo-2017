import sharedActions from '../../shared/constants/SharedConstants';

const actionTypes = {
  PERFORMING_LOGIN: 'PERFORMING_LOGIN',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAILURE: 'LOGIN_FAILURE',
  PERFORMING_LOGOUT: 'PERFORMING_LOGOUT',
  LOGOUT_FAILURE: 'LOGOUT_FAILURE'
};

export default { ...actionTypes, ...sharedActions };
