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

export default {
  name: 'UserList',
  components: { UserModule },
  data () {
    return {
      styles: styles,
      users: [
        {
          name: 'Руслан Виноградов',
          unsolved: 10,
          solvedToday: 10,
          dayNorm: 100,
          solvedMonth: 10,
          monthNorm: 100,
          available: true
        },
        {},
        {},
        {}
      ]
    }
  }
}
</script>
