import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import LineG2 from './components/LineG2'
import PlotG2 from './components/PlotG2'

Vue.use(VueRouter)
const routes = [
  { path: '/LineG2', component: LineG2 },
  { path: '/PlotG2', component: PlotG2 }
]

const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
