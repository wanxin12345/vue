<template>
  <div class="thematic">
    <v-carousel :carousel="carousels"></v-carousel>
    <recent-update></recent-update>
    <video-show  :allVideos="first"></video-show>
    <news-show :allNews="one"></news-show>
    <video-show :allVideos="second"></video-show>
    <news-show  :allNews="two"></news-show>
  </div>
</template>

<script>
import recentUpdate from '../../wheel/recentUpdate/recentUpdate.vue'
import videoShow from '../../wheel/videoShow/videoShow.vue'
import newsShow from '../../wheel/newsShow/newsShow.vue'
import vCarousel from '../../wheel/carousel/carousel.vue'
export default {
  components: {
    videoShow,
    newsShow,
    recentUpdate,
    vCarousel
  },
  data () {
    return {
      first: [],
      second: [],
      one: [],
      two: [],
      carousels: []
    }
  },
  methods: {
    getThematic () {
      var _this = this
      this.$ajax.get('http://localhost:5000/static/thematic.json').then(function (res) {
        _this.first = res.data.first
        _this.second = res.data.second
        _this.one = res.data.one
        _this.two = res.data.two
        _this.carousels = res.data.carousel
      })
    }
  },
  mounted () {
    this.$nextTick(function () {
      this.getThematic()
    })
  }
}
</script>

<style>
.thematic{
  width:100%;
	margin-top:48px;
}
</style>
