<template>
  <div class="container" :class="styles.wrapper">
    <div class="row">
      <div class="col">{{user.name}}</div>
      <div class="col-auto">{{user.solvedToday}}/{{user.dayNorm}}</div>
      <div class="col-auto">{{user.solvedMonth}}/{{user.monthNorm}}</div>
      <div class="col-auto">
        <img :src="user.available ? circles.active : circles.default" alt="">
      </div>
      <div class="col-auto">
        <img :src="plus" alt="">
      </div>
    </div>
    <div class="row justify-content-end" ref="content">
      <a class="col-auto"></a>
    </div>
  </div>
</template>

<script>
import styles from 'Sass/usermodule.module.sass'
import dropdown from 'Assets/dropdown.svg'
import plus from 'Assets/plus.svg'
import circle from 'Assets/circle.svg'
import circleActive from 'Assets/circle-active.svg'
export default {
  name: 'UserModule',
  props: {
    user: {}
  },
  data () {
    return {
      styles: styles,
      dropdown: dropdown,
      plus: plus,
      circles: {
        default: circle,
        active: circleActive
      }
    }
  }
}
</script>
