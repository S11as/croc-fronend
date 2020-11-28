<template>
  <section class="background">
    <TaskNav/>
    <router-view/>
  </section>
</template>

<script>
import TaskNav from '@/components/TaskNav'

export default {
  name: 'TaskList',
  components: { TaskNav }
}
</script>

<style>
.background{
  padding: 30px 100px !important;
}
</style>
