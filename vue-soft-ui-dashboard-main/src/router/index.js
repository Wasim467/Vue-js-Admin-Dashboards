import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "@/views/Dashboard.vue";
import Tables from "@/views/Tables.vue";
import Billing from "@/views/Billing.vue";
import VirtualReality from "@/views/VirtualReality.vue";
import Profile from "@/views/Profile.vue";
import Rtl from "@/views/Rtl.vue";
import SignIn from "@/views/SignIn.vue";
import SignUp from "@/views/SignUp.vue";

const routes = [
  {
    path: "/",
    name: "/",
    redirect: "/dashboard",
    meta: { isAuth: true }
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    meta: { isAuth: true }
  },
  {
    path: "/tables",
    name: "Tables",
    component: Tables,
    meta: { isAuth: true }
  },
  {
    path: "/billing",
    name: "Billing",
    component: Billing,
    meta: { isAuth: true }
  },
  {
    path: "/virtual-reality",
    name: "Virtual Reality",
    component: VirtualReality,
    meta: { isAuth: true }
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    meta: { isAuth: true }
  },
  {
    path: "/rtl-page",
    name: "Rtl",
    component: Rtl,
    meta: { isAuth: true }
  },
  {
    path: "/sign-in",
    name: "Sign In",
    component: SignIn,
  },
  {
    path: "/sign-up",
    name: "Sign Up",
    component: SignUp,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active",
});

router.beforeEach((to,from,next)=>{
  if(to.matched.some(record => record.meta.isAuth)){
      let token = (localStorage.getItem('token'))
      if(!token){
          next('/sign-in')
      }
  }
  next()
});

export default router;
