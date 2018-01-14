<template>
  <div>
    <div class="fl" v-for="item in races">
      <!-- first -->
      <div class="fl_title">
        <i class="fl_hotspot" v-text="item.serial"></i>
        <span class="fl_headline font_col" v-text="item.serCon"></span>
      </div>
      <!-- second -->
      <div class="fl_play">
        <!-- left -->
        <div class="fl_troops">

          <div class="troops_one">
            <div><img :src="item.footOneIco"></div>
            <div><span>{{item.footOneName}}</span></div>
          </div>

          <div class="troops_two">
            <div><img :src="item.footTwoIco"></div>
            <div><span>{{item.footTwoName}}</span></div>
          </div>

        </div>
        <!-- center -->
        <div class="fl_center">
          <p v-text="item.playTime"></p>
        </div>
        <!-- right -->
        <div class="warn"><img src="../../../assets/common/common_42.png"></div>
      </div>
      <!-- third -->
      <div class="fl_disclose">
        <span class="font_disclose font_b">爆料:</span>
        <span class="font_disclose font_col" v-text="item.disclose"></span>
      </div>
      <!-- forth -->
      <div class="fl_person" v-text="item.like"></div>

    </div>
  </div>
</template>
<script>
export default {
  props: {
    races: {
      type: Array,
      default: []
    }
  }
}
</script>
<style scoped>
.fl{
  padding: 9px 3%;
  border-bottom: 1px #f2f2f2 solid;
}
/* first */
.fl_title{
  padding-bottom:10px;
}
.fl_hotspot{
  font-size: 15px;
  font-weight: bold;
  color:#ff1545;
}
.fl_headline{
  font-size: 14px;
}
/* second */
.fl_play{
  display: flex;
  justify-content:flex-end;
}
.fl_troops{
  width: 15.2%;
}

.troops_one,.troops_two{
  display: flex;
  flex-wrap:nowrap;
  margin-bottom:11px;
}
.troops_one div:nth-of-type(1) img,.troops_two div:nth-of-type(1) img{
  width:21px;
  height:20px;
}
.troops_one div:nth-of-type(2),.troops_two div:nth-of-type(2){
  white-space: nowrap;
  color:#1b201e;
  font-size: 15px;
  padding-left: 5px;
  display: flex;
  align-items:center;
}

.fl_center{
  width: 77%;
  display: flex;
  align-items:center;
  margin-bottom:11px;
}
.fl_center p{
  width: 100%;
  text-align: center;
}
.warn{
  display:flex;
  align-items:center;
}
.warn img{
  width: 20.5px;
  height: 22.5px;
}

.fl_disclose{
  padding: 3px 3% 5px 3%;
  background:#f2f2f2;
  border-radius: 3px;
}
.font_disclose{
  font-size: 12px;
}
.font_b{
  font-weight: bold;
}
.font_col{
  color:#848484;
}

.fl_person{
  background: url('../../../assets/common/common_06.png') 0px 10px no-repeat;
  padding: 13px 0 0 20px;
  background-size: 14.5px 14px;
  color:#b2b5b4;
  font-size: 11px;
  white-space: nowrap;
  width:40px;

}
</style>
