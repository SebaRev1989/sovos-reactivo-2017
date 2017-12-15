import request from '../../shared/helpers/request';
import actionsTypes from './fileManagerConstants';

const fetchingFiles = () => ({ type: actionsTypes.FETCHING_FILES });

const fetchSuccess = filesInfo => ({ type: actionsTypes.FETCH_FILES_SUCCESS, filesInfo });

const fetchFailure = () => ({ type: actionsTypes.FETCH_FILES_FAILURE });

const deletingFile = () => ({ type: actionsTypes.DELETING_FILE });

const deleteSuccess = () => ({ type: actionsTypes.DELETE_FILE_SUCCESS });

const deleteFailure = () => ({ type: actionsTypes.DELETE_FILE_FAILURE });

const renamingFile = () => ({ type: actionsTypes.RENAMING_FILE });

const renameSuccess = () => ({ type: actionsTypes.RENAME_FILE_SUCCESS });

const renameFailure = () => ({ type: actionsTypes.RENAME_FILE_FAILURE });

const movingFile = () => ({ type: actionsTypes.MOVING_FILE });

const moveFileSuccess = () => ({ type: actionsTypes.MOVE_FILE_SUCCESS });

const moveFileFailure = () => ({ type: actionsTypes.MOVE_FILE_FAILURE });

const getAllFiles = (pageSize, pageNum) => {
  const path = `files/${pageSize}/${pageNum}`;
  return function (dispatch) {
    dispatch(fetchingFiles());
    request.get(path, dispatch).then((response) => {
      dispatch(fetchSuccess(response.data.data));
    }, (error) => {
      dispatch(fetchFailure());
      throw (error);
    });
  };
};

const getFilesByFolder = (pageSize, pageNum, folderName) => {
  const path = `files/${folderName}/${pageSize}/${pageNum}`;
  return function (dispatch) {
    dispatch(fetchingFiles());
    request.get(path, dispatch).then((response) => {
      dispatch(fetchSuccess(response.data.data));
    }, (error) => {
      dispatch(fetchFailure());
      throw (error);
    });
  };
};

const getFilesByRegex = (pageSize, pageNum, fileName) => {
  const path = `files/search/${fileName}/${pageSize}/${pageNum}`;
  return function (dispatch) {
    dispatch(fetchingFiles());
    request.get(path, dispatch).then((response) => {
      dispatch(fetchSuccess(response.data.data));
    }, (error) => {
      dispatch(fetchFailure());
      throw (error);
    });
  };
};

const getFilesByFolderAndRegex = (pageSize, pageNum, folderName, fileName) => {
  const path = `files/search/${folderName}/${fileName}/${pageSize}/${pageNum}`;
  return function (dispatch) {
    dispatch(fetchingFiles());
    request.get(path, dispatch).then((response) => {
      dispatch(fetchSuccess(response.data.data));
    }, (error) => {
      dispatch(fetchFailure());
      throw (error);
    });
  };
};

const fetchFiles = (pageSize, pageNum, folderName, fileName) => {
  if (folderName === 'All files' && fileName === '') {
    return getAllFiles(pageSize, pageNum);
  }
  if (folderName !== 'All files' && fileName === '') {
    return getFilesByFolder(pageSize, pageNum, folderName);
  }
  if (folderName === 'All files' && fileName !== '') {
    return getFilesByRegex(pageSize, pageNum, fileName);
  }
  return getFilesByFolderAndRegex(pageSize, pageNum, folderName, fileName);
};

const renameFile = (file, newFileName) => {
  const path = `files/rename/${file.key}`;
  const data = {
    FileName: newFileName,
    FolderName: file.folder
  };
  return function (dispatch) {
    dispatch(renamingFile());
    return request.patch(path, data, dispatch).then(() => {
      dispatch(renameSuccess());
    }, (error) => {
      dispatch(renameFailure());
      throw (error);
    });
  };
};

const deleteFile = (file) => {
  const path = `files/${file.key}`;
  return function (dispatch) {
    dispatch(deletingFile());
    return request.delete(path, dispatch).then(() => {
      dispatch(deleteSuccess());
    }, (error) => {
      dispatch(deleteFailure());
      throw (error);
    });
  };
};

const moveFile = (idFile, idNewFolder) => {
  const path = `files/move/${idFile}`;
  const data = {
    ParentId: idNewFolder
  };
  return function (dispatch) {
    dispatch(movingFile());
    return request.patch(path, data, dispatch).then(() => {
      dispatch(moveFileSuccess());
    }, (error) => {
      dispatch(moveFileFailure());
      throw (error);
    });
  };
};

const fetchingFolders = () => ({ type: actionsTypes.FETCHING_FOLDERS });

const fetchFoldersSuccess = foldersList => ({ type: actionsTypes.FETCH_FOLDERS_SUCCESS, foldersList });

const fetchFoldersFailure = () => ({ type: actionsTypes.FETCH_FOLDERS_FAILURE });

const fetchFolders = () => {
  const path = 'folders';
  return function (dispatch) {
    dispatch(fetchingFolders());
    request.get(path, dispatch).then((response) => {
      dispatch(fetchFoldersSuccess(response.data.data));
    }, (error) => {
      dispatch(fetchFoldersFailure());
      throw (error);
    });
  };
};

const creatingFolder = () => ({ type: actionsTypes.CREATING_FOLDER });

const createFolderSuccess = () => ({ type: actionsTypes.CREATE_FOLDER_SUCCESS });

const createFolderFailure = errorMessage => ({ type: actionsTypes.CREATE_FOLDER_FAILURE, errorMessage });

const createFolder = (name) => {
  const path = 'folders';
  const data = {
    folderName: name
  };
  return function (dispatch) {
    dispatch(creatingFolder());
    return request.post(path, data, dispatch).then(() => {
      dispatch(createFolderSuccess());
    }, (error) => {
      dispatch(createFolderFailure(error.response.data.message));
      throw (error);
    });
  };
};

const renamingFolder = () => ({ type: actionsTypes.RENAMING_FOLDER });

const renameFolderSuccess = () => ({ type: actionsTypes.RENAME_FOLDER_SUCCESS });

const renameFolderFailure = errorMessage => ({ type: actionsTypes.RENAME_FOLDER_FAILURE, errorMessage });

const renameFolder = (id, name) => {
  const path = `folders/${id}`;
  const data = {
    FolderName: name
  };
  return function (dispatch) {
    return request.patch(path, data, dispatch).then(() => {
      dispatch(renameFolderSuccess());
    }, (error) => {
      dispatch(renameFolderFailure(error.data.errMsg));
      throw (error);
    });
  };
};

const initRenaming = () => (dispatch) => {
  dispatch(renamingFolder());
};

export {
  fetchFiles,
  renameFile,
  deleteFile,
  moveFile,
  fetchFolders,
  createFolder,
  renameFolder,
  initRenaming
};
