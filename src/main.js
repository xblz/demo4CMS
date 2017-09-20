import Vue from 'vue'
import ElementUI from 'element-ui'
import VueRouter from 'vue-router'
import 'element-ui/lib/theme-default/index.css'
import './styles/main.css'
import App from './App.vue'
import routes from '../routes'

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

Vue.use(ElementUI);
Vue.use(VueRouter);

Vue.prototype.showLoading = function () {
  this.$loading({fullscreen: true, lock: true, customClass: "loading"});
};

Vue.prototype.closeLoading = function () {
  this.$loading().close();
};

const router = new VueRouter({
  routes
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');