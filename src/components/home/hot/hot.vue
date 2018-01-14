<template>
  <div class="hot">
    <div class="hot_caro">
  		<img src="../../../assets/body/home/hot/home_hot_01.png">
  	</div>
    <nba-play :parts="nbaParts"></nba-play>
    <middle-ui></middle-ui>
    <news-show :allNews="hotNews_01"></news-show>
    <sports-live :sports="sports"></sports-live>
    <news-show :allNews="hotNews_02"></news-show>
  </div>
</template>

<script>
import nbaPlay from '../../wheel/nbaPlay/nbaPlay.vue'
import middleUi from '../../wheel/middleUi/middleUi.vue'
import newsShow from '../../wheel/newsShow/newsShow.vue'
import sportsLive from '../../wheel/sportsLive/sportsLive.vue'
export default {
  components: {
    nbaPlay,
    middleUi,
    newsShow,
    sportsLive
  },
  data () {
    return {
      hotNews_01: [],
      hotNews_02: [],
      nbaParts: [],
      sports: []
    }
  },
  mounted () {
    this.$nextTick(function () {
      this.getHotNews()
    })
  },
  methods: {
    getHotNews () {
      var _this = this
      this.$ajax.get('http://localhost:5000/static/hotNews.json').then(function (res) {
        _this.hotNews_01 = res.data.hotNews1
        _this.hotNews_02 = res.data.hotNews2
        _this.nbaParts = res.data.nbaParts
        _this.sports = res.data.sports
      })
    }
  }
}
</script>

<style scoped>
.hot{
  width:100%;
  margin-top:48px;
}
.hot_caro{
  width:100%;
}
.hot_caro img{
  width:100%;
}
</style>
