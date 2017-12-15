import request from '../../shared/helpers/request';
import actionsTypes from './authConstants';

const logingIn = () => ({ type: actionsTypes.PERFORMING_LOGIN });

const loginSuccess = jwt => ({ type: actionsTypes.LOGIN_SUCCESS, jwt });

const loginFailure = errorMessage => ({ type: actionsTypes.LOGIN_FAILURE, errorMessage });

const logingOut = () => ({ type: actionsTypes.PERFORMING_LOGOUT });

const logoutFailure = message => ({ type: actionsTypes.LOGOUT_FAILURE, message });

const login = (user, url) => (dispatch) => {
  dispatch(logingIn());
  return request.post(url, user, dispatch).then((response) => {
    dispatch(loginSuccess(response.data));
  }, (error) => {
    let message;
    try {
      message = error.data.errMsg ? error.data.errMsg : 'Some error occurred...';
    } catch (e) {
      message = 'Some error occurred...';
    }
    dispatch(loginFailure(message));
    throw (error);
  });
};

const logoutSuccess = () => (dispatch) => {
  dispatch({ type: 'RESET_SLIDES' });
  dispatch({ type: actionsTypes.LOGOUT_SUCCESS });
};

const logout = () => (dispatch) => {
  dispatch(logingOut());
  return request.post('authentication/logout', {}, dispatch).then(() => {
    dispatch(logoutSuccess());
  }, (error) => {
    let message;
    try {
      message = error.response.data.error ? error.response.data.error : 'Some error ocurred...';
    } catch (e) {
      message = 'Some error ocurred...';
    }
    dispatch(logoutFailure(message));
    throw (error);
  });
};

export {
  logingIn,
  loginSuccess,
  loginFailure,
  login,
  logingOut,
  logoutSuccess,
  logoutFailure,
  logout
};
