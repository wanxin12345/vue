<template>
	<keep-alive>
    <div class="myselfPage">
      <myself-header @dialog="isShowDia=!isShowDia"></myself-header>
      <myself-menu :menus="menus"
                  @detailShow ="showPages($event)"
                  @teskShow   ="showPages($event)"
                  @guessShow  ="showPages($event)"></myself-menu>
      <myself-follow></myself-follow>
      <myself-grid :grids="gridOne"></myself-grid>
      <myself-grid :grids="gridTwo"></myself-grid>
      <dia-log :isShow="isShowDia" @on-close="isShowDia=!isShowDia"></dia-log>

      <gold-detail :isShow="isShowDetail" :headers="menuInfos" @goMine="isShowDetail= !isShowDetail"></gold-detail>
      <gold-tesk   :isShow="isShowTesk"   :headers="menuInfos" @goMine="isShowTesk  = !isShowTesk"></gold-tesk>
      <join-guess  :isShow="isShowGuess"  :headers="menuInfos" @goMine="isShowGuess = !isShowGuess"></join-guess>
    </div>
  </keep-alive>
</template>

<script>
import myselfHeader from '../wheel/myselfHeader/myselfHeader'
import myselfMenu from '../wheel/myselfMenu/myselfMenu'
import myselfFollow from '../wheel/myselfFollow/myselfFollow'
import myselfGrid from '../wheel/myselfGrid/myselfGrid'
import diaLog from '../wheel/dialog/dialog'
import goldTesk from './goldTesk'
import goldDetail from './goldDetail'
import joinGuess from './joinGuess'
export default {
  components: {
    myselfHeader,
    myselfMenu,
    myselfFollow,
    myselfGrid,
    diaLog,
    goldTesk,
    goldDetail,
    joinGuess
  },
  data () {
    return {
      menus: [],
      gridOne: [],
      gridTwo: [],
      isShowDia: false,
      isShowDetail: false,
      isShowTesk: false,
      isShowGuess: false,
      menuInfos: []
    }
  },
  methods: {
    getMyselfData () {
      let _this = this
      this.$ajax.get('http://localhost:5000/static/myself.json').then(function (res) {
        _this.menus = res.data.menus
        _this.gridOne = res.data.gridOne
        _this.gridTwo = res.data.gridTwo
      })
    },
    showPages (val) {
      if (val[0] === 0) {
        this.isShowDetail = !this.isShowDetail
        this.menuInfos = [...val]
      } else if (val[0] === 1) {
        this.isShowGuess = !this.isShowGuess
        this.menuInfos = [...val]
      } else if (val[0] === 2) {
        this.isShowTesk = !this.isShowTesk
        this.menuInfos = [...val]
      }
    }
  },
  mounted () {
    this.$nextTick(function () {
      this.getMyselfData()
    })
  }
}
</script>

<style>
.myselfPage{
  padding-bottom: 48px;
  background: #fff;
}
</style>
