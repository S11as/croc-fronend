<template>
  <div class="container" :class="[padding ? styles.wrapperPadding : '', styles.wrapper]">
    <div class="row">
      <div class="col-auto">
        <div :class="[dark ? styles.circleDark : styles.circle]"></div>
      </div>
      <div class="col container" :class="styles.center">
        <div class="row justify-content-center">
          <div class="col-auto" :class="styles.name">
            {{ user.lastname ? user.lastname : 'Имя не указано' }}
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-auto" :class="styles.department">
            {{ user.department ? user.department : 'Отдел не указан' }}
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
  props: {
    user: {
      default: () => ({
        lastname: 'Роман Виноградов',
        department: 'Финансовый отдел'
      })
    },
    dark: {
      default: false
    },
    padding: {
      default: true
    }
  },
  data () {
    return {
      styles: styles
    }
  }
}
</script>
