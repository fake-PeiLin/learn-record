<template>
  <div class="header">
    <a href="#/">
      <img src="@/assets/logo.png" width="25px" class="logo" />
      <span class="company">梦学谷会员管理系统</span>
    </a>

    <el-dropdown @command="handleCommand">
      <span class="el-dropdown-link">
        {{user.name}}
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item icon="el-icon-edit" command="a">修改密码</el-dropdown-item>
        <el-dropdown-item icon="el-icon-s-fold" command="b">退出系统</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>

    <el-dialog title="修改密码" :visible.sync="dialogFormVisible" width="400px">
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        style="width: 300px"
      >
        <el-form-item label="原密码" prop="oldPass">
          <el-input type="password" v-model="ruleForm.oldPass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="新密码" prop="pass">
          <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
          <el-button @click="$refs['ruleForm'].resetFields()">重置</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import { logout } from "@/api/login.js";
import passwordApi from "@/api/password";
export default {
  data() {
    const validateOldPass = (rule, value, callback) => {
      passwordApi.checkPwd(this.user.id, value).then(response => {
        const resp = response.data;
        if (resp.flag) {
          callback();
        } else {
          callback(new Error(resp.message));
        }
      });
    };

    const validatePass = (rule, value, callback) => {
      if(value !== this.ruleForm.pass){
        callback(new Error('两次输入的密码不一致'))
      }else{
        callback()
      }
    }



    return {
      user: JSON.parse(localStorage.getItem("mxg-msm-user")),
      dialogFormVisible: false,
      ruleForm: {
        oldPass: "",
        pass: "",
        checkPass: ""
      },
      rules: {
        oldPass: [
          { required: true, message: "原密码不能为空", trigger: "blur" },
          { validator: validateOldPass, trigger: "blur" }
        ],
        pass: [{ required: true, message: "新密码不能为空", trigger: "blur" }],
        checkPass: [
          { required: true, message: "确认密码不能为空", trigger: "blur" },
          { validator: validatePass, trigger: "change" }
        ]
      }
    };
  },

  methods: {
    handleCommand(command) {
      switch (command) {
        case "a":
          this.handlePwd();
          break;
        case "b":
          this.handleLogout();
          break;
        default:
          break;
      }
    },
    handleLogout() {
      logout(localStorage.getItem("mxg-msm-token")).then(response => {
        const resp = response.data;
        if (resp.flag) {
          localStorage.removeItem("mxg-msm-token");
          localStorage.removeItem("mxg-msm-user");
          this.$router.push("/login");
        } else {
          this.$message({
            message: resp.message,
            type: "warning",
            duration: 500
          });
        }
      });
    },
    handlePwd() {
      this.dialogFormVisible = true;
      this.$nextTick(()=>{
        this.$refs['ruleForm'].resetFields()
      })
    },

    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          console.log("校验成功");
          passwordApi.updatePwd(this.user.id,this.ruleForm.checkPass).then(response=>{
            const resp=response.data
            this.$message({
              message: resp.message,
              type: resp.falg ? 'success' : 'warning'
            })
            if(resp.flag){
              this.handleLogout()
              this.dialogFormVisible=false
            }
          })
        } else {
          return false;
        }
      });
    }
  }
};
</script>

<style scoped>
.logo {
  vertical-align: middle;
  padding: 0px 10px 0px 40px;
}
.company {
  position: absolute;
  color: white;
}
.el-dropdown {
  float: right;
  margin-right: 40px;
}
.el-dropdown-link {
  color: white;
  cursor: pointer;
}
</style>