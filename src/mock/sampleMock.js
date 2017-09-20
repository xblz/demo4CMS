var Mock = require("mockjs");
var Random = Mock.Random;
import {GetRequest} from "./../common/httpUtil"

const baseURL = window.location.origin;


Mock.mock(/\/user\/login/, function () {
  return {
    "code": Random.pick([0, 0, 0, 0, 0, 0, 0, 0, 0, 1]),
    "message": "用户名或密码错误"
  }
});

Mock.mock(/\/sample\/list/, function (abc) {

  const pageSize = GetRequest(abc.url, "pageSize");
  var data = [];
  for (var i = 0; i < pageSize; i++) {
    data.push({
      "name": Random.cname(),
      "gender": Random.pick([0, 1]),
      "date": Random.integer(1500000000000, 1504000000000),
      "address": Random.county(true),
      "mobile": "13" + Random.cword('01234567890', 9, 9),
      "switch": Random.pick([0, 1]),
      "href": "https://github.com/xblz"
    })
  }
  return {
    "data": {
      "total": 100,
      "data": data
    },
    "code": Random.pick([0, 0, 0, 0, 0, 0, 0, 0, 0, 1]),
    "message": "查询失败"
  }
});