<template>
  <div>
    <div class="a8_pact">
      <img src="../../../assets/body/live/hot/live-hot_02.png">
    </div>
    <live-hot-per :livePers="pers"></live-hot-per>
  </div>
</template>

<script>
import liveHotPer from '../../wheel/liveHotPer/liveHotPer'
export default {
  components: {
    liveHotPer
  },
  data () {
    return {
      pers: []
    }
  },
  methods: {
    getLiveHotPers () {
      let _this = this
      this.$ajax.get('http://localhost:5000/static/liveHotPers.json').then(function (res) {
        _this.pers = res.data.pers
      })
    }
  },
  mounted () {
    this.$nextTick(function () {
      this.getLiveHotPers()
    })
  }
}
</script>

<style scoped>
.a8_pact{
  width: 100%;
  padding-bottom: 3px;
}
.a8_pact img{
  width: 100%;
}
</style>
