import axios from 'axios';
import AuthenticationHelper from './authenticationHelper';
import { logoutSuccess } from '../../redux/auth/authActions';

axios.defaults.baseURL = `${window.location.protocol}//${window.location.host}/api/`;

axios.interceptors.request.use((config) => {
  config.headers = AuthenticationHelper.isJwtTokenStored() ? { Authorization: `Bearer ${AuthenticationHelper.getJwtToken()}` } : '';
  return config;
});

axios.interceptors.response.use((resp) => {
  if (resp.data.errMsg && resp.data.status === 401) {
    resp.config.dispatch(logoutSuccess());
    return Promise.reject(resp);
  }
  return resp;
});

export default class Request {
  static get(path, dispatch) {
    return axios.get(path, { dispatch });
  }

  static post(path, data = {}, dispatch) {
    return axios.post(path, data, { dispatch });
  }

  static delete(path, dispatch) {
    return axios.delete(path, { dispatch });
  }

  static patch(path, data = {}, dispatch) {
    return axios.patch(path, data, { dispatch });
  }
}
