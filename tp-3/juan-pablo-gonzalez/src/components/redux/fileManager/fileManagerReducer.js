import actionTypes from './fileManagerConstants';
import { processFiles } from './fileManagerHelper';

const initialStore = {
  fetchingFiles: false,
  fetchError: false,
  files: [],
  currentPage: 1,
  from: 1,
  lastPage: 1,
  pageSize: 1,
  to: 1,
  totalItems: 1,
  folders: [],
  errorCreateFolder: false,
  errorRenameFolder: false,
  errorMessage: '',
  fetchingFolders: false
};

export default function Reducer(state = initialStore, action) {
  const duplicateState = () => (Object.assign({}, state));
  let editedState;
  let filesInformation;

  switch (action.type) {
    case actionTypes.FETCHING_FILES:
      editedState = duplicateState();
      editedState.fetchingFiles = true;
      break;

    case actionTypes.FETCH_FILES_SUCCESS:
      editedState = duplicateState();
      if (action.filesInfo) {
        filesInformation = processFiles(action.filesInfo.Data);
        editedState.files = filesInformation.files;
        editedState.totalFilesSize = filesInformation.totalFilesSize;
        editedState.currentPage = action.filesInfo.CurrentPage;
        editedState.from = action.filesInfo.From;
        editedState.lastPage = action.filesInfo.LastPage;
        editedState.to = action.filesInfo.To;
        editedState.totalItems = action.filesInfo.Total;
        editedState.pageSize = action.filesInfo.PageSize;
      } else {
        editedState.files = [];
        editedState.totalFilesSize = '0 Bytes';
        editedState.currentPage = 1;
        editedState.from = 0;
        editedState.lastPage = 0;
        editedState.to = 0;
        editedState.totalItems = 0;
        editedState.pageSize = 0;
      }
      editedState.fetchingFiles = false;
      break;

    case actionTypes.FETCH_FILES_FAILURE:
      editedState = duplicateState();
      editedState.fetchingFiles = false;
      editedState.fetchError = true;
      break;

    case actionTypes.FETCHING_FOLDERS:
      editedState = duplicateState();
      editedState.fetchingFolders = true;
      break;

    case actionTypes.FETCH_FOLDERS_SUCCESS:
      editedState = duplicateState();
      editedState.folders = action.foldersList;
      editedState.fetchingFolders = false;
      editedState.errorMessage = '';
      break;

    case actionTypes.FETCH_FOLDERS_FAILURE:
      editedState = duplicateState();
      editedState.errorMessage = action.errorMessage;
      break;

    case actionTypes.CREATE_FOLDER_SUCCESS:
      editedState = duplicateState();
      editedState.errorCreateFolder = false;
      editedState.errorMessage = '';
      break;

    case actionTypes.CREATE_FOLDER_FAILURE:
      editedState = duplicateState();
      editedState.errorCreateFolder = true;
      editedState.errorMessage = action.errorMessage;
      break;

    case actionTypes.RENAMING_FOLDER:
      editedState = duplicateState();
      editedState.errorRenameFolder = false;
      editedState.errorMessage = '';
      break;

    case actionTypes.RENAME_FOLDER_SUCCESS:
      editedState = duplicateState();
      editedState.errorRenameFolder = false;
      editedState.errorMessage = '';
      break;

    case actionTypes.RENAME_FOLDER_FAILURE:
      editedState = duplicateState();
      editedState.errorRenameFolder = true;
      editedState.errorMessage = action.errorMessage;
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
