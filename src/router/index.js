import Vue from 'vue'
import VueRouter from 'vue-router'
import TaskList from '@/views/TaskList/TaskList'
import TaskListCompleted from '@/views/TaskList/TaskListCompleted'
import TaskListToDo from '@/views/TaskList/TaskListToDo'

Vue.use(VueRouter)

const routes = [
  {
    path: '/task-list',
    name: 'Home',
    component: TaskList,
    children: [
      {
        path: '',
        component: TaskListToDo
      },
      {
        path: 'completed',
        component: TaskListCompleted
      }
    ]
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
