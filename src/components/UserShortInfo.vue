<template>
  <div class="container" :class="[styles.wrapper]">
    <div class="row">
      <div class="col-auto">
        <div :class="styles.circle"></div>
      </div>
      <div class="col container" :class="styles.center">
        <div class="row justify-content-center">
          <div class="col-auto" :class="styles.name">
            Роман Виноградов
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-auto" :class="styles.department">
            Финансовый отдел
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import styles from 'Sass/user-short-info.module.sass'

export default {
  name: 'UserShortInfo',
  data () {
    return {
      styles: styles
    }
  }
}
</script>
