<template>
  <header class="header">
    <div class="showFollow"></div>
    <div class="showFont">无关注，不精彩！</div>
  </header>
</template>
<script>
export default {

}
</script>
<style scoped>
.header{
  display: flex;
  height:30px;
  padding: 18.5px 2.5% 24px 2.5%;
}
.showFollow{
  width: 30px;
  height: 30px;
  background: #cccccc;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
}
.showFont{
  height: 30px;
  line-height: 30px;
  padding-left:3.7%;
  color: #a7a7a7;
  font-size: 14px;
  white-space: nowrap;
}
</style>
