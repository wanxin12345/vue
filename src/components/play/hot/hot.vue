<template>
  <div class="playHot">
    <play-new :playHots="playNews"></play-new>
  </div>
</template>

<script>
import playNew from '../../wheel/playNews/playNews'
export default {
  data () {
    return {
      playNews: []
    }
  },
  methods: {
    getPlayNews () {
      let _this = this
      this.$ajax.get('http://localhost:5000/static/playHot.json').then(function (res) {
        _this.playNews = res.data.playData
      })
    }
  },
  mounted () {
    this.$nextTick(function () {
      this.getPlayNews()
    })
  },
  components: {
    playNew
  }
}
</script>

<style scoped>

</style>
