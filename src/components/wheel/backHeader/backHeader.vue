<template>
  <header>
    <div class="backIco"><img  @click="backTopPage" src="../../../assets/body/myself/back.png"></div>
    <div class="title"   v-text="headers[1]"></div>
    <div class="more"    v-text="headers[2]"></div>
  </header>
</template>
<script>
export default {
  methods: {
    backTopPage () {
      this.$emit('backMain')
    }
  },
  props: {
    headers: {
      type: Array,
      default: []
    }
  }
}
</script>
<style scoped>
header,.backIco{
  display: flex;
  align-items: center;
}
header{
  justify-content:space-between;
  padding:0 10% 0 3%;
}
.backIco{
  width: 14.5px;
  height:26px;
  padding: 21.25px 2%;
}
.backIco img{
  max-width: 100%;
}
.title{
  font-size: 14px;
  color:#a7a7a7;
}
.more{
  font-size: 12px;
  color:#666666;
}
</style>
