<template>
  <div>
		<div class="video_show" v-for="item in allVideos">
			<img :src="item.src">
			<div class="video_info" v-if="item.flag">
				<div class="exactFont" v-if="item.exact.isHas" style="color:#fcfdf3;">{{item.exact.content}}</div>
				<div class="vname" v-text="item.time"></div>
				<div class="watchers"><img class="icon_common" src="../../../assets/common/common_06.png"><span v-text="item.like"></span></div>
				<div class="watchers"><img class="icon_common" src="../../../assets/common/common_08.png"><span v-text="item.comment"></span></div>
			</div>
      <div v-if="!item.flag"  class="video_info" v-text="item.content"></div>
		</div>
	</div>
</template>

<script>
export default {
  props: {
    allVideos: {
      type: Array,
      default: []
    }
  }
}
</script>

<style scoped>
.video_show{
	padding:11px 12px;
}
.video_show>img{
	width:100%;
}
.video_info{
	display:flex;
	padding-top:13.5px;
	padding-bottom:12px;
	border-bottom:1px solid #e5e5e5;
}
.exactFont{
	background:#f7c600;
	padding:3px 4px;
	font-size:9px;
	color:#fcfdf3;
	position:relative;
	top:-3px;
	margin-right:5px;
	border-radius:2px;
}

.vname{
	font-size:12px;
	color:#8c8c8c;
}
.watchers{
	width:50px;
	font-size:10px;
	color:#8c8c8c;
}
.icon_common{
	width:11.5px;
	height:11px;
	padding:0 8px;
}
.video_info{
	display:flex;
	padding-top:13.5px;
	padding-bottom:12px;
	border-bottom:1px solid #e5e5e5;
  line-height: 20px;
  font-size:15px;
}
</style>

