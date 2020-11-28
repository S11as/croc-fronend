import {
  UPDATE_ALGORITHM,
  UPDATE_FILTERS,
  UPDATE_MODULE
} from '@/store/mutations.type'

const state = {
  filters: [
    {
      id: 1,
      title: 'Some kind of filter1',
      description: '  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam atque, aut autem delectus deleniti, dicta dolor ea eum ex exercitationem fuga hic illo impedit ipsum iste molestias, necessitatibus nisi officiis quam quibusdam quis quo recusandae repudiandae temporibus tenetur veritatis voluptatum.\n',
      shown: false
    },
    {
      id: 2,
      title: 'Some kind of filter2',
      description: '  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam atque, aut autem delectus deleniti, dicta dolor ea eum ex exercitationem fuga hic illo impedit ipsum iste molestias, necessitatibus nisi officiis quam quibusdam quis quo recusandae repudiandae temporibus tenetur veritatis voluptatum.\n',
      shown: false
    },
    {
      id: 3,
      title: 'Some kind of filter3',
      description: '  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam atque, aut autem delectus deleniti, dicta dolor ea eum ex exercitationem fuga hic illo impedit ipsum iste molestias, necessitatibus nisi officiis quam quibusdam quis quo recusandae repudiandae temporibus tenetur veritatis voluptatum.\n',
      shown: false
    }
  ],
  algorithm: [
    {
      id: 5,
      title: 'Some kind of filter4',
      description: '  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam atque, aut autem delectus deleniti, dicta dolor ea eum ex exercitationem fuga hic illo impedit ipsum iste molestias, necessitatibus nisi officiis quam quibusdam quis quo recusandae repudiandae temporibus tenetur veritatis voluptatum.\n',
      shown: false
    }
  ]
}

const getters = {}

const mutations = {
  [UPDATE_ALGORITHM] (state, algorithm) {
    state.algorithm = algorithm
  },
  [UPDATE_FILTERS] (state, filters) {
    state.algorithm = filters
  },
  [UPDATE_MODULE] (state, payload) {
    for (const filter of state.filters) {
      if (filter.id === payload.id) {
        filter.shown = payload.shown
        return
      }
    }
    for (const filter of state.algorithm) {
      if (filter.id === payload.id) {
        filter.shown = payload.shown
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
