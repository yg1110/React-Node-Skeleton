import axios from "axios";

export default class RestService {
  constructor(host, baseURL) {
    this.api = axios.create({
      baseURL: host,
    });
    this.host = host;
    this.baseURL = baseURL;
  }

  getUsers = () => {
    return this.api.get(`${this.baseURL}/users`);
  };

  getUser = (id) => {
    return this.api.get(`${this.baseURL}/users/`, {
      params: {
        id,
      },
    });
  };

  postUser = (user) => {
    return this.api.post(`${this.baseURL}/users`, {
      user,
    });
  };

  putUser = (user) => {
    return this.api.put(`${this.baseURL}/users`, {
      user,
    });
  };

  deleteUser = (id) => {
    return this.api.delete(`${this.baseURL}/users`, {
      data: {
        id,
      },
    });
  };
}
