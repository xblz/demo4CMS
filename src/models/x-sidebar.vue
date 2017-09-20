<template>
  <div class="grid-content" style="height: 100%;background-color: #1F2D3B;overflow-y: auto;">
    <el-menu :default-active="active" :router=true :unique-opened=true style="height: 100%;">
      <template v-for="item in this.config">
        <template v-if="item.children">
          <el-submenu :index="item.name">
            <template slot="title">{{item.name}}</template>
            <template v-for="children in item.children">
              <el-menu-item :index="children.path">{{children.name}}</el-menu-item>
            </template>
          </el-submenu>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script>


  export default {
    data() {
      return {
        active: this.$route.matched.length >= 3 ? this.$route.matched[1].path : this.$route.path
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
      $route(to, form) {
        if (to.path.indexOf(form.path) !== -1) {
          this.active = form.path
        } else {
          this.active = to.path
        }
      }
    }
  }

</script>