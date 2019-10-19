<template>
  <div>
      <!-- <div class="header">欢迎来到黄图乐园</div>
      <div class="navbar">nnn</div>
      <div class="main">mmm</div> -->
      <Header></Header>
      <mainn></mainn>
      <navbar></navbar>
      
  </div>
</template>

<script>

import Header from './Header'
import mainn from './main'
import navbar from './navbar'

export default {
    components:{
        mainn,navbar,Header
    }
}
</script>

<style scoped>
.header{
    position:absolute;
    background-color: red;
    line-height: 50px;
    top:0;
    left: 0;
    right:0;
}
.navbar{
    position:absolute;
    top:50px;
    background-color:purple;
    left:0;
    bottom:0;
    width:200px;
    padding-top: 150px;
}
.main{
    position: absolute;
    top:50px;
    left:200px;
    background-color: pink;
    right:0;
    bottom:0;
}
</style>

