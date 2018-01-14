<template>
  <div>
    <div class="header">
      <div class="date">日期</div>
      <div class="handle">操作</div>
      <div class="modify">变更</div>
      <div class="residue">剩余</div>
    </div>
    <div class="content" v-for="item in detail">
      <div class="data_date">
        <div class="clock" v-text="item.clock"></div>
        <div class="day" v-text="item.day"></div>
      </div>
      <div class="fontSet" v-text="item.handle"></div>
      <div class="fontSet" v-text="item.modify"></div>
      <div class="fontSet" v-text="item.residue"></div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    detail: {
      type: Array,
      default: []
    }
  }
}
</script>
<style scoped>
.header{
  display: flex;
  color:#ede2de;
  font-size: 15px;
}
.header>div,.content>div{
  height: 49px;
  line-height: 49px;
  text-align: center;
  white-space: nowrap;
  width: 25%;
  box-sizing: border-box;
}

.content{
  display: flex;
}
.content>div{
  border: 0.5px solid #f2f2f2;
}

.data_date div{
  display:block;
  height:50%;
}
.clock{
  color:#6f6f6f;
  line-height:200%;
}
.day{
  font-size: 9px;
  color:#666666;
  line-height:200%;
}

.fontSet{
  font-size: 15px;
  color:#6f6f6f;
}
.date{
  background:#ea6200;
}
.handle{
  background:#83cdc0;
}
.modify{
  background:#00a1e7;
}
.residue{
  background:#f09148;
}
</style>
