<template>
  <div class="container-fluid" :class="styles.wrapper">
    <div class="row align-self-center">
      <div class="col-auto" @mouseenter="changeMarkToActive" @mouseleave="changeMarkToInactive">
        <img :src="currentMark" alt="" width="25px" height="25px" :class="styles.checkmark" v-if="!revert">
        <img :src="currentRevert" alt="" width="25px" height="25px" :class="styles.checkmark" v-else>
      </div>
      <div class="col" :class="styles.text">
        {{ this.task.text + ' №' + this.task.id + ' От ' + this.task.date }}
      </div>
    </div>
  </div>
</template>

<script>
import styles from 'Sass/task.module.sass'
import checkmark from 'Assets/checkmark.svg'
import checkmarkActive from 'Assets/checkmark-active.svg'
import revert from 'Assets/revert.svg'
import revertActive from 'Assets/revert-active.svg'

export default {
  name: 'Task',
  props: {
    task: {},
    revert: {
      default: false
    }
  },
  data () {
    return {
      styles: styles,
      currentMark: checkmark,
      currentRevert: revert
    }
  },
  methods: {
    changeMarkToActive (mark) {
      if (this.revert) {
        this.currentRevert = revertActive
      } else {
        this.currentMark = checkmarkActive
      }
    },
    changeMarkToInactive () {
      if (this.revert) {
        this.currentRevert = revert
      } else {
        this.currentMark = checkmark
      }
    }
  }
}
</script>
