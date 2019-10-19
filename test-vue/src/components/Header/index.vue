<template>
  <div class="header">
    <a href="#/">
      <img class="logo" src="../../assets/logoo.png" width="25px" />
      <span class="title">欢迎来到美图天堂</span>
    </a>

        <el-dropdown trigger="click" class="dropdown">
          <span class="el-dropdown-link">
            下拉菜单
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item icon="el-icon-lollipop">少女</el-dropdown-item>
            <el-dropdown-item icon="el-icon-loading">少妇</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
  </div>
</template>

<style scoped>
.logo {
  /* margin: 10px; */
  vertical-align: middle;
  padding: 0 10px 0 40px;
}
.title {
  position: absolute;
  color: yellow;
}

.el-dropdown-link {
  cursor: pointer;
  color: yellow;
  font-size:25px;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.demonstration {
  display: block;
  color: #8492a6;
  font-size: 14px;
  margin-bottom: 20px;
}

.dropdown{
    float: right;
    margin-right: 5%;
}

span{
  font-size: 25px;
}
</style>
