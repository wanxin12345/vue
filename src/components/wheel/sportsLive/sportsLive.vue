<template>
  <div class="xScoll">
      <p class="sprots_title"><span class="color"></span>体育主播<span class="right">查看更多&gt;</span></p>
      <div class="hotLivers">
        <div class="oneUser" v-for="item in sports">
          <img :src="item.src" width="270">
          <div class="userInfo">
            <p>{{item.content}}<span class="icon"></span></p>
            <div class="noneTitle" v-text="item.title"></div>
          </div>
		  	</div>
      </div>
  </div>
</template>

<script>
export default {
  props: {
    sports: {
      type: Array,
      default: []
    }
  }
}
</script>

<style scoped>
::-webkit-scrollbar{
  display:none;
}
.sprots_title{
	height:33px;
	line-height:33px;
	padding-left:10px;
	padding-right:20px;
	background:#f2f2f2;
	font-size:14px;
	color:#1d1d1d;
}
.color{
	display:inline-block;
	width:2.5px;
	height:18px;
	vertical-align:middle;
	background:#fac300;
	margin-right:3px;
}
.right{
	float:right;
	margin-right:5%;
	font-size:11px;
	color:#8c8c8c;
}

.hotLivers{
	display:flex;
	padding-left:10px;
	background:#f2f2f2;
	padding-bottom:13.5px;
	overflow-x:auto;
}
.oneUser{
	margin-right:8.5px;
	background:#ffffff;
	border-radius:5px;
}
.oneUser img{
	width:135px;
	height:121px;
	border-radius:5px;
}
.userInfo{

}
.userInfo p{
	padding-top:3px;
	color:#1d1d1d;
	font-size:12px;
	text-indent:5px;
}
.icon{
	display:inline-block;
	width:11.5px;
	height:11.5px;
	padding-left:5px;
	background:url("../../../assets/body/home/hot/home_hot_31.png") center no-repeat;
	background-size:11.5px 11.5px;
	vertical-align:middle;
}
.noneTitle{
	color:#8c8c8c;
	font-size:8px;
	padding:5px 0px 10px 5px;
}
</style>
