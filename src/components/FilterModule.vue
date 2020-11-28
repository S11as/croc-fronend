<template>
  <div class="row" :class="[card ? styles.card : styles.wrapper]" @click="showHandler()">
    <div class="col container p-0">
      <div class="row">
        <div class="col" :class="styles.title">{{filter.title}}</div>
        <div class="col-auto">
          <img :src="vector" alt="">
        </div>
      </div>
      <div class="row" ref="content" :class="[styles.content, filter.shown ? '' : styles.h0]">
        <div class="col">{{filter.description}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import styles from 'Sass/filter.module.sass'
import plus from 'Assets/plus.svg'
import dropdown from 'Assets/dropdown.svg'
import $ from 'jquery'
import { UPDATE_MODULE } from '@/store/mutations.type'
export default {
  name: 'FilterModule',
  props: {
    filter: {},
    card: {
      default: false
    }
  },
  data () {
    return {
      styles: styles,
      filterModel: null,
      vector: plus
    }
  },
  methods: {
    showHandler () {
      const content = $(this.$refs.content)
      const neededHeight = content[0].scrollHeight
      if (!this.filterModel.shown) {
        this.vector = dropdown
        content.animate({
          height: neededHeight + 'px',
          duration: 500
        })
      } else {
        this.vector = plus
        content.animate({
          height: 0 + 'px',
          duration: 500
        })
      }
      this.filterModel.shown = !this.filterModel.shown
      this.$store.commit(UPDATE_MODULE, { id: this.id, shown: this.filterModel.shown })
    }
  },
  mounted () {
    this.filterModel = this.filter
    if (!this.filterModel.shown) {
      this.vector = plus
    } else {
      this.vector = dropdown
    }
  }
}
</script>
