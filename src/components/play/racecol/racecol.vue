<template>
  <div>
    <div class="headBac">今天</div>
    <race-wheel :races="races"></race-wheel>
  </div>
</template>

<script>
import raceWheel from '../../wheel/racecolWheel/raceWheel'
export default {
  components: {
    raceWheel
  },
  data () {
    return {
      races: []
    }
  },
  methods: {
    getRaces () {
      let _this = this
      this.$ajax.get('http://localhost:5000/static/races.json').then(function (res) {
        _this.races = res.data.races
      })
    }
  },
  mounted () {
    this.$nextTick(function () {
      this.getRaces()
    })
  }
}
</script>

<style scoped>
/* today div */
.headBac{
  background: #f2f2f2;
  padding: 8px 0;
  text-align: center;
  font-size: 12px;
  color:#1b201e;
}
</style>
