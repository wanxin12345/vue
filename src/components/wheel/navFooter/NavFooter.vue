<template>
  <div class="a8-footer">
    <router-link class="footer-tab refresh" to="/refresh" active-class="refreshActive" exact-active-class="fontSet"></router-link>
    <router-link class="footer-tab play"    to="/play"    active-class="palyActive">比赛</router-link>
    <router-link class="footer-tab live"    to="/live"    active-class="liveActive"></router-link>
    <router-link class="footer-tab follow"  to="/follow"  active-class="followActive"  exact-active-class="fontSet">关注</router-link>
    <router-link class="footer-tab myself"  to="/myself"  active-class="myselfActive"  exact-active-class="fontSet">我的</router-link>
  </div>
</template>

<script>
  export default{
    methods: {

    }
  }
</script>

<style scoped>
  .a8-footer{
    position: fixed;
    display: flex;
    bottom: 0;
    left:0;
    width: 100%;
    height: 48px;
    z-index: 999;
    background: #FFFFFF;
  }
  .footer-tab{
    width: 12.5%;
    margin: 0 3.75%;
    font-size:12px;
    color: #8a8d8c;
    text-align: center;
  }
  .footer-tab::before{
    content: '';
    display: block;
    margin: 0 auto;
    width: 25px;
    height:29px;
    padding-bottom: 3px;
  }
  .fontSet{
    color:#1d1d1d!important;
  }

  .refresh::before{
    background: url("../../../assets/footer/foot_home.png") center no-repeat;
    background-size: 25px 25px;
  }
  .refresh::after{
    content: '首页';
  }
  .play::before{
    background: url("../../../assets/footer/foot_win.png") center no-repeat;
    background-size: 25px 25px;
  }
  .live::before{
    background: url("../../../assets/footer/foot_cemera.png") center no-repeat;
    background-size: 25px 25px;
  }
  .live::after{
    content:"直播"
  }
  .follow::before{
    background: url("../../../assets/footer/foot_book.png") center no-repeat;
    background-size: 25px 25px;
  }
  .myself::before{
    background: url("../../../assets/footer/foot_user.png") center no-repeat;
    background-size: 25px 25px;
  }

  .refreshActive::before{
    background: url("../../../assets/footer/foot_fresh.png") center no-repeat;
    background-size: 25px 25px;
  }
  .refreshActive::after{
    content:"刷新";
    color:#1d1d1d;
  }
  .palyActive::before{
    background: url("../../../assets/footer/foot_winTouch.png") center no-repeat;
    background-size: 25px 25px;
  }
  .palyActive{
    color:#1d1d1d;
  }
  .liveActive::before{
    background: url("../../../assets/footer/foot_xiu.png") center no-repeat;
    width: 41px;
    height: 41px;
    background-size: 41px 41px;
  }
  .liveActive::after{
    content:"";
  }
  .followActive::before{
    background: url("../../../assets/footer/foot_bookTouch.png") center no-repeat;
    background-size: 25px 25px;
  }
  .myselfActive::before{
    background: url("../../../assets/footer/foot_userTouch.png") center no-repeat;
    background-size: 25px 25px;
  }
</style>
