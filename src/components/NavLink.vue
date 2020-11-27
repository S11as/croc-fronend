<template>
  <div class="row" :class="styles.wrapper">
    <div class="col">
      <router-link :to="to" :class="styles.link" :active-class="styles.active">{{text}}</router-link>
    </div>
  </div>
</template>

<script>
import styles from 'Sass/navlink.module.sass'

export default {
  name: 'NavLink',
  props: {
    to: {},
    text: {}
  },
  data () {
    return {
      styles: styles
    }
  }
}
</script>
