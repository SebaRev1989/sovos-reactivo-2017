import request from '../../shared/helpers/request';
import * as actionsTypes from './usersConstants';

export function working() {
  return { type: actionsTypes.WORKING };
}

// --- Obtener Listado de usuarios ----
export function fetchUsersSuccess(data) {
  return { type: actionsTypes.FETCH_USERS_SUCCESS, data };
}
export function fetchUsersFailure(errorMessage) {
  return { type: actionsTypes.FETCH_USERS_FAILURE, errorMessage };
}
export function fetchUsers() {
  return function (dispatch) {
    dispatch(working());
    return request.get('users', null, dispatch).then((response) => {
      dispatch(fetchUsersSuccess(response.data));
    }, (error) => {
      let message;
      try {
        message = error.data.errMsg ? error.data.errMsg : 'Hubo un error...';
      } catch (e) {
        message = 'Hubo un error...';
      }
      dispatch(fetchUsersFailure(message));
      throw (error);
    });
  };
}
// ---           End                 ----

// ---     Guardar un usuario      ----
export function guardarUserSuccess(data) {
  return { type: actionsTypes.SAVE_USER_SUCCESS, data };
}
export function guardarUserFailure(errorMessage) {
  return { type: actionsTypes.SAVE_USER_FAILURE, errorMessage };
}
export function guardarUser(user, callbackSave = ()=>{} ) {
  return function (dispatch) {
    user.userId = 1;
    dispatch(working());

    let errorCallback = function(error){
      let message;
      try {
        message = error.data.errMsg ? error.data.errMsg : 'Hubo un error...';
      } catch (e) {
        message = 'Hubo un error...';
      }
      dispatch(guardarUserFailure(message));
      throw (error);
    };

    if(!user.id){
      return request.user('users', user, dispatch).then((response) => {
        dispatch(guardarUserSuccess(response.data));
        callbackSave();
      },errorCallback);
    }else{
      return request.put(`users/${user.id}`, user, dispatch).then((response) => {
        dispatch(guardarUserSuccess(response.data));
        callbackSave();
      },errorCallback);
    }
  };
}
// ---           End                 ----

// ---     Eliminar un usuario     ----
export function eliminarUserSuccess(data) {
  return { type: actionsTypes.DELETE_USER_SUCCESS, data };
}
export function eliminarUserFailure(errorMessage) {
  return { type: actionsTypes.DELETE_USER_FAILURE, errorMessage };
}
export function eliminarUser(id, callbackDelete = ()=>{} ) {
  return function (dispatch) {
    dispatch(working());
    let errorCallback = function(error){
      let message;
      try {
        message = error.data.errMsg ? error.data.errMsg : 'Hubo un error...';
      } catch (e) {
        message = 'Hubo un error...';
      }
      dispatch(eliminarUserFailure(message));
      throw (error);
    };
    return request.delete(`users/${id}`, null, dispatch).then((response) => {
        dispatch(eliminarUserSuccess(response.data));
        callbackDelete();
      },errorCallback);
  };
}
// ---           End                 ----

// --- Obtener UN usuario ----
export function fetchUserSuccess(data) {
  return { type: actionsTypes.FETCH_USER_SUCCESS, data };
}
export function fetchUserFailure(errorMessage) {
  return { type: actionsTypes.FETCH_USER_FAILURE, errorMessage };
}
export function fetchUser(id) {
  return function (dispatch) {
    dispatch(working());
    return request.get(`users/${id}`, null, dispatch).then((response) => {
      dispatch(fetchUserSuccess(response.data));
    }, (error) => {
      let message;
      try {
        message = error.data.errMsg ? error.data.errMsg : 'Hubo un error...';
      } catch (e) {
        message = 'Hubo un error...';
      }
      dispatch(fetchUserFailure(message));
      throw (error);
    });
  };
}
// ---           End                 ----
 