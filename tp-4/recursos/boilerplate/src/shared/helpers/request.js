import axios from 'axios'; 

axios.defaults.baseURL = `${window.location.protocol}//${window.location.host}/api`;
 

export default class Request {
  static get(path, dispatch) {
    return axios.get(path, { dispatch });
  }

  static post(path, data = {}, dispatch) {
    return axios.post(path, data, { dispatch });
  }

  static put(path, data = {}, dispatch) {
    return axios.put(path, data, { dispatch });
  }

  static delete(path, dispatch) {
    return axios.delete(path, { dispatch });
  }

  static patch(path, data = {}, dispatch) {
    return axios.patch(path, data, { dispatch });
  }
}
