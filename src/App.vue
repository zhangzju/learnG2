<template>
  <div id="app">
    <div class="selection">
      <router-link to="/LineG2">Line</router-link>
      <router-link to="/PlotG2">Plot</router-link>
    </div>
    <div class="show">
      <router-view></router-view>
    </div>
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

<style scoped>
a {
    text-decoration: none;
    font-size: 15px;
}

#app {
  display:block;
  margin:10%;
  font-family: Helvetica;
}

.selection {
  display: flex;
  flex-direction: row;
  height: 20vh;
  justify-content: center;
}

.show {
  width: 50vh;
  height: 50vh;
  border: 1px solid #ffffff;
}

</style>
