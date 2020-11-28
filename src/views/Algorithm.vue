<template>
  <section class="container-fluid p-0">
    <div class="row">
      <div class="col-4 pr-5 pl-5 pt-4 container" :class="styles.filters">
        <div class="row">
          <h3 class="col-auto p-0" :class="styles.title">Steps</h3>
        </div>
        <draggable :list="filters" group="g1">
          <FilterModule v-for="filter in filters" :key="filter.id" :filter="filter"/>
        </draggable>
      </div>
      <div class="col" :class="styles.algorithm">
        <draggable :list="algorithm" group="g1">
          <FilterModule v-for="filter in algorithm" :key="filter.id" :filter="filter"
                        :card="true"/>
        </draggable>
      </div>
    </div>
  </section>
</template>

<script>
import styles from 'Sass/algorithm.module.sass'
import draggable from 'vuedraggable'
import FilterModule from '@/components/FilterModule'
import { UPDATE_ALGORITHM, UPDATE_FILTERS } from '@/store/mutations.type'

export default {
  name: 'Algorithm',
  components: { draggable, FilterModule },
  computed: {
    filters: {
      get () {
        return this.$store.state.algorithm.filters
      },
      set (val) {
        this.$store.commit(UPDATE_FILTERS, val)
      }
    },
    algorithm: {
      get () {
        return this.$store.state.algorithm.algorithm
      },
      set (val) {
        this.$store.commit(UPDATE_ALGORITHM, val)
      }
    }
  },
  data () {
    return {
      styles: styles
    }
  },
  mounted () {
    console.log(this.$store)
  }
}
</script>
