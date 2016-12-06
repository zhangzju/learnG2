<template>
  <div id="app">
    <PlotG2></PlotG2>
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
