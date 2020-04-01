import axios from "axios";
import store from "store";
import router from "router";

// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API,
  timeout: 5000
});

// request 拦截器
service.interceptors.request.use(
  config => {
    //发送请求前，统一加上token
    if (store.getters.token) {
      config.headers["token"] = "Bearer " + store.getters.token;
    }
    return config;
  },
  error => {
    console.log(error);
    Promise.reject(error);
  }
);

// response 拦截器
service.interceptors.response.use(
  response => {
    const code = response.data.code;
    if (401 === code) {
      // 退出登录
      localStorage.removeItem("account");
      localStorage.removeItem("token");
      localStorage.removeItem("expiration");
      localStorage.removeItem("nickname");
      router.push({ path: "/login" });
    } else {
      return response;
    }
  },
  error => {
    console.log("err" + error); // for debug
    return Promise.reject(error);
  }
);

export default service;
