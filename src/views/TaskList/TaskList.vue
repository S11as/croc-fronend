<template>
  <div >
    <TaskNav/>
    <router-view/>
  </div>
</template>

<script>
import TaskNav from '@/components/TaskNav'

export default {
  name: 'TaskList',
  components: { TaskNav }
}
</script>
