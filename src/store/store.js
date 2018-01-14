import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
let follows = []
var state = {
  follows
}

export const store = new Vuex.Store({
  state,
  getters: {
    follows: (state) => {
      state.follows = axios.get('http://localhost:5000/static/follow.json').then(function (res) {
        return res.data.follows
      })
    }
  }
})
