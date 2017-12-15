import * as actionsTypes from './postsConstants';

const initialState = {
  posts:[],
  postSeleccionado:{
    id:null,
    userId:null,
    title:'',
    body:''
  },
  errorMessage: '',
  trabajando: false
};
const usableState = Object.assign({}, initialState);

export default function postsReducer(state = usableState, action) {
  let editedState;
  switch (action.type) {

    case actionsTypes.WORKING:
      editedState = Object.assign({}, state);
      editedState.trabajando = true;
      break;

    case actionsTypes.FETCH_POSTS_SUCCESS:
      editedState = Object.assign({}, state);
      editedState.trabajando = false;
      editedState.posts = action.data;
      break;

    case actionsTypes.FETCH_POSTS_FAILURE:
      editedState = Object.assign({}, state);
      editedState.trabajando = false;
      editedState.errorMessage = action.errorMessage;
      break;

    case actionsTypes.SAVE_POST_SUCCESS:
      editedState = Object.assign({}, state);
      editedState.trabajando = false;
      break;

    case actionsTypes.SAVE_POST_FAILURE:
      editedState = Object.assign({}, state);
      editedState.trabajando = false;
      editedState.errorMessage = action.errorMessage;
      break;
    
    case actionsTypes.DELETE_POST_SUCCESS:
      editedState = Object.assign({}, state);
      editedState.trabajando = false;
      break;

    case actionsTypes.DELETE_POST_FAILURE:
      editedState = Object.assign({}, state);
      editedState.trabajando = false;
      editedState.errorMessage = action.errorMessage;
      break;
    case actionsTypes.FETCH_POST_SUCCESS:
      editedState = Object.assign({}, state);
      editedState.trabajando = false;
      editedState.postSeleccionado = action.data;
      break;

    case actionsTypes.FETCH_POST_FAILURE:
      editedState = Object.assign({}, state);
      editedState.trabajando = false;
      editedState.errorMessage = action.errorMessage;
      break;

    default:
      return state;
  }
  return editedState;
}
