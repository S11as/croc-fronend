<template>
  <section class="task-list">
    <div class="task-wrapper" v-if="filteredCompletedTasks.length!==0">
      <Task v-for="task in filteredCompletedTasks" :key="task.id" :task="task" :revert="true"/>
    </div>
    <div class="" v-else>
      Ничего не найдено
    </div>
  </section>
</template>

<script>
import styles from 'Sass/tasklist-completed.module.sass'
import Task from '@/components/Task'
import { mapGetters } from 'vuex'

export default {
  name: 'TaskListCompleted',
  components: { Task },
  computed: {
    ...mapGetters(['filteredCompletedTasks'])
  },
  data () {
    return {
      styles: styles
    }
  }
}
</script>
