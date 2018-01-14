<template>
  <div>
    <div class="playHot" v-for="item in playHots">
      <div class="dateSet" v-text="item.today"></div>
      <div class="hotContent" v-for="news in item.content">
        <!-- In the header of the information -->
        <div class="sportName" v-text="news.sportName"></div>
        <!-- In the middle of the information -->
        <div class="centerInfo">
          <div class="imgDiv" v-if="!news.isTwo.flag">
            <img :src="news.isTwo.src">
          </div>
          <!-- Center left -->
          <div class="imgTwoDiv" v-if="news.isTwo.flag">
            <div class="smImg layout bottomDis">
              <div><img :src="news.isTwo.src1"></div>
              <div class="infoOverSet" v-text="news.isTwo.info1"></div>
            </div>
            <div class="smImg layout">
              <div><img :src="news.isTwo.src2"></div>
              <div class="infoOverSet" v-text="news.isTwo.info2"></div>
            </div>
          </div>
          <!-- Center -->
          <div class="titleDiv">
            <div class="textDis" v-text="news.title"></div>
            <div class="textDis">
              <div class="topDis" v-if="news.isLive.flag"  v-text="news.isLive.content"></div>
              <div class="timeSet topDis" v-if="!news.isLive.flag" v-text="news.isLive.time"></div>
            </div>
          </div>
          <!-- Center right -->
          <div class="liveInfo">
            <div class="liveIconFont" v-if="news.isLive.flag">直播中</div>
            <div class="liveIcon"     v-if="!news.isLive.flag"></div>
          </div>
        </div>
        <!-- At the bottom of the information -->
        <div class="botInfo">
          <span class="likeSet" v-text="news.like"></span>
          <span class="tvSet" v-text="news.tv"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    playHots: {
      type: Array,
      default: []
    }
  }
}
</script>

<style scoped>
.playHot{
  width:100%;
}
.dateSet{
  background: #f2f2f2;
  color:1b201e;
  font-size: 12px;
  text-align: center;
  height: 28px;
  line-height: 28px;
}
.hotContent{
  width:100%;
  border-bottom: 0.5px #cccbcb solid;
}
.sportName{
  height: 33px;
  line-height: 33px;
  text-indent: 3.1%;;
  font-size: 12px;
  color: #848484;
}
.infoOverSet{
  padding-left: 4px;
  white-space: nowrap;
}
.centerInfo{
  display: flex;
  padding: 0 3.1%;
}
.imgDiv{
  width:15.2%;
}
.layout{
  display:flex;
}
.imgDiv img{
  width:100%;
  max-width:100%;
}
.imgTwoDiv{
  min-width: 15.2%;
  max-width: 15.2%;
}
.bottomDis{
  margin-bottom: 8px;
}
.smImg{
  width:15.2%;
  max-width:15.2%;
  min-width:15.2%;
}
.smImg img{
  width: 21px;
  height: 20px;
}
.smImg span{
  font-size: 12px;
  color:#181d1b;
}

.botInfo{
  padding:9px 3.1% 11.5px 3.1%;
}
.topDis{
  padding-top:10px;
}
.likeSet{
  padding-left: 20px;
  color:#b2b5b4;
  font-size: 11px;
  background: url("../../../assets/common/common_06.png") 0px 0px no-repeat;
  background-size: 14.5px 14px;
}
.tvSet{
  float: right;
  color:#9da09f;
}
.titleDiv{
  width: 52.8%;
  padding:0 8%;
  color:#1b201e;
  font-size: 15px;
}
.textDis{
  text-align: center;
}
.textDis>div{
  white-space: nowrap;
}
.timeSet{
  font-size: 12px;
}
.liveInfo{
  padding-top:17px;
}
.liveIconFont{
  padding-left: 20px;
  background: url("../../../assets/body/play/hot/hot_06.png") 0px 2px no-repeat;
  background-size: 15px 11px;
  font-size: 12px;
  position: absolute;
  right:3.2%;
}
.liveIcon{
  background: url("../../../assets/common/common_42.png") 0px 0px no-repeat;
  background-size: 20.5px 22.5px;
  width: 20.5px;
  height: 22.5px;
  position: absolute;
  right:3.2%;
}
</style>
