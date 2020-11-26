<template>
  <div class="container" :class="styles.wrapper">
    <Title>Task system</Title>
    <UserShortInfo/>
    <Separator/>
    <div class="container" :class="styles.links">
      <NavLink to="/" text="Task list"/>
      <NavLink to="/rr" text="Task list"/>
      <NavLink to="/ww" text="Task list"/>
    </div>
  </div>
</template>

<script>
import styles from 'Sass/navbar.module.sass'
import Title from '@/components/Title'
import UserShortInfo from '@/components/UserShortInfo'
import Separator from '@/components/Separator'
import NavLink from '@/components/NavLink'

export default {
  name: 'NavBar',
  components: { Title, UserShortInfo, Separator, NavLink },
  data () {
    return {
      styles: styles
    }
  },
  mounted () {
    console.log(styles)
  }
}
</script>
