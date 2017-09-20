import axios from "axios";
import {Message, Loading} from "element-ui";

const baseURL = window.location.origin;

const loadingInstance = Loading.service({fullscreen: true, lock: true, customClass: "loading"});

setTimeout(function () {
  loadingInstance.visible = false;
}, 300);

export function httpPost(url, data, callBack) {
  loadingInstance.visible = true;
  axios.post(baseURL + url, data)
    .then(function (response) {
      thenCallBack(response, callBack)
    }).catch(function (error) {
    catchCallBack(error);
  });
}

export function httpGet(url, data, callBack) {
  loadingInstance.visible = true;
  axios.get(baseURL + url, {params: data})
    .then(function (response) {
      thenCallBack(response, callBack)
    })
    .catch(function (error) {
      catchCallBack(error);
    });
}

export function httpPut(url, data, callBack) {
  loadingInstance.visible = true;
  axios.put(baseURL + url, data)
    .then(function (response) {
      thenCallBack(response, callBack)
    })
    .catch(function (error) {
      catchCallBack(error);
    });
}

export function httpDel(url, data, callBack) {
  loadingInstance.visible = true;
  axios.delete(baseURL + url, data)
    .then(function (response) {
      thenCallBack(response, callBack)
    })
    .catch(function (error) {
      catchCallBack(error);
    });
}

export function GetRequest(url, param) {
  url = url.split("?")[1];
  var theRequest = {};
  var str = url.substr(0);
  var strs = str.split("&");
  for (var i = 0; i < strs.length; i++) {
    theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
  }
  return theRequest[param] || "";
}

function thenCallBack(response, callBack) {
  loadingInstance.visible = false;
  if (response.data.code === 0) {
    callBack(response.data.data)
  } else {
    Message.warning(response.data.message);
  }
}

function catchCallBack(error) {
  loadingInstance.visible = false;
  Message.error(error);
}

