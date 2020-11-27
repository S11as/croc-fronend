<template>
  <div id="app" style="background: #F9F9F9">
    <div class="container-fluid" style="padding: 0">
      <div class="row" style="margin: 0">
        <div class="col-3" style="padding: 0">
          <NavBar/>
        </div>
        <div class="col background">
          <router-view/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'

export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

<style>
.background{
  padding: 30px 100px !important;
}
</style>
