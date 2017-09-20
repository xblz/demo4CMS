<template>
  <div class="loginBg">
    <transition name="el-fade-in">
      <div class="loginGroup" v-show="show">
        <div style="position:relative;">
          <el-form :model="loginForm" :rules="loginRules" ref="loginForm" label-width="80px">
            <el-form-item label="手机号" prop="mobile" style="padding-right: 22px;">
              <el-input v-model="loginForm.mobile"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="passWord" style="padding-right: 22px">
              <el-input type="password" v-model="loginForm.passWord"></el-input>
            </el-form-item>
            <el-form-item label-width="0">
              <el-button @click="resetForm('loginForm')">重置</el-button>
              <el-button type="primary" @click="submitForm('loginForm')">登录</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>

  import {login} from "./../api/sampleApi"

  export default {
    methods: {
      submitForm(formName) {
        const context = this;
        this.$refs[formName].validate((valid) => {
          if (valid) {
            login(context.loginForm, function (data) {
              setTimeout(function () {
                context.$router.push({path: "/sample"});
              }, 3000)
            })
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    },
    mounted() {
      const context = this;
      setTimeout(function () {
        context.show = true
      }, 300)
    },
    data() {
      return {
        show: false,
        loginForm: {
          mobile: '',
          passWord: ''
        },
        loginRules: {
          mobile: [
            {required: true, message: '请输入手机号', trigger: 'blur'}
          ],
          passWord: [
            {required: true, message: '请输入密码', trigger: 'blur'}
          ]
        }
      };
    }
  }

</script>