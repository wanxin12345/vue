<template>
  <div class="highlights">
    <video-show :allVideos="videos"></video-show>
  </div>
</template>

<script>
import videoShow from '../../wheel/videoShow/videoShow'
export default {
  components: {
    videoShow
  },
  data () {
    return {
      videos: []
    }
  },
  methods: {
    getVideos () {
      var _this = this
      this.$ajax.get('http://localhost:5000/static/high.json').then(function (res) {
        _this.videos = res.data.highlights
      })
    }
  },
  mounted () {
    this.$nextTick(function () {
      this.getVideos()
    })
  }
}
</script>

<style scoped>
.highlights{
	width:100%;
	margin-top:48px;
}
</style>
