import axios, { AxiosResponse } from "axios";

const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
  timeout: 15000,
};

const getToken = () =>
  sessionStorage.getItem("user-pump-token")
    ? JSON.parse(sessionStorage.getItem("user-pump-token"))
    : null;

const instance = axios.create({
  headers,
});

instance.interceptors.request.use(function (config) {
  const token = `Bearer ${getToken()}`;
  config.headers.Authorization = token;

  return config;
});

const ResponseBody = (response) => response.data;

export const callApi = {
  get: (url, body) => instance.get(url, body).then(ResponseBody),
  post: (url, body, config) =>
    instance.post(url, body, config).then(ResponseBody),
  put: (url, body, config) =>
    instance.put(url, body, config).then(ResponseBody),
  patch: (url, body, config) =>
    instance.patch(url, body, config).then(ResponseBody),
  delete: (url, body) => instance.delete(url, body).then(ResponseBody),
};
