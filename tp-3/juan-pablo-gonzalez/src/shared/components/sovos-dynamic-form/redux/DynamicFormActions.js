import types from './DynamicFormConstants';
import request from '../../../../shared/helpers/request';
import formConstants from '../../../../shared/helpers/formConstants';

const setFieldValueSuccess = (fieldName, fieldValue) => ({ type: types.SET_FIELD_VALUE_SUCCESS, fieldName, fieldValue });
const fetchFormSuccess = (form, fchar) => ({ type: types.FETCH_FORM_SUCCESS, form, fchar });
const saveFormSuccess = (fchar, form, index) => ({ type: types.SAVE_FORM_SUCCESS, fchar, form, index });

const setFieldValue = (fieldName, fieldValue) => dispatch => dispatch(setFieldValueSuccess(fieldName, fieldValue));

const fetchForm = (id, fchar) => {
  const path = `/${formConstants[fchar].onSearch}/${id}`;
  return function (dispatch) {
    request.get(path, dispatch)
      .then(form => dispatch(fetchFormSuccess(form.data.data, fchar)))
      .catch((err) => { throw err; });
  };
};

const resetForm = () => dispatch => dispatch({ type: types.RESET_FORM });

const saveForm = (fchar, form, index, callback) => (dispatch) => {
  const path = `/${formConstants[fchar].onSearch}`;
  const method = form.MODLEVEL ? 'patch' : 'post';
  request[method](path, form, dispatch)
    .then(() => {
      dispatch(saveFormSuccess(fchar, form, index));
      callback();
    })
    .catch((err) => { throw err; });
};

export {
  setFieldValue,
  fetchForm,
  saveForm,
  resetForm
};
