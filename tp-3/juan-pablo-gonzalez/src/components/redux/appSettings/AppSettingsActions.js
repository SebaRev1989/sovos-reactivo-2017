import actionTypes from './AppSettingsConstants';
import formConstants from '../../shared/helpers/formConstants';
import request from '../../shared/helpers/request';

const updateTableOptionsPending = () => ({ type: actionTypes.UPDATE_TABLE_OPTIONS_PENDING });
const updateTableOptionsSuccess = () => ({ type: actionTypes.UPDATE_TABLE_OPTIONS_SUCCESS });

const updateAppSettings = (name, value, callback) => (dispatch) => {
  const path = '/app-settings';
  const setting = {
    name,
    value
  };
  request.post(path, setting, dispatch).then(callback);
};

const updateColumnSelectorOptions = (fchar, value) => (dispatch) => {
  dispatch(updateTableOptionsPending());
  dispatch(updateAppSettings(`ColumnSelector${formConstants[fchar].entityName}`, value, () => {
    dispatch(updateTableOptionsSuccess());
  }));
};

export {
  updateAppSettings,
  updateColumnSelectorOptions
};
