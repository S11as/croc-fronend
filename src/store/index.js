import Vue from 'vue'
import Vuex from 'vuex'
import tasks from './tasks.module'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    tasks
  }
})
