<template>
  <div class="newest">
    <livers-row :livers="livers"></livers-row>
  </div>
</template>

<script>
import liversRow from '../../wheel/liversRow/liversRow'
export default {
  components: {
    liversRow
  },
  data () {
    return {
      livers: []
    }
  },
  methods: {
    getLivers () {
      let _this = this
      this.$ajax.get('http://localhost:5000/static/liveHotPers.json').then(function (res) {
        _this.livers = res.data.pers
      })
    }
  },
  mounted () {
    this.$nextTick(function () {
      this.getLivers()
    })
  }
}
</script>

<style scoped>
.newest{
  background: #f2f2f2;
  height:580px;
}
</style>
