<template>
  <div>
    <div v-for="item in myLeagues">
      <!-- tematic name -->
      <div class="typeName">
        <span v-text="item.type"></span>
        <span class="editClick">编辑</span>
      </div>
      <!-- Circulation box -->
      <div v-for="mains in item.mainInfo">
        <div class="longBack"></div>
        <!-- Topic box -->
        <div class="contentInfo">
          <!-- Put the picture in the box -->
          <div class="imgBox">
            <img :src="mains.myLeaImg">
          </div>
          <!-- content box -->
          <div class="fontBox">
            <div class="title" v-text="mains.myLeaName"></div>
            <div class="info" v-text="mains.myLeaInfo"></div>
          </div>
          <!-- arrow -->
          <div class="thenInfo"></div>
        </div>
        <!-- v-if="mains.news.isHas" -->
        <div v-if="mains.news" class="newsSet">
          <div class="aNewsInfo" v-for="newo in mains.newsInfo">
            <div class="aNewsImg">
              <img :src="newo.src">
            </div>
            <div class="aNewsCont">
              <div v-text="newo.title" :class="{'rightBor':newo.flag}"></div>
              <div v-text="newo.info" :class="{'rightBor':newo.flag}"></div>
            </div>
          </div>
        </div>
        <!-- v-if="mains.nbaParts.isHas" -->
        <div v-if="mains.nbaParts" class="nbaPartsSet">

          <div class="aPartInfo" v-for="part in mains.nbaPartsInfo">
            <div class="partAll">
              <div class="partImg"><img :src="part.src"></div>
              <div v-text="part.name"></div>
            </div>
            <div class="holdRight" v-text="part.score"></div>
          </div>

          <div class="aPartInfo leri">
            <div class="recording">
              <div class="reSameBox"><img src="../../../assets/body/play/league/league_30.png"></div>
              <div>录像</div>
            </div>
            <div class="collection">
              <div class="reSameBox"><img src="../../../assets/body/play/league/league_33.png"></div>
              <div>集锦</div>
            </div>
          </div>
          <div class="aPartInfo leri">
            <div class="recording">
              <div class="reSameBox"><img src="../../../assets/body/play/league/league_30.png"></div>
              <div>录像</div>
            </div>
            <div class="collection">
              <div class="reSameBox"><img src="../../../assets/body/play/league/league_33.png"></div>
              <div>集锦</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    myLeagues: {
      type: Array,
      default: []
    }
  }
}
</script>

<style scoped>
.editClick{
  float: right;
  margin-right: 5%;
  color:#1b201e;
  font-size: 12px;
}
.typeName{
  padding-top:6px;
  padding-left: 3.2%;
  background: #f2f2f2;
  color:#9b9b9b;
  font-size: 14px;
}
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
/* newsInfo */
.newsSet,.nbaPartsSet,.aNewsInfo,.aPartInfo,.partAll,.recording,.collection{
  display: flex;
  flex-wrap: wrap;
}
.newsSet,.nbaPartsSet{
  width: 100%;
  border-top: 1.5px solid #f2f2f2;
}
.aNewsInfo,.aPartInfo{
  width:50%;
  max-width: 50%;
  box-sizing: border-box;
}
.aNewsImg{
  width:32%;
  min-width:32%;
  margin-left:3.2%;
  margin-top:13px;
}
.aNewsImg img{
  width: 100%;
  max-width: 100%;
}
.aNewsCont{
  width:64.8%;
  padding:12px 0 12px 0;
}
.rightBor{
  border-right:1px solid #f2f2f2;
}
.aNewsCont>div:nth-of-type(1){
  width: 94%;
  padding-right:6%;
  height:40px;
  font-size: 15px;
  color:19211e;
  text-align:center;
  text-overflow: ellipsis;
}
.aNewsCont>div:nth-of-type(2){
  width: 94%;
  font-size: 9px;
  color:19211e;
  text-align:right;
  padding:12px 6% 0 0;
}
/* nbaPartsInfo */
.partAll{
  padding:9px 0 0 4%;
  width: 46%;
}
.holdRight{
  padding:9px 8% 0 0;
  width: 42%;
  text-align: right;
}
.partImg{
  width:20.5px;
  height: 18.5px;
  padding-right:5%;
}
.partImg img{
  width: 100%;
  max-width: 100%;
}
/* recording && collection */
.recording{
  justify-content:flex-start;
}
.collection{
  justify-content:flex-end;
}
.recording img,.collection img{
  width: 13px;
  height: 13.5px;
}
.recording,.collection{
  width: 50%;
}
.reSameBox{
  padding-right: 6px;
}
.leri{
  padding:13px 4% 8px 2%;
}
</style>
