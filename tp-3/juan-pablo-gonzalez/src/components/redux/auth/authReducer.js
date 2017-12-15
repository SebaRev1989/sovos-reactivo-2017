import actionsTypes from './authConstants';
import AuthenticationHelper from '../../shared/helpers/authenticationHelper';

const initialState = {
  user: {
    Username: '',
    Domain: '',
    Schema: '',
    Seghash: '',
    ClientName: '',
    LiteUsername: '',
    iat: 0,
    logged: false,
  },
  errorMessage: '',
  logingIn: false
};
const usableState = Object.assign({}, initialState);

if (AuthenticationHelper.isJwtTokenStored()) {
  usableState.user = AuthenticationHelper.getDecodedToken();
  usableState.user.logged = true;
}

export default function loginReducer(state = usableState, action) {
  let editedState;
  switch (action.type) {

    case actionsTypes.PERFORMING_LOGIN:
      editedState = Object.assign({}, state);
      editedState.logingIn = true;
      editedState.user.logged = false;
      break;

    case actionsTypes.LOGIN_SUCCESS:
      editedState = Object.assign({}, state);
      AuthenticationHelper.storeJwtToken(action.jwt);
      editedState.user = AuthenticationHelper.getDecodedToken();
      editedState.logingIn = false;
      editedState.user.logged = true;
      break;

    case actionsTypes.LOGIN_FAILURE:
      editedState = Object.assign({}, state);
      editedState.user.logged = false;
      editedState.logingIn = false;
      editedState.errorMessage = action.errorMessage;
      break;

    case actionsTypes.PERFORMING_LOGOUT:
      editedState = Object.assign({}, state);
      editedState.logingIn = true;
      break;

    case actionsTypes.LOGOUT_SUCCESS:
      AuthenticationHelper.removeJwtToken();
      editedState = Object.assign({}, initialState);
      editedState.logingIn = false;
      editedState.user.logged = false;
      break;

    case actionsTypes.LOGOUT_FAILURE:
      editedState = Object.assign({}, state);
      editedState.logingIn = false;
      break;

    default:
      return state;
  }
  return editedState;
}
