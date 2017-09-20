import sampleMock from "./../mock/sampleMock"
import {httpGet} from "./../common/httpUtil"

const urls = {
  login: "/user/login",  // 登录
  list: "/sample/list",  // 列表数据
};
export function login(data, func) {
  httpGet(urls.login, data, func)
}

export function getListData(data, func) {
  httpGet(urls.list, data, func)
}