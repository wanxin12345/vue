<template>
  <div id="app">
    <transition :name="names">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import navFooter from './components/wheel/navFooter/NavFooter.vue'
export default {
  components: {
    navFooter
  },
  data () {
    return {
      names: 'left',
      loading: false
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
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  ::-webkit-scrollbar{
    display:none;
    width: 0px;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
    font-family: "Helvetica Neue",Helvetica,Arial,"Hiragino Sans GB","Hiragino Sans GB W3","Microsoft YaHei UI","Microsoft YaHei","WenQuanYi Micro Hei",sans-serif;
    font-size: 14px;
    color: #444;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  a {
    color: inherit;
    text-decoration: none;
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
