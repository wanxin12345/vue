<template>
  <div class="field">
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
    getFields () {
      let _this = this
      this.$ajax.get('http://localhost:5000/static/liveHotPers.json').then(function (res) {
        _this.livers = res.data.fields
      })
    }
  },
  mounted () {
    this.$nextTick(function () {
      this.getFields()
    })
  }
}
</script>

<style scoped>
.field{
  background: #f2f2f2;
}
</style>
