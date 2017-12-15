import actionTypes from './contextConstants';

const initialStore = {
  contexts: [],
  selectedContext: { type: 'default', taxYear: '' }
};

export default function sidebarReducer(state = initialStore, action) {
  let editedState;

  const duplicateState = () => (Object.assign({}, state));

  switch (action.type) {
    case actionTypes.FETCH_CONTEXTS_SUCCESS:
      editedState = duplicateState();
      editedState.contexts = action.contexts;
      break;
    case actionTypes.RESET_CONTEXTS_SUCCESS:
      editedState = duplicateState();
      editedState.contexts = [];
      break;
    case actionTypes.SET_CONTEXT_SUCCESS:
      editedState = duplicateState();
      editedState.selectedContext = Object.assign({}, action.context);
      break;
    case actionTypes.LOGOUT_SUCCESS:
      editedState = duplicateState();
      editedState = initialStore;
      break;
    default:
      return state;
  }
  return editedState;
}
