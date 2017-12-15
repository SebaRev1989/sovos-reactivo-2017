import sharedActions from '../../../../shared/constants/SharedConstants';

const dynamicFormActions = {
  SET_FIELD_VALUE_SUCCESS: 'SET_FIELD_VALUE_SUCCESS',
  FETCH_FORM_SUCCESS: 'FETCH_FORM_SUCCESS',
  SAVE_FORM_SUCCESS: 'SAVE_FORM_SUCCESS',
  RESET_FORM: 'RESET_FORM'
};

export default { ...dynamicFormActions, ...sharedActions };
