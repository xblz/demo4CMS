## Info
#### 加载第三方npm包
```
网络请求：axios
UI组件：element-ui
mock数据：mockjs
Vue路由：vue-router
```

## install
```
npm install
```

## Develop

```
# 127.0.0.1:7070
npm run dev
```

## Build

```
# build for production with minification
npm run build
```

## 使用
####全局加载控件

```
import header from './models/x-header.vue';
import sidebar from './models/x-sidebar.vue';
import breadcrumb from './models/x-breadcrumb.vue';
import search from './models/x-search.vue'
import table from './models/x-table.vue'
import pagination from './models/x-pagination.vue'
import form from './models/x-form.vue'
import content from './models/x-content.vue'

Vue.component('x-header', header);
Vue.component('x-sidebar', sidebar);
Vue.component('x-breadcrumb', breadcrumb);
Vue.component('x-search', search);
Vue.component('x-table', table);
Vue.component('x-pagination', pagination);
Vue.component('x-form', form);
Vue.component('x-content', content);
```