export default [
  {name: "/", path: "/", redirect: "/login"},
  {name: "login", path: "/login", component: resolve => require(["./src/views/login.vue"], resolve)},
  {name: "404", path: "*", component: resolve => require(["./src/views/404.vue"], resolve)},
  {
    name: "示例",
    path: "/sample",
    component: resolve => require(["./src/views/home.vue"], resolve),
    children: [
      {
        name: "搜索",
        path: "/sample/search",
        component: resolve => require(["./src/views/sample/search.vue"], resolve)
      }, {
        name: "列表",
        path: "/sample/table",
        component: resolve => require(["./src/views/sample/table.vue"], resolve)
      }, {
        name: "分页",
        path: "/sample/pagination",
        component: resolve => require(["./src/views/sample/pagination.vue"], resolve)
      }, {
        name: "表单",
        path: "/sample/form",
        component: resolve => require(["./src/views/sample/form.vue"], resolve)
      }, {
        name: "内容",
        path: "/sample/content",
        component: resolve => require(["./src/views/sample/content.vue"], resolve)
      }, {
        name: "搜索+列表+分页",
        path: "/sample/search+table+pagination",
        component: resolve => require(["./src/views/sample/search+table+pagination.vue"], resolve)
      }, {
        name: "内容+列表+分页",
        path: "/sample/content+table+pagination",
        component: resolve => require(["./src/views/sample/content+table+pagination.vue"], resolve)
      }
    ]
  }
];