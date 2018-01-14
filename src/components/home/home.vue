<template>
	<div class="homeInfo">
		<nav-header></nav-header>
    <transition :name="names">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
	</div>
</template>

<script>
import navHeader from '../wheel/homeHeader/homeHeader.vue'
export default {
  components: {
    navHeader
  },
  data () {
    return {
      names: 'left'
    }
  },
  watch: {
    $route (to, from) {
      if (to.meta.index < from.meta.index) {
        this.names = 'right'
      } else {
        this.names = 'left'
      }
    }
  }
}
</script>

<style>
.homeInfo{
	position: absolute;
	top:0;
	left:0;
	overflow: auto;
	width: 100%;
	margin:0 auto;
	padding-bottom:48px;
}
::-webkit-scrollbar{
	display:none;
	width: 0px;
}

/* 向左切换 */
.left-enter{
  transform:translateX(100%);
}
.left-enter-active{
  transition:all 1s ease;
}
.left-leave-to,.left-leave-active{
  transform:translateX(-100%);
}
/* 向右切换 */
.right-enter{
  transform:translateX(-100%);
}
.right-enter-active,.right-leave-active{
  transition:all 1s ease;
}
.right-leave-to{
  transform:translateX(100%);
}
</style>
