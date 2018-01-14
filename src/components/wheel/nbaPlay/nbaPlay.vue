<template>
  <div class="nbaPart">
    <div class="onePart" v-for="item in parts">
      <div class="partTitle" :class="{'border':item.flag}">
        <div>NBA</div>
        <div>直播</div>
      </div>
      <div class="troopOne" :class="{'border':item.flag}">
        <div class="basePart">
          <img :src="item.srcOne">
          <span v-text="item.troopOneName"></span>
        </div>
        <div v-text="item.troopOneScore" class="infoRight"></div>
      </div>
      <div class="troopTwo" :class="{'border':item.flag}">
        <div class="basePart">
          <img :src="item.srcTwo">
          <span v-text="item.troopTwoName"></span>
        </div>
        <div v-text="item.troopTwoScore" class="infoRight"></div>
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
.nbaPart{
  display:flex;
}
.onePart{
  width: 50%;
  padding-top:15px;
  padding-bottom:8px;
}
.border{
  border-right:1px solid #cccccc;
}
.partTitle{
  display: flex;
}
.partTitle div:nth-of-type(1){
  width:40%;
  padding:0 0 10px 10%;
  color:#858585;
  font-size:9px;
}
.partTitle div:nth-of-type(2){
  width:40%;
  padding:0 10% 10px 0;
  text-align: right;
  color:#fa3c39;
  font-size:11px;
}

.troopOne,.troopTwo{
  display: flex;
}
.troopTwo .basePart{
  width: 40%;
  padding-left:10%;
}
.troopOne .basePart{
  width: 40%;
  padding-left:10%;
  padding-bottom: 8px;
}
.basePart img{
  width:21px;
  height:19.5px;
  vertical-align:middle;
}
.infoRight{
  width: 40%;
  padding-right: 10%;
  text-align: right;
  line-height: 20px;
}
</style>
