import * as actionsTypes from './usersConstants';

const initialState = {
  users:[],
  userSeleccionado:{
    id:null,
    name:'',
    username:'',
    email:''
  },
  errorMessage: '',
  trabajando: false
};
const usableState = Object.assign({}, initialState);

export default function usersReducer(state = usableState, action) {
  let editedState;
  switch (action.type) {

    case actionsTypes.WORKING:
      editedState = Object.assign({}, state);
      editedState.trabajando = true;
      break;

    case actionsTypes.FETCH_USERS_SUCCESS:
      editedState = Object.assign({}, state);
      editedState.trabajando = false;
      editedState.users = action.data;
      break;

    case actionsTypes.FETCH_USERS_FAILURE:
      editedState = Object.assign({}, state);
      editedState.trabajando = false;
      editedState.errorMessage = action.errorMessage;
      break;

    case actionsTypes.SAVE_USER_SUCCESS:
      editedState = Object.assign({}, state);
      editedState.trabajando = false;
      break;

    case actionsTypes.SAVE_USER_FAILURE:
      editedState = Object.assign({}, state);
      editedState.trabajando = false;
      editedState.errorMessage = action.errorMessage;
      break;
    
    case actionsTypes.DELETE_USER_SUCCESS:
      editedState = Object.assign({}, state);
      editedState.trabajando = false;
      break;

    case actionsTypes.DELETE_USER_FAILURE:
      editedState = Object.assign({}, state);
      editedState.trabajando = false;
      editedState.errorMessage = action.errorMessage;
      break;
    case actionsTypes.FETCH_USER_SUCCESS:
      editedState = Object.assign({}, state);
      editedState.trabajando = false;
      editedState.userSeleccionado = action.data;
      break;

    case actionsTypes.FETCH_USER_FAILURE:
      editedState = Object.assign({}, state);
      editedState.trabajando = false;
      editedState.errorMessage = action.errorMessage;
      break;

    default:
      return state;
  }
  return editedState;
}
