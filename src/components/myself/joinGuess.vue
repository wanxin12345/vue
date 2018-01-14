<template>
  <transition name="guess">
    <div class="guessPage" v-if="isShow">
      <back-header @backMain="backMine" :headers="headers"></back-header>
      <!--活塞VS步行者-->
      <join-part1 :content="vs1"></join-part1>
      <!--维克托-奥拉迪波的得分-->
      <join-part2 :content="num1"></join-part2>
      <div class="gray"></div>
      <!--魔术VS尼克斯-->
      <join-part1 :content="vs2"></join-part1>
      <!--阿龙-戈登的篮板数-->
      <join-part2 :content="num2"></join-part2>
    </div>
  </transition>
</template>

<script>
import joinPart1 from './../wheel/join/joinpart1'
import joinPart2 from './../wheel/join/joinpart2'
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
    backHeader,
    joinPart1,
    joinPart2
  },
  methods: {
    backMine () {
      this.$emit('goMine')
    },
    getJoins () {
      let _this = this
      this.$ajax.get('http://localhost:5000/static/join.json').then(function (res) {
        _this.vs1 = res.data.vs1
        _this.vs2 = res.data.vs2
        _this.num1 = res.data.num1
        _this.num2 = res.data.num2
      })
    }
  },
  data () {
    return {
      vs1: [],
      vs2: [],
      num1: [],
      num2: []
    }
  },
  mounted () {
    this.$nextTick(function () {
      this.getJoins()
    })
  }
}
</script>

<style scoped>
.guessPage{
  width: 100%;
  height: 100%;
  z-index: 9999;
  position: fixed;
  top:0;
  left: 0;
  background: #ffffff;
}

.guess-enter-active {
  animation: pageLeft .5s;
}
.guess-leave-active {
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
