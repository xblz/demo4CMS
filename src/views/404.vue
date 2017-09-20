<template>
  <div class="loginBg">
    <div class="loginGroup">
      <div style="position:relative;">
        <div style="padding: 20px;">
          <label style="font-size: 30px;font-weight: normal;color: white;">页面未找到</label>
        </div>
        <div style="padding: 40px;">
          <el-button type="warning" @click="goBack">返回上一页</el-button>
          <el-button type="primary" @click="goHome">返回首页</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    methods: {
      goBack() {
        this.$router.go(-1);
      },
      goHome() {
        this.$router.push("/");
      }
    }
  }

</script>