<template>
  <div>
    <div class="" v-for="item in parts">
      <div class="longBack"></div>
      <div class="contentInfo">
        <!-- Put the picture in the box -->
        <div class="imgBox">
          <img :src="item.src">
        </div>
        <!-- content box -->
        <div class="fontBox">
          <div class="title" v-text="item.name"></div>
          <div class="info" v-text="item.content"></div>
        </div>
        <!-- arrow -->
        <div class="thenInfo"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    parts: {
      type: Array,
      default: []
    }
  }
}
</script>

<style scoped>
.longBack{
  background:#f2f2f2;
  width: 100%;
  height:6px;
}
.contentInfo{
  padding:9px 4% 8px 3.2%;
  height:43px;
  display:flex;
  align-content:flex-end;
}
.title{
  padding-top: 3px;
  font-size: 15px;
  color:#1b201e;
}
.info{
  padding:8px 0;
  font-size: 12px;
  color:#888b8a;
}
.imgBox{
  width:12%;
  vertical-align: middle;
  display: flex;
  align-items:center;
}
.imgBox img{
  width:100%;
  max-height: 100%;
}
.fontBox{
  margin-left: 3%;
  width:74%;
}
.thenInfo{
  background: url('../../../assets/body/play/league/league_06.png') center no-repeat;
  width: 11%;
}
</style>
