<template>
  <div class="">
    <div class="task-wrapper" v-if="filteredToDoTasks.length!==0">
      <Task v-for="task in filteredToDoTasks" :key="task.id" :task="task" :revert="true"/>
    </div>
    <div class="" v-else>
      Ничего не найдено
    </div>
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
