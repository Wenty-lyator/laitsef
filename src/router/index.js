import VueRouter from 'vue-router'

import Mainpage from '../pages/Mainpage'
import Notfound from '../pages/404'
import About from '../pages/About'
import Contacts from '../pages/ContactPage'
import T1 from '../pages/T1'
import R1 from '../pages/R1'
import Nor from '../pages/Nor'

export default new VueRouter({
  mode: 'history',
  routes: [
      {
         path: '/', //Главная
         name: 'main',
         component: Mainpage
      },
      {
         path: '*', //ошибка
         name: '404',
         component: Notfound
      },
      {
         path: '/about', // о нас (о компаний)
         name: 'about',
         component: About
      },
      {
         path: '/contacts', //контакты
         name: 'contacts',
         component: Contacts
      },
      {
         path: '/TI', //TI
         name: 't1',
         component: T1
      },
      {
         path: '/RI', //RI
         name: 'r1',
         component: R1
      },
      {
         path: '/not-ready', //PI
         name: 'nor',
         component: Nor
      }
   ]
})