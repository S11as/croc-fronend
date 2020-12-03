import Vue from 'vue'
import Vuex from 'vuex'
import tasks from './tasks.module'
import algorithm from './algorithm.module'
import users from './users.module'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    tasks,
    algorithm,
    users
  }
})
