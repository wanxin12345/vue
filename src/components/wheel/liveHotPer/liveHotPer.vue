<template>
  <div>
    <div class="allLives" v-for="item in livePers">
      <div class="live_bac"></div>

      <div class="live_per">

        <div class="live_title">

          <div class="live_portrait">
            <img :src="item.portrait">
          </div>

          <div class="live_center">
            <div class="live_nickname">
              <span>{{ item.nickname }}</span>
              <span class="mapAddress">{{ item.add.content }}</span>
            </div>
            <div class="live_sign">
              <div class="live_star"><span class="setDown"><span class="star smaller"></span></span>{{ item.star }}</div>
              <div class="live_type" v-text="item.type"></div>
            </div>
          </div>

          <div class="live_watchers">{{item.watchers}} 在看</div>

        </div>

        <div class="live_cover">
          <img :src="item.cover">
        </div>

      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    livePers: {
      type: Array,
      default: []
    }
  }
}
</script>
<style scoped>
.allLives{
  padding-bottom:5px;
}

.live_bac{
  height:8px;
  background: #f7f4f6;
}
.live_title{
  display: flex;
  padding:19px 4% 10px 4%;
}

.live_portrait{
  width: 40px;
}
.live_portrait img{
  width: 100%;
  max-width: 100%;
}

.live_center{
  width: 77%;
}
.live_nickname{
  font-size: 15px;
  text-indent: 6px;
  margin-bottom:4px;
}
.live_sign{
  display: flex;
}
.live_sign div{
  margin-left: 6px;
}
.mapAddress{
  font-size: 9px;
  color:#848484;
  padding-left:20px;
  background: url('../../../assets/common/common_map.png') 5px 3px no-repeat;
}

.live_star,.live_type{
  color:#ffffff;
  font-size: 10px;
  padding:3px 6px 5px 6px;
  border-radius: 3px;
}
.live_star{
  background: #c5eca4;
}
.live_type{
  background: #f6c501;
}

.live_watchers{
  color:#fed051;
  font-size: 9px;
  white-space: nowrap;
}

.live_cover{
  width: 100%;
}
.live_cover img{
  width:100%;
}


.setDown{
  position: relative;
  top: 11px;
  padding-right: 3px;
}
.star.smaller {
    border-color: #ffffff transparent transparent transparent;
    border-style: solid;
    border-top-width: 5px;
    border-right-width: 10px;
    border-left-width: 10px;
    height: 0;
    position: relative;
    margin-top:10px;
    top: 0px;
    width: 0;
}
.star.smaller:before,
.star.smaller:after {
    border-color: #ffffff transparent transparent transparent;
    border-style: solid;
    border-top-width: 5px;
    border-right-width: 10px;
    border-left-width: 10px;
    content: '';
    display: block;
    height: 0;
    left: -10px;
    position: absolute;
    top: -5px;
    width: 0;
}
.star.smaller:before {
    transform: rotate(70deg);
}
.star.smaller:after {
    transform: rotate(-70deg);
}
</style>
