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
      data : [
        {action: '访问', visitor: 500},
        {action: '浏览', visitor: 400},
        {action: '交互', visitor: 300},
        {action: '下单', visitor: 200},
        {action: '付款', visitor: 100}
        ]
    }
  },

}
</script>

<style>

</style>
