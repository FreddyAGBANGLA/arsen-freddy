/*
App
Created at 09/04/2021 11:44
Author: Khaliq ALI
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import pathResolver from '@/plugins/loader'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'About',
  //   component: pathResolver('about', 'index')
  // },
  {
    path: '/',
    name: 'Accueil',
    component: pathResolver('accueil', 'index')
  },
  {
    path: '/accueil',
    name: 'Accueil',
    component: pathResolver('accueil', 'index')
  },
  {
    path: '/couvertures',
    name: 'Couvertures',
    component: pathResolver('couvertures', 'index')
  },
  {
    path: '/engagement',
    name: 'Engagement',
    component: pathResolver('engagement', 'index')
  },
  {
    path: '/questions',
    name: 'Questions',
    component: pathResolver('questions', 'index')
  },
  {
    path: '/remboursements',
    name: 'Remboursements',
    component: pathResolver('remboursements', 'index')
  },
  {
    path: '/dreamteam',
    name: 'Dream Team',
    component: pathResolver('dreamteam', 'index')
  },
  {
    path: '/usecondition',
    name: 'Use condition',
    component: pathResolver('usecondition', 'index')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    // retourner la position désirée
    if (savedPosition) {
      return savedPosition
    } else {
      if (to.hash) {
        return { selector: to.hash }
      } else {
        return { x: 0, y: 0 }
      }
    }
  }
})

export default router
