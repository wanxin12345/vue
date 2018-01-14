<template>
  <div>

    <div class="" v-for="item in balls">
      <div class="fl_title swap" v-text="item.title"></div>
      <div class="fl_edg">
        <div class="oneEdg" v-for="edg in item.content">

          <span class="swap" v-text="edg.name"></span>
          <img :src="edg.src">

        </div>
      </div>
    </div>

  </div>
</template>
<script>
export default {
  props: {
    balls: {
      type: Array,
      default: []
    }
  }
}
</script>
<style scoped>
.fl_title{
  background:#f2f2f2;
  color: #a7a7a7;
  font-size: 14px;
  padding:7px 4% 7px 6.2%;
}
.fl_edg{
  display: flex;
  flex-wrap: wrap;
  padding-top:17.5px;
}
.oneEdg{
  display: flex;
  flex-direction:column-reverse;
  width: 14%;
  margin:0 3%;
  padding-bottom: 17px;
}
.oneEdg img{
  width: 45%;
  margin: 0 auto;
  background: #ffffff;
}
.oneEdg span{
  margin-top:12px;
  text-align: center;
  color:#161616;
  font-size: 12px;
}
.swap{
  white-space: nowrap;
}
</style>
