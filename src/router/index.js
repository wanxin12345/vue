import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home/home.vue'
import Play from '../components/play/play.vue'
import Live from '../components/live/live.vue'
import Follow from '../components/follow/follow.vue'
import Myself from '../components/myself/myself.vue'

import Hot from '../components/home/hot/hot.vue'
import Video from '../components/home/video/video.vue'
import Highlights from '../components/home/highlights/highlights.vue'
import Thematic from '../components/home/thematic/thematic.vue'
import Guess from '../components/home/guess/guess.vue'

import PlayHot from '../components/play/hot/hot.vue'
import Racecol from '../components/play/racecol/racecol.vue'
import League from '../components/play/league/league.vue'

import LiveHot from '../components/live/hot/hot.vue'
import Newest from '../components/live/newest/newest.vue'
import Field from '../components/live/filed/field.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home,
      redirect: '/refresh'
    },
    {
      path: '/refresh',
      component: Home,
      redirect: '/refresh/hot',
      children: [
        {
          path: 'hot',
          component: Hot,
          meta: {
            index: 0
          }
        },
        {
          path: 'video',
          component: Video,
          meta: {
            index: 1
          }
        },
        {
          path: 'highlights',
          component: Highlights,
          meta: {
            index: 2
          }
        },
        {
          path: 'thematic',
          component: Thematic,
          meta: {
            index: 3
          }
        },
        {
          path: 'guess',
          component: Guess,
          meta: {
            index: 4
          }
        }
      ]
    },
    {
      path: '/play',
      component: Play,
      redirect: '/play/hot',
      children: [
        {
          path: 'hot',
          component: PlayHot,
          meta: {
            index: 11
          }
        },
        {
          path: 'racecol',
          component: Racecol,
          meta: {
            index: 12
          }
        },
        {
          path: 'league',
          component: League,
          meta: {
            index: 13
          }
        }
      ]
    },
    {
      path: '/live',
      component: Live,
      redirect: '/live/hot',
      children: [
        {
          path: 'hot',
          component: LiveHot,
          meta: {
            index: 22
          }
        },
        {
          path: 'newest',
          component: Newest,
          meta: {
            index: 23
          }
        },
        {
          path: 'field',
          component: Field,
          meta: {
            index: 24
          }
        }
      ]
    },
    {
      path: '/follow',
      meta: {
        index: 33
      },
      component: Follow
    },
    {
      path: '/myself',
      component: Myself,
      meta: {
        index: 44
      }
    }
  ]
})
