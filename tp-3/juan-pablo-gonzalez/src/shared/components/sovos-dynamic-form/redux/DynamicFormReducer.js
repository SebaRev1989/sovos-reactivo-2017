import actionTypes from './DynamicFormConstants';
import sovosFunctions from '../../../../shared/helpers/sovosFunctions';

const initialStore = {
  fchar: '',
  form: {},
  lastUpdatedForm: {
    fchar: '',
    data: {}
  },
  lastUpdatedFormIndex: null
};

export default function Reducer(state = initialStore, action) {
  const duplicateState = () => Object.assign({}, state);
  let editedState;

  switch (action.type) {
    case actionTypes.SET_FIELD_VALUE_SUCCESS:
      editedState = duplicateState();
      editedState.form[action.fieldName] = action.fieldValue;
      break;
    case actionTypes.FETCH_FORM_SUCCESS:
      editedState = duplicateState();
      editedState.form = Object.assign({}, sovosFunctions.ObjectKeysToUppercase(action.form));
      editedState.fchar = action.fchar;
      break;
    case actionTypes.SAVE_FORM_SUCCESS:
      editedState = duplicateState();
      editedState.lastUpdatedForm = Object.assign({}, editedState.lastUpdatedForm, { fchar: action.fchar, data: action.form });
      editedState.lastUpdatedFormIndex = action.index;
      break;
    case actionTypes.RESET_FORM:
      editedState = duplicateState();
      editedState.form = {};
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
