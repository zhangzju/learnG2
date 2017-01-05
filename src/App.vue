<template>
  <div id="app">
    <p>
    <router-link to="/LineG2">Line</router-link>
    <router-link to="/PlotG2">Plot</router-link>
    </p>
    <router-view></router-view>
  </div>
</template>

<script>
import PlotG2 from './components/PlotG2'

export default {
  name: 'app',
  components: {
    PlotG2
  },
  data () {
    return {
      msg : 'G2 graphic'
    }
  },

}
</script>

<style>
#app {
  display:block;
  margin:10%;
}
</style>
