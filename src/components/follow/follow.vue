<template>
  <div class="followInfo">
    <follow-header></follow-header>
    <follow-edg :balls="balls"></follow-edg>
    <follow-more></follow-more>
  </div>
</template>
<script>
import followHeader from '../wheel/followHeader/followHeader'
import followEdg from '../wheel/followEdg/followEdg'
import followMore from '../wheel/followMore/followMore'
export default {
  components: {
    followHeader,
    followEdg,
    followMore
  },
  data () {
    return {
      balls: []
    }
  },
  methods: {
    getEdgs () {
      let _this = this
      this.$ajax.get('http://localhost:5000/static/follow.json').then(function (res) {
        _this.balls = res.data.follows
      })
      console.log(this.$store.state.follows)
    }
  },
  mounted () {
    this.$nextTick(function () {
      this.getEdgs()
    })
  }
}
</script>
<style scoped>
.followInfo{
  padding-bottom:48px;
  background: #fff;
}
</style>
