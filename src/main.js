import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import VueSimpleMarkdown from 'vue-simple-markdown'
// import 'vue-simple-markdown/dist/vue-simple-markdown.css'
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// import { faGithub, faLinkedin, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
// import { faCloudDownloadAlt } from '@fortawesome/free-solid-svg-icons'

// library.add(faGithub, faLinkedin, faTwitter, faInstagram, faCloudDownloadAlt)

// Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

// Vue.use(VueSimpleMarkdown)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
