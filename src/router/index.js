import Vue from 'vue'
import Router from 'vue-router'
import Form from '@/components/Form'
import Preview from '@/components/Preview'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Form',
      component: Form
    },
    {
      path: '/preview',
      name: 'Preview',
      component: Preview
    }
  ]
})
