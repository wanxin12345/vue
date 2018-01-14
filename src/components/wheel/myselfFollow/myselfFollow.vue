<template>
  <div>
    <div class="myLive">
      <img src="../../../assets/body/myself/myself_23.png">
      <div class="cont">我的直播</div>
      <img width="15px" src="../../../assets/body/play/league/league_06.png">
    </div>

    <div class="topBac"></div>

    <div class="myFollow">
      <div class="followEdg">
        <img src="../../../assets/body/myself/myself_26.png">
        <div class="cont">我关注的球队</div>
        <img src="../../../assets/body/play/league/league_06.png">
      </div>
      <div class="noFo">
        你还没有关注任何球队呢~
      </div>
    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style scoped>
.myLive,.followEdg{
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  padding-left:3%;
}
.myLive{
  height:46px;
}
.followEdg{
  height:30px;
  border-bottom: 1px #f2f2f2 solid;
}
.cont{
  color:#404040;
  font-size: 9px;
  width:77%;
  min-width: 77%;
  text-indent: 10px;
}
.mylive>img:nth-of-type(1){
  width:16px;
  height:10.5px;
  margin-left:3%;
}

.followEdg >img:nth-of-type(1){
  width:14px;
  height:13.5px;
}
.followEdg>img:nth-of-type(2){
  width:15px;
  margin-left:6%;
}

.topBac{
  background: #f2f2f2;
  height: 8px;
}
.noFo{
  height: 62.5px;
  line-height: 62.5px;
  color:#a9a9a9;
  font-size:12px;
  text-align:center;
}
</style>
