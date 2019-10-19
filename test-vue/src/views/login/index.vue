<template>
  <div class="main">
    <el-form ref="form" :model="form" label-width="80px" class="login-form">
        <h2 class="login-title">黄图乐园登录</h2>
      <el-form-item label="账号">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.password" type="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: "",
        password: "",
      }
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    }
  }
};
</script>

<style scoped>
.main {
  position: absolute;
  width: 100%;
  height: 100%;
  background: url("../../assets/loginnn.jpg");
}

.login-form{
    width:350px;
    margin:160px auto;
    background-color: rgb(255,255,255,0.6);
    padding:28px;
    border-radius:20px;
}

.login-title{
    color:rgba(31, 17, 233);
    text-align: center;
}
</style>