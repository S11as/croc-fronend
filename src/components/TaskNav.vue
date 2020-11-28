<template>
  <div class="col container" :class="styles.wrapper">
    <div class="row">
      <div class="col-auto p-0 d-flex flex-column align-self-center">
        <router-link exact to="/task-list" :class="styles.link" :active-class="styles.active">Задачи</router-link>
      </div>
      <div class="col-auto p-0 d-flex flex-column align-self-center">
        <router-link exact to="/task-list/completed" :class="styles.link" :active-class="styles.active">Выполнено
        </router-link>
      </div>
      <div class="col container">
        <div class="row justify-content-end">
          <div class="col-auto p-0">
            <img :src="search" alt="">
            <input v-model="toSearch" type="text" :class="styles.search" placeholder="Введите для поиска"
                   @change="searchHandler()">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import styles from 'Sass/tasknav.module.sass'
import search from 'Assets/search.svg'
import { SET_SEARCH } from '@/store/mutations.type'

export default {
  name: 'TaskNav',
  data () {
    return {
      styles: styles,
      search: search,
      toSearch: ''
    }
  },
  methods: {
    searchHandler () {
      this.$store.commit(SET_SEARCH, this.toSearch)
    }
  }
}
</script>
