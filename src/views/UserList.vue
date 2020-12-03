<template>
  <section class="">
    <div v-for="user in users" :key="user.id">
      <UserModule :user="user"/>
    </div>
  </section>
</template>

<script>
import styles from 'Sass/user-list.module.sass'
import UserModule from '@/components/UserModule'
import { mapState } from 'vuex'

export default {
  name: 'UserList',
  components: { UserModule },
  computed: {
    ...mapState({
      users: state => state.users.users
    })
  },
  data () {
    return {
      styles: styles
    }
  }
}
</script>
