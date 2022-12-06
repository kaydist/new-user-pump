import axios, { AxiosResponse } from "axios";

const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
  timeout: 15000,
};

const instance = axios.create({
  headers,
});

instance.interceptors.request.use(function (config) {
  const auth = JSON?.parse(sessionStorage.getItem("persist:account") || "{}");
  const token = `Bearer ${
    Object.keys(auth).length > 0 ? JSON.parse(auth.token) : ""
  }`;
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
