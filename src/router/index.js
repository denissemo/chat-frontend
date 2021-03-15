import { createRouter, createWebHashHistory } from "vue-router";
import { isAuth, isNotAuth } from "@/router/guard";

const routes = [
  {
    path: "",
    redirect: "/account",
    component: () => import("@/views/layouts/app"),
    children: [
      {
        path: "account",
        beforeEnter: isAuth,
        component: () => import("@/views/pages/account")
      }
    ]
  },
  {
    path: "/auth",
    redirect: "/auth/login",
    component: () => import("@/views/layouts/app"),
    children: [
      {
        path: "login",
        beforeEnter: isNotAuth,
        component: () => import("@/views/pages/auth/login")
      },
      {
        path: "sign-up",
        beforeEnter: isNotAuth,
        component: () => import("@/views/pages/auth/sign-up")
      }
    ]
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  base: process.env.BASE_URL,
  routes
});

export default router;
