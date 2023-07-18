import axios from "axios";

const access_token = "fdsafadsfdsfsadf"

axios.interceptors.request.use(function (config) {
  config.headers.Authorization = `Bearer ${access_token}`;
  return config;
}, function (error) {
  // Сделайте что-нибудь с ошибкой запроса
  return Promise.reject(error);
})

export default axios;