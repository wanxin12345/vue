<template>
  <header class="myHeader">
    <div class="userPortrait"  @click="popupShow">
      <img src="../../../assets/body/myself/myself_03.png">
    </div>
    <div class="userNickname fontSizelg">
      <span @click="popupShow">点击登录</span>
    </div>
    <div class="userEmail">
      <img src="../../../assets/body/myself/myself_05.png">
    </div>
  </header>
</template>
<script>
export default {
  methods: {
    popupShow () {
      this.$emit('dialog')
    }
  }
}
</script>
<style scoped>
.myHeader{
  padding:23.5px 8% 30px 8%;
  background:#282828;
  display:flex;
}
.fontSizelg{
  font-size: 15px;
  text-indent: 13px;
}

.userPortrait{
  width:16.8%;
}
.userPortrait img,.userEmail img{
  width: 100%;
  max-width:100%;
}

.userNickname{
  display: flex;
  align-items:center;
  color:#fefefe;
  width: 75%;
}


.userEmail{
  width: 7.2%;
}
</style>
