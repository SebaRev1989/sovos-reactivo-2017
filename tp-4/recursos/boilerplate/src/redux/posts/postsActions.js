import request from '../../shared/helpers/request';
import * as actionsTypes from './postsConstants';

export function working() {
  return { type: actionsTypes.WORKING };
}

// --- Obtener Listado de Posteos ----
export function fetchPostsSuccess(data) {
  return { type: actionsTypes.FETCH_POSTS_SUCCESS, data };
}
export function fetchPostsFailure(errorMessage) {
  return { type: actionsTypes.FETCH_POSTS_FAILURE, errorMessage };
}
export function fetchPosts() {
  return function (dispatch) {
    dispatch(working());
    return request.get('posts', null, dispatch).then((response) => {
      dispatch(fetchPostsSuccess(response.data));
    }, (error) => {
      let message;
      try {
        message = error.data.errMsg ? error.data.errMsg : 'Hubo un error...';
      } catch (e) {
        message = 'Hubo un error...';
      }
      dispatch(fetchPostsFailure(message));
      throw (error);
    });
  };
}
// ---           End                 ----

// ---     Guardar un Post      ----
export function guardarPostSuccess(data) {
  return { type: actionsTypes.SAVE_POST_SUCCESS, data };
}
export function guardarPostFailure(errorMessage) {
  return { type: actionsTypes.SAVE_POST_FAILURE, errorMessage };
}
export function guardarPost(post, callbackSave = ()=>{} ) {
  return function (dispatch) {
    post.userId = 1;
    dispatch(working());

    let errorCallback = function(error){
      let message;
      try {
        message = error.data.errMsg ? error.data.errMsg : 'Hubo un error...';
      } catch (e) {
        message = 'Hubo un error...';
      }
      dispatch(guardarPostFailure(message));
      throw (error);
    };

    if(!post.id){
      return request.post('posts', post, dispatch).then((response) => {
        dispatch(guardarPostSuccess(response.data));
        callbackSave();
      },errorCallback);
    }else{
      return request.put(`posts/${post.id}`, post, dispatch).then((response) => {
        dispatch(guardarPostSuccess(response.data));
        callbackSave();
      },errorCallback);
    }
  };
}
// ---           End                 ----

// ---     Eliminar un Post     ----
export function eliminarPostSuccess(data) {
  return { type: actionsTypes.DELETE_POST_SUCCESS, data };
}
export function eliminarPostFailure(errorMessage) {
  return { type: actionsTypes.DELETE_POST_FAILURE, errorMessage };
}
export function eliminarPost(id, callbackDelete = ()=>{} ) {
  return function (dispatch) {
    dispatch(working());
    let errorCallback = function(error){
      let message;
      try {
        message = error.data.errMsg ? error.data.errMsg : 'Hubo un error...';
      } catch (e) {
        message = 'Hubo un error...';
      }
      dispatch(eliminarPostFailure(message));
      throw (error);
    };
    return request.delete(`posts/${id}`, null, dispatch).then((response) => {
        dispatch(eliminarPostSuccess(response.data));
        callbackDelete();
      },errorCallback);
  };
}
// ---           End                 ----

// --- Obtener UN Post ----
export function fetchPostSuccess(data) {
  return { type: actionsTypes.FETCH_POST_SUCCESS, data };
}
export function fetchPostFailure(errorMessage) {
  return { type: actionsTypes.FETCH_POST_FAILURE, errorMessage };
}
export function fetchPost(id) {
  return function (dispatch) {
    dispatch(working());
    return request.get(`posts/${id}`, null, dispatch).then((response) => {
      dispatch(fetchPostSuccess(response.data));
    }, (error) => {
      let message;
      try {
        message = error.data.errMsg ? error.data.errMsg : 'Hubo un error...';
      } catch (e) {
        message = 'Hubo un error...';
      }
      dispatch(fetchPostFailure(message));
      throw (error);
    });
  };
}
// ---           End                 ----
 