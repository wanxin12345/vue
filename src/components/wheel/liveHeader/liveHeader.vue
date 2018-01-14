<template>
  <div class="liveHeader">
    <router-link to="/live/hot"     class="headerTab distance" active-class="header-active">热门</router-link>
    <router-link to="/live/newest"  class="headerTab distance" active-class="header-active">最新</router-link>
    <router-link to="/live/field"   class="headerTab"          active-class="header-active">秀场</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.liveHeader{
  width: 100%;
  height: 44px;
  text-align: center;
  background:#fff;
  position: fixed;
  top:0;
  left:0;
  border-bottom:0.5px #f2f2f2 solid;
  color:#848484;
  z-index: 999;
}
.header-active{
  border-bottom:2px #2b102e solid;
  color:#1c1f1e;
}
.headerTab{
  display: inline-block;
  height:42px;
  line-height: 42px;
}
.distance{
  margin-right:9.7%
}
</style>
