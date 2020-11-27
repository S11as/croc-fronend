<template>
  <div class="">
      <Task v-for="task in filteredToDoTasks" :key="task.id" :task="task"/>
  </div>
</template>

<script>
import styles from 'Sass/tasklist-todo.module.sass'
import Task from '@/components/Task'
import { mapGetters } from 'vuex'

export default {
  name: 'TaskListToDo',
  components: { Task },
  computed: {
    ...mapGetters(['filteredToDoTasks'])
  },
  data () {
    return {
      styles: styles
    }
  }
}
</script>
