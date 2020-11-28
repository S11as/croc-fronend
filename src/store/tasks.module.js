import {
  SET_SEARCH
} from '@/store/mutations.type'

const state = {
  search: '',
  todoTasks: [
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
  completedTasks: [
    {
      text: 'Заявка на регистрацию',
      id: '3412324',
      date: '24.11.20'
    },
    {
      text: 'Заявка на регистрацию',
      id: '3412325',
      date: '24.11.20'
    },
    {
      text: 'Заявка на регистрацию',
      id: '3412326',
      date: '24.11.20'
    }
  ]
}

const getters = {
  filteredToDoTasks (state) {
    if (state.search === '') {
      return state.todoTasks
    }
    return state.todoTasks.filter(el => {
      const str = el.text + ' №' + el.id + ' От ' + el.date
      return str.includes(state.search)
    })
  },
  filteredCompletedTasks (state) {
    if (state.search === '') {
      return state.completedTasks
    }
    return state.completedTasks.filter(el => {
      const str = el.text + ' №' + el.id + ' От ' + el.date
      return str.includes(state.search)
    })
  }
}

const mutations = {
  [SET_SEARCH] (state, toSearch) {
    state.search = toSearch
  }
}

export default {
  state,
  mutations,
  getters
}
