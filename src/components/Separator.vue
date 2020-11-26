<template>
  <div :class="styles.separator"></div>
</template>

<script>
import styles from 'Sass/separator.module.sass'

export default {
  name: 'Separator',
  data () {
    return {
      styles: styles
    }
  }
}
</script>
