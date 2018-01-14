<template>
  <div class="menuOut">
    <div class="menuCenter">
      <div class="aPart" v-for="(item,k) in menus">

        <div v-text="item.content" @click="menuOn(k)"></div>
        <img :src="item.src" @click="menuOn(k)">

      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    menus: {
      type: Array,
      default: []
    }
  },
  methods: {
    menuOn (n) {
      if (n === 0) {
        this.$emit('detailShow', [n, '金币明细', null])
      } else if (n === 1) {
        this.$emit('guessShow', [n, '竞猜', '已参与'])
      } else if (n === 2) {
        this.$emit('teskShow', [n, '金币任务', '指南'])
      }
    }
  }
}
</script>
<style scoped>
.menuOut{
  background:#f2f2f2;
  padding-bottom:5px;
}

.menuCenter{
  display: flex;
  flex-wrap: nowrap;
  width: 91%;
  margin:0 auto;
  box-shadow: 0 2px 8px 4px rgba(140,140,140,1) ;
  background:#ffffff;
  position: relative;
  top:-10px;
  padding:10px 0;
}

.aPart{
  display: flex;
  flex-direction: column-reverse;
  width: 12%;
  margin:0 6.2%;
}
.aPart img{
  width:70%;
  max-width:70%;
}
.aPart div{
  width:150%;
  text-align: center;
  color:#060606;
  font-size: 9px;
  white-space: nowrap;
  margin-top: 10px;
  margin-left: -40%;
}
</style>
