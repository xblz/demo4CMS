<template>
  <el-breadcrumb separator="/" :replace="true" style="padding: 10px;border-bottom: 1px solid #1F2D3B">
    <template v-for="item in breadcrumbs">
      <el-breadcrumb-item :to="{ path: item.path }">{{item.name}}</el-breadcrumb-item>
    </template>
  </el-breadcrumb>
</template>


<script>

  export default {
    methods: {
      getBreadcrumbItem(path) {
        var paths = path.split("/");
        var items = [];
        var tempRoutes = this.config;
        var key = "/" + paths[1];
        for (var i = 1; i < paths.length; i++) {
          if (tempRoutes.filter(list => list.path === key).length > 0) {
            items.push(tempRoutes.filter(list => list.path === key)[0]);
            tempRoutes = tempRoutes.filter(list => list.path === key)[0].children;
            key = key + "/" + paths[i + 1];
          }
        }
        return items;
      }
    },
    data() {
      return {
        breadcrumbs: this.getBreadcrumbItem(this.$route.path)
      }
    },
    props: {
      config: {
        type: Array,
        default() {
          return []
        }
      }
    },
    watch: {
      $route(to, from) {
        this.breadcrumbs = this.getBreadcrumbItem(to.path)
      }
    }
  }
</script>