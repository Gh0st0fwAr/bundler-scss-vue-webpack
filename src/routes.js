
import Home from '@/components/Home.vue'
import mainPage from '@/components/mainPage.vue'
import Login from '@/components/Login.vue'
import Reg from '@/components/Reg.vue'

const routes = [
   {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
         {
            path: '/main',
            name: 'Main',
            component: mainPage
         },
      ],
   },
   {      
      path: '/login',
      name: 'Login',
      component: Login
   },
   {      
      path: '/reg',
      name: 'Reg',
      component: Reg 
   },
   

]

export default routes;