<template>
  <div>
    <div class="carousel">
      <div class="slideInfo" v-for="item in carousel">
        <div class="slideImg"><img :src="item.src"></div>
        <div v-text="item.title" class="titleInfo"></div>
      </div>
    </div>
    <div class="slidesControl">
      <span class="activeControl"></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="longDiv"></div>
  </div>
</template>

<script>
export default {
  props: {
    carousel: {
      type: Array,
      default: []
    }
  }
}
</script>

<style scoped>
.carousel{
  width: 100%;
  display: flex;
  padding-top:15px;
}
.slideInfo{
  border:0.5px solid #d2d2d2;
  width: 25.6%;
  margin-left: 5.5%;
}
.slideImg{
  text-align: center;
}
.slideImg img{
  width: 100%;
}
.titleInfo{
  padding: 3px 0;
  text-align: center;
  font-size: 15px;
}
.longDiv{
  width: 100%;
  height: 7px;
  background: #d2d2d2;
}
.slidesControl{
  padding:5px 0;
  text-align: center;
  margin: 0 auto;
}
.slidesControl span{
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #d2d2d2;
  opacity: 0.8;
  margin-left: 6px;
}
.activeControl{
  background:#2d2d2d!important;
}
</style>
