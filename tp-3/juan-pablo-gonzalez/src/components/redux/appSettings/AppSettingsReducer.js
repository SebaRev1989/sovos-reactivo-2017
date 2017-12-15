import actionTypes from './AppSettingsConstants';

const initialStore = {
  updatingTableOptions: false,
};

export default function importHistoryGridReducer(state = initialStore, action) {
  let editedState;
  const duplicateState = () => (Object.assign({}, state));

  switch (action.type) {
    case actionTypes.UPDATE_TABLE_OPTIONS_PENDING:
      editedState = duplicateState();
      editedState.updatingTableOptions = true;
      break;
    case actionTypes.UPDATE_TABLE_OPTIONS_SUCCESS:
      editedState = duplicateState();
      editedState.updatingTableOptions = false;
      break;
    default:
      return state;
  }
  return editedState;
}
