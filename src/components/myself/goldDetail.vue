<template>
  <transition name="detail">
    <div class="goldDetail" v-if="isShow">
      <back-header @backMain="backMine" :headers="headers"></back-header>
      <gold-table :detail="detail"></gold-table>
    </div>
  </transition>
</template>

<script>
import backHeader from '../wheel/backHeader/backHeader'
import goldTable from '../wheel/goldTable/goldTable'
export default {
  components: {
    backHeader,
    goldTable
  },
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
  methods: {
    backMine () {
      this.$emit('goMine')
    },
    getDetail () {
      let _this = this
      this.$ajax.get('http://localhost:5000/static/goldDetail.json').then(function (res) {
        _this.detail = res.data.detail
      })
    }
  },
  mounted () {
    this.$nextTick(function () {
      this.getDetail()
    })
  },
  data () {
    return {
      detail: []
    }
  }
}
</script>

<style scoped>
.goldDetail{
  width: 100%;
  height: 100%;
  z-index: 9999;
  position: fixed;
  top:0;
  left: 0;
  background: #ffffff;
}


.detail-enter-active {
  animation: pageLeft .5s;
}
.detail-leave-active {
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
