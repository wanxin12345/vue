<template>
  <div>
    <my-league :myLeagues="myLeagues"></my-league>
    <league-one-info :parts="leagues"></league-one-info>
  </div>
</template>

<script>
import leagueOneInfo from '../../wheel/leagueOneInfo/leagueOneInfo'
import myLeague from '../../wheel/myLeague/myLeague'
export default {
  data () {
    return {
      myLeagues: [],
      leagues: []
    }
  },
  components: {
    leagueOneInfo,
    myLeague
  },
  methods: {
    getLeagues () {
      let _this = this
      _this.$ajax.get('http://localhost:5000/static/playLeague.json').then(function (res) {
        _this.myLeagues = res.data.myLeagues
        _this.leagues = res.data.moreParts
      })
    }
  },
  mounted () {
    this.$nextTick(function () {
      this.getLeagues()
    })
  }
}
</script>

<style scoped>

</style>
