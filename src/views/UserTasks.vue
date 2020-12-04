<template>
  <section class="container-fluid">
    <img :src="left" alt="" :class="styles.back" @click="goBack">
    <div class="container">
      <div class="row justify-content-around">
        <div class="col-3">
          <UserShortInfo :dark="true" :padding="false"/>
        </div>
        <div class="col d-flex justify-content-end align-self-center">
          <button :class="styles.button">Выбрать все</button>
          <button :class="styles.button">Сбросить</button>
          <button :class="styles.button">Действия</button>
        </div>
      </div>
    </div>
    <div class="row">
      <UserTask v-for="task in tasks" :key="task.id" :task="task"/>
    </div>
  </section>
</template>

<script>
import styles from 'Sass/user-tasks.module.sass'
import { mapState } from 'vuex'
import UserTask from '@/components/UserTask'
import left from 'Assets/left.svg'
import UserShortInfo from '@/components/UserShortInfo'

export default {
  name: 'UserTasks',
  components: { UserTask, UserShortInfo },
  computed: {
    ...mapState({
      tasks: state => state.users.currentTasks
    })
  },
  data () {
    return {
      left: left,
      styles: styles
    }
  },
  methods: {
    goBack () {
      this.$router.push('/users')
    }
  }
}
</script>
