<template>
  <div id="app">
  <LineG2></LineG2>
  </div>
</template>

<script>
import LineG2 from './components/LineG2'

export default {
  name: 'app',
  components: {
    LineG2
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
    }
  },

}
</script>

<style>

</style>
