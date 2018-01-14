<template>
  <div class="a8-header">
    <router-link to="/refresh/hot"        class="headerTab" active-class="header-active" append>热门</router-link>
    <router-link to="/refresh/video"      class="headerTab" active-class="header-active" append>视频</router-link>
    <router-link to="/refresh/highlights" class="headerTab" active-class="header-active" append>集锦</router-link>
    <router-link to="/refresh/thematic"   class="headerTab" active-class="header-active" append>专题</router-link>
    <router-link to="/refresh/guess"      class="headerTab" active-class="header-active" append>竞猜</router-link>
    <div class="addImg"><img src="../../../assets/header/header-add.png" /></div>
  </div>
</template>

<script>
  export default{

  }
</script>

<style scoped>
  .a8-header{
    position: fixed;
    top: 0;
    left:0;
    width: 100%;
    height: 42.5px;
    border-bottom: 1px #d2d2d2 solid;
    background: #FFFFFF;
    display: flex;
    z-index: 999;
  }
  .headerTab{
    width:11.2%;
    height:41px;
    font-size: 18px;
    margin:0px 3.2%;
    text-align: center;
    line-height: 46px;
    color: #8a8d8c;
    white-space:nowrap;
  }
  .header-active{
    border-bottom:2px #2b102e solid;
    color:#1c1f1e;
  }
  .addImg{
    width: 11.2%;
    line-height: 42.5px;
    margin-left: 0.8%;
    text-align: center;
  }
  .addImg img{
    width: 20px;
    height: 20px;
    vertical-align: middle!important;
  }
</style>
