<template>
  <div class="guess">
    <them-news :allNews="guess"></them-news>
  </div>
</template>

<script>
import themNews from '../../wheel/newsShow/newsShow.vue'
export default {
  components: {
    themNews
  },
  data () {
    return {
      guess: []
    }
  },
  mounted () {
    this.$nextTick(function () {
      this.getGuess()
    })
  },
  methods: {
    getGuess () {
      var _this = this
      this.$ajax.get('http://localhost:5000/static/guess.json').then(function (res) {
        _this.guess = res.data.guess
      })
    }
  }
}
</script>

<style>
.guess{
	width:100%;
	margin-top:48px;
}
</style>
