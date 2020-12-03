<template>
  <div class="container" ref="container" :class="styles.wrapper" @click="changeVisibility">
    <div class="row" ref="main">
      <div class="col">{{ user.lastname }}</div>
      <div class="col-auto">{{ user.solvedToday }}/{{ user.dayNorm }}</div>
      <div class="col-auto">{{ user.solvedMonth }}/{{ user.monthNorm }}</div>
      <div class="col-auto">
        <img :src="user.available ? circles.active : circles.default" alt="">
      </div>
      <div class="col-auto">
        <img :src="currentImg" alt="">
      </div>
    </div>
    <div class="row justify-content-end m-0" ref="content" :class="styles.content">
      <router-link :to="'/user/'+user.id" class="col-auto" :class="styles.link">Редактировать</router-link>
      <router-link :to="'/user/'+user.id+'/tasks'" class="col-auto" :class="styles.link">Задачи</router-link>
    </div>
  </div>
</template>

<script>
import styles from 'Sass/usermodule.module.sass'
import dropdown from 'Assets/dropdown.svg'
import plus from 'Assets/plus.svg'
import circle from 'Assets/circle.svg'
import circleActive from 'Assets/circle-active.svg'
import $ from 'jquery'

export default {
  name: 'UserModule',
  props: {
    user: {}
  },
  data () {
    return {
      styles: styles,
      currentImg: plus,
      circles: {
        default: circle,
        active: circleActive
      },
      shown: false
    }
  },
  methods: {
    changeVisibility () {
      const content = $(this.$refs.content)
      const container = $(this.$refs.container)
      const main = $(this.$refs.main)
      const neededHeight = content[0].scrollHeight
      if (!this.shown) {
        content.animate({
          height: neededHeight + 'px',
          duration: 500
        })
        container.animate({
          paddingBottom: '6px',
          duration: 500
        })
        main.animate({
          marginBottom: '15px',
          duration: 500
        })
        this.currentImg = dropdown
      } else {
        content.animate({
          height: 0 + 'px',
          duration: 500
        })
        container.animate({
          paddingBottom: '18px',
          duration: 500
        })
        main.animate({
          marginBottom: '0px',
          duration: 500
        })
        this.currentImg = plus
      }
      this.shown = !this.shown
    }
  }
}
</script>
