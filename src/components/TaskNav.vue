<template>
  <div class="col container" :class="styles.wrapper">
    <div class="row">
      <div class="col-auto p-0 d-flex flex-column align-self-center">
        <router-link exact to="/task-list" :class="styles.link" :active-class="styles.active">Задачи</router-link>
      </div>
      <div class="col-auto p-0 d-flex flex-column align-self-center">
        <router-link exact to="/task-list/completed" :class="styles.link" :active-class="styles.active">Выполнено</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import styles from 'Sass/tasknav.module.sass'

export default {
  name: 'TaskNav',
  data () {
    return {
      styles: styles
    }
  }
}
</script>
