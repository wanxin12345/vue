<template>
  <div class="liversRow">
    <div class="liver" v-for="item in livers">

      <div class="newest_cover">
        <img :src="item.cover">
      </div>

      <div class="newest_cont">
        <div class="newest_nickname">
          <span>{{ item.nickname }}</span>
          <img src="../../../assets/body/live/newest/newest_10.png">
        </div>
        <div class="newest_sign">
          <div class="newest_type"      v-if="!item.add.isShow" v-text="item.type"></div>
          <div><span class="mapAddress" v-if="item.add.isShow">{{ item.add.content }}</span></div>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
export default {
  props: {
    livers: {
      type: Array,
      default: []
    }
  }
}
</script>
<style scoped>
.liversRow{
  display: flex;
  flex-wrap:wrap;
}
.liver{
  width: 43.5%;
  padding: 12px 2% 12px 4%;
}
.newest_cover{
  width: 100%;
}
.newest_cover img{
  width: 100%;
  max-width: 100%;
  min-width: 100%;
}

.newest_cont{
  display: flex;
  flex-direction:column;
  background: #ffffff;
  padding-left: 3%;
  padding-bottom: 10px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}
.newest_nickname{
  height: 30px;
  font-size: 15px;
  line-height: 30px;
  display: flex;
  align-items:center;
}
.newest_nickname img{
  width: 20px;
  height: 21px;
  margin-left: 5px;
}

.newest_type{
  color:#ffffff;
  display: inline;
  font-size: 10px;
  padding:1px 6px 2px 6px;
  border-radius: 3px;
  background: #f6c501;
}
.mapAddress{
  font-size: 9px;
  color:#848484;
  padding-left:15px;
  background: url('../../../assets/common/common_map.png') 0px 3px no-repeat;
}
</style>
