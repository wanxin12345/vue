<template>
  <div class="video">
    <video-show :allVideos="allVideos"></video-show>
  </div>
</template>

<script>
import videoShow from '../../wheel/videoShow/videoShow.vue'
export default {
  components: {
    videoShow
  },
  data () {
    return {
      allVideos: []
    }
  },
  mounted () {
    this.$nextTick(function () {
      this.getVideos()
    })
  },
  methods: {
    getVideos () {
      var _this = this
      this.$ajax.get('http://localhost:5000/static/videos.json').then(function (res) {
        _this.allVideos = res.data.videos
      })
    }
  }
}
</script>

<style scoped>
.video{
	width:100%;
	margin-top:48px;
}
</style>
