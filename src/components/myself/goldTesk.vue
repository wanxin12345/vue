<template>
  <transition name="tesk">
    <div class="goldTesk" v-if="isShow">
      <back-header @backMain="backMine" :headers="headers"></back-header>
      <div>
        lkiojoijo
      </div>
    </div>
  </transition>
</template>

<script>
import backHeader from '../wheel/backHeader/backHeader'
export default {
  props: {
    isShow: {
      type: Boolean,
      default: false
    },
    headers: {
      type: Array,
      default: []
    }
  },
  components: {
    backHeader
  },
  methods: {
    backMine () {
      this.$emit('goMine')
    }
  }
}
</script>

<style scoped>
.goldTesk{
  width: 100%;
  height: 100%;
  z-index: 9999;
  position: fixed;
  top:0;
  left: 0;
  background: #ffffff;
}

.tesk-enter-active {
  animation: pageLeft .5s;
}
.tesk-leave-active {
  animation: pageLeft .5s reverse;
}
@keyframes pageLeft {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
