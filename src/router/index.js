import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Contact from '../views/Contact.vue'
import Projects from '../views/Projects.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/contact',
    component: Contact
  },
  {
    path: '/projects',
    component: Projects
  },


]

const router = new VueRouter({
  routes
})

export default router
