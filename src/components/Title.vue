<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-auto" :class="styles.title">
        <slot/>
      </div>
    </div>
  </div>
</template>

<script>
import styles from 'Sass/title.module.sass'

export default {
  name: 'Title',
  data () {
    return {
      styles: styles
    }
  }
}
</script>
