import { combineReducers } from 'redux';
import { createResponsiveStateReducer } from 'redux-responsive';
import login from './auth/authReducer';
import uxReducer from './ux/UxReducer';
import fileManager from './fileManager/fileManagerReducer';
import importReducer from './import/ImportReducer';
import search from './search/SearchReducer';
import dynamicForm from '../shared/components/sovos-dynamic-form/redux/DynamicFormReducer';
import formMetaInformation from '../shared/components/sovos-dynamic-form/redux/FormMetaInformationReducer';
import contextReducer from './context/contextReducer';
import overlayLayer from './overlayLayer/OverlayLayerReducer';
import appSettings from './appSettings/AppSettingsReducer';

const rootReducer = combineReducers({
  browser: createResponsiveStateReducer({
    extraSmall: 500,
    small: 700,
    medium: 959,
    large: 1280,
    extraLarge: 1400
  }),
  uxReducer,
  login,
  fileManager,
  importReducer,
  search,
  dynamicForm,
  formMetaInformation,
  contextReducer,
  overlayLayer,
  appSettings
});

export default rootReducer;
