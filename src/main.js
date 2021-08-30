import Vue from 'vue'
import App from './App.vue'
import router from './router'
import "./index.css"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faWindowMaximize } from '@fortawesome/free-solid-svg-icons'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faWindowMaximize)
library.add(faGithubSquare)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
