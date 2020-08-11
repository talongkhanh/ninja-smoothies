import Vue from 'vue'
import VueRouter from 'vue-router'

import Index from '@/views/Index'
import Add from '@/views/Add'
import Edit from '@/views/Edit'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'Index',
  component: Index
},
{
  path: '/add',
  name: 'Add',
  component: Add
},
{
  path: '/edit/:slug',
  name: 'Edit',
  component: Edit
}
]

// eslint-disable-next-line no-new
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router