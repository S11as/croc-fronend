import {
  UPDATE_USER
} from '@/store/mutations.type'

const state = {
  currentTasks: [
    {
      text: 'Заявка на регистрацию',
      id: '3412324',
      date: '24.11.20'
    },
    {
      text: 'Заявка на патент',
      id: '3412325',
      date: '24.11.20'
    },
    {
      text: 'Заявка на заявку',
      id: '3412326',
      date: '24.11.20'
    }
  ],
  users: [
    {
      id: '111',
      lastname: 'Руслан Виноградов',
      unsolved: 10,
      solvedToday: 10,
      dayNorm: 100,
      solvedMonth: 10,
      monthNorm: 100,
      available: true
    },
    {
      id: '222',
      lastname: 'Руслан Свинцов',
      unsolved: 10,
      solvedToday: 10,
      dayNorm: 100,
      solvedMonth: 10,
      monthNorm: 100,
      available: true
    },
    {
      id: '333',
      lastname: 'Руслан Серебряных',
      unsolved: 10,
      solvedToday: 10,
      dayNorm: 100,
      solvedMonth: 10,
      monthNorm: 100,
      available: true
    }
  ]
}

const getters = {
  userById: state => id => {
    return state.users.find(user => user.id === id)
  }
  // filteredToDoTasks (state) {
  //   if (state.search === '') {
  //     return state.todoTasks
  //   }
  //   return state.todoTasks.filter(el => {
  //     const str = el.text + ' №' + el.id + ' От ' + el.date
  //     return str.includes(state.search)
  //   })
  // },
  // filteredCompletedTasks (state) {
  //   if (state.search === '') {
  //     return state.completedTasks
  //   }
  //   return state.completedTasks.filter(el => {
  //     const str = el.text + ' №' + el.id + ' От ' + el.date
  //     return str.includes(state.search)
  //   })
  // }
}

const mutations = {
  [UPDATE_USER] (state, payload) {
    for (let user of state.users) {
      if (user.id === payload.id) {
        user = payload
        return
      }
    }
  }
}

export default {
  state,
  mutations,
  getters
}
