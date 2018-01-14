<template>
	<div class="livePage">
		<live-header></live-header>
    <transition :name="names">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
	</div>
</template>

<script>
import liveHeader from '../wheel/liveHeader/liveHeader'
export default {
  components: {
    liveHeader
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
.livePage{
  padding: 45px 0 48px 0;
  background: #fff;
}
/* 向左切换 */
.left-enter{
  transform:translate3d(100%,0,0);
}
.left-enter-active{
  transition:all 1s ease;
}
.left-leave-to,.left-leave-active{
  transform:translate3d(-100%,0,0);
}
/* 向右切换 */
.right-enter{
  transform:translate3d(-100%,0,0);
}
.right-enter-active,.right-leave-active{
  transition:all 1s ease;
}
.right-leave-to{
  transform:translate3d(100%,0,0);
}
</style>
