<template>
  <section class="container">
    <div class="row">
      <div class="col-3">
        <UserShortInfo :dark="true" :padding="false"/>
      </div>
    </div>
    <div class="row">
      <div class="col-auto">Доступен:</div>
      <div class="col-auto d-flex align-self-center p-0">
        <input type="checkbox" :class="styles.checkbox" v-model="userModel.available">
      </div>
    </div>
    <div class="row m-0">
      <button class="col-auto" :class="styles.button" @click="changeUser">
        Сохранить
      </button>
    </div>
  </section>
</template>

<script>
import styles from 'Sass/user.module.sass'
import UserShortInfo from '@/components/UserShortInfo'
import { UPDATE_USER } from 'Store/mutations.type.js'

export default {
  name: 'User',
  components: { UserShortInfo },
  data () {
    return {
      styles: styles,
      userModel: {
        available: false
      }
    }
  },
  mounted () {
    this.userModel = this.$store.getters.userById(this.$route.params.id)
  },
  methods: {
    changeUser () {
      this.$store.commit(UPDATE_USER, this.userModel)
    }
  }
}
</script>
