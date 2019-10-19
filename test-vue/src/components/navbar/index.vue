<template>
    <div class="navbar">
            <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="purple"
      text-color="black"
      active-text-color="#ffd04b"
      :router="true">
      <el-menu-item index="/home">
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-menu-item index="/sn/">
        <i class="el-icon-sugar"></i>
        <span slot="title">少女</span>
      </el-menu-item>
      <el-menu-item index="/sf/">
        <i class="el-icon-ice-cream"></i>
        <span slot="title">少妇</span>
      </el-menu-item>
    </el-menu>
    </div>
</template>

<style scoped>
    span{
        color: yellow;
        font-size: 30px;
        height: 50px;
    }
    .el-menu{
        border-right:none;
    }
</style>