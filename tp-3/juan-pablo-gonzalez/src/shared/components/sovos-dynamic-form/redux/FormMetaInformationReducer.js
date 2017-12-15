import actionTypes from './FormMetaInformationConstants';

const initialStore = {
  data: {},
  fetchingMetadata: true,
  fetchingTableOptions: true
};

export default function FormMetaInformationReducer(state = initialStore, action) {
  let editedState;
  let tableOptions;
  let data;

  const duplicateState = () => {
    data = {};
    return { ...state };
  };

  switch (action.type) {
    case actionTypes.FETCH_METADATA_SUCCESS:
      editedState = duplicateState();
      data[action.fchar] = editedState.data[action.fchar] || {};
      data[action.fchar].metadata = action.metadata;
      editedState.data = { ...editedState.data, ...data };
      editedState.fetchingMetadata = false;
      break;
    case actionTypes.FETCHING_METADATA:
      editedState = duplicateState();
      editedState.fetchingMetadata = true;
      break;
    case actionTypes.FETCH_TABLE_OPTIONS_SUCCESS:
      editedState = duplicateState();
      tableOptions = action.tableOptions;
      data[action.fchar] = editedState.data[action.fchar] || {};
      data[action.fchar].enabledFields = {};
      data[action.fchar].disabledFields = {};
      Object.keys(tableOptions).forEach((key) => {
        if (tableOptions[key].showOnSearch) {
          data[action.fchar].enabledFields[key] = tableOptions[key];
        } else {
          data[action.fchar].disabledFields[key] = tableOptions[key];
        }
      });
      editedState.data = { ...editedState.data, ...data };
      editedState.fetchingTableOptions = false;
      break;
    case actionTypes.FETCHING_TABLE_OPTIONS:
      editedState = duplicateState();
      editedState.fetchingTableOptions = true;
      break;
    case actionTypes.RESET_TABLE_OPTIONS:
      editedState = duplicateState();
      editedState.data[action.fchar].enabledFields = {};
      editedState.data[action.fchar].disabledFields = {};
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
