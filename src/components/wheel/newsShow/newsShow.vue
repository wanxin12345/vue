<template>
	<div>
		<div class="baseNews" v-for="item in allNews">
			<div class="newsImg">
				<img :src="item.src">
			</div>
			<div class="newsInfo">
				<div><span class="setXiu" v-text="item.exact.content" v-if="item.exact.isHas"></span><span class="infoShow" v-text="item.info"></span></div>
				<div class="userHandle">
					<div v-if="item.them.isHas" class="fontCol" :class="{'red':item.them.res}" v-text="item.them.content"></div>
					<div class="commonHandle oneHand"><img src="../../../assets/common/common_06.png"><span class="font" v-text="item.like"></span></div>
					<div class="commonHandle twoHand"><img src="../../../assets/common/common_08.png"><span class="font" v-text="item.comment"></span></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  props: {
    allNews: {
      type: Array,
      default: []
    }
  }
}
</script>

<style scoped>
.baseNews{
	width:100%;
	padding:10px 0 10px 0;
	display:flex;
	border-bottom:1px solid #e5e5e5;
}
.newsImg{
	width:110.5px;
	height:60px;
	margin-left:3%;
}
.newsImg img{
	width:110.5px;
}
.infoShow{
	font-size:15px;
	line-height:22px;
	text-overflow:ellipsis;
}
.newsInfo>div:nth-of-type(1){
	color: #1e1e1e;
	font-size:15px;
	padding-left:5px;
	padding-right:10px;
	height:30px;
}
.userHandle{
	height:30px;
	line-height:50px;
	text-indent:5px;
	display:flex;
}
.oneHand span,.twoHand span{
	color: #8c8c8c;
	width: 55px;
}
.commonHandle img{
	width:12px;
	margin-right:4px;
	vertical-align:middle;
}
.setXiu{
	background:#f7c600;
	padding:3px 4px;
	font-size:9px;
	color:#fcfdf3;
	margin-right:5px;
	border-radius:2px;
}
.fontCol{
	font-size:12px;
	padding-top:1px;
  color:#09a5cb;
}
.red{
  color:#f93d39;
}
.font{
  font-size: 15px;
}
</style>
