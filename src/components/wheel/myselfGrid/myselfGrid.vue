<template>
  <div>
    <div class="topBac"></div>
    <div class="grids">
      <div class="grid" v-for="item in grids">
        <div class="firrow">
          <img :src="item.src">
          <div class="gridName" v-text="item.name"></div>
          <div class="rgBor" :class="{'borderShow':item.borderRight}"></div>
        </div>
        <div class="secrow" v-text="item.bottomInfo"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    grids: {
      type: Array,
      default: []
    }
  }
}
</script>
<style scoped>
.topBac{
  background: #f2f2f2;
  height:8px;
}
.grids{
  display: flex;
  flex-wrap: wrap;
}

.grid{
  width: 47.5%;
  padding:12px 0 12px 2.5%;
  border-bottom:1px solid #f2f2f2;
  border-bottom-width: 90%;
}

.firrow{
  display: flex;
  align-items: center;
}
.firrow img{
  width:26px;
  height:26px;
}
.firrow .gridName{
  white-space: nowrap;
  font-size: 12px;
  color:#545454;
  text-indent: 8px;
  width:80%;
}

.rgBor{
  height:40px;
  position: relative;
  top:10px;
  margin-left:3%;
}
.borderShow{
  width:0.5px;
  border-right:1px solid #dddddd;
}

.secrow{
  color:#959595;
  font-size: 9px;
  margin-top:8px;
}
</style>
