import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
    },
    {
      path: '/tyc',
      name: 'tyc',
      component: () => import(/* webpackChunkName: "tyc" */ '@/views/TyC.vue')
    },
    {
      path: '/iniciar',
      name: 'iniciar',
      component: () => import(/* webpackChunkName: "iniciosesion" */ '@/views/InicioSesion.vue')
    },
    {
      path: '/registrar',
      name: 'registrar',
      component: () => import(/* webpackChunkName: "registro" */ '@/views/Registro.vue')
    },
    {
      path: '/signature',
      component: () => import('@/components/signature.vue')
    }
  ]
})
