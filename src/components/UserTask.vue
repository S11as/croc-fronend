<template>
  <div class="col-4 container" @click="selectionHandler" :class="styles.outer">
    <div class="row" :class="[styles.wrapper, selected ? styles.shadow : '']">
      <div class="col-auto d-flex align-self-center p-0" >
        <img :src="currentCircle" :class="styles.circle">
      </div>
      <div class="col-auto d-flex align-self-center p-0" @mouseenter="changeMarkToActive" @mouseleave="changeMarkToInactive">
        <img :src="currentMark" :class="styles.icon">
      </div>
      <div class="col-auto" :class="styles.text">
        {{task.text}} от {{task.date}}
      </div>
    </div>
  </div>
</template>

<script>
import styles from 'Sass/user-task.module.sass'
import circleActive from 'Assets/circle-active.svg'
import circle from 'Assets/circle.svg'
import checkmark from 'Assets/checkmark.svg'
import checkmarkActive from 'Assets/checkmark-active.svg'

export default {
  name: 'UserTask',
  props: {
    task: {}
  },
  data () {
    return {
      styles: styles,
      selected: false,
      currentMark: checkmark,
      currentCircle: circle
    }
  },
  methods: {
    selectionHandler () {
      if (!this.selected) {
        this.currentCircle = circleActive
      } else {
        this.currentCircle = circle
      }
      this.selected = !this.selected
    },
    changeMarkToActive () {
      this.currentMark = checkmarkActive
    },
    changeMarkToInactive () {
      this.currentMark = checkmark
    }
  }
}
</script>
