<template>
  <div pluginId="app" style="height: 100%;">
    <el-row style="position: absolute;width: 100%">
      <el-col :span="24">
        <x-header></x-header>
      </el-col>
    </el-row>
    <el-row style="height: 100%;padding-top: 50px;">
      <el-col :span="3" style="height: 100%;">
        <x-sidebar :config="routesConfig"></x-sidebar>
      </el-col>
      <el-col :span="21" style="height: 100%;">
        <el-row style="height: 100%;overflow-y: auto">
          <x-breadcrumb :config="routesConfig"></x-breadcrumb>
          <router-view></router-view>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>


<script>

  import routes from "../../routes"

  export default {
    data() {
      return {
        routesConfig: routes,
      }
    },
    methods: {
      hidechildrenDom() {
        if (document.getElementsByClassName("x-router-children").length === 0) {
          if (document.getElementsByClassName("x-router").length !== 0) {
            document.getElementsByClassName("x-router")[0].style.display = "initial";
          }
        } else {
          document.getElementsByClassName("x-router")[0].style.display = "none";
        }
      }
    },
    mounted() {
      this.hidechildrenDom();
    },
    updated() {
      this.hidechildrenDom();
    }
  }
</script>