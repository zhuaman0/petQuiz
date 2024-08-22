const routes = [
  {
    path: "/",
    component: () => import("../pages/MainPage.vue"),
  },
  {
    path: "/user",
    component: () => import("../pages/UserPage.vue")
  },
  {
    path: "/login",
    component: () => import("../pages/LoginPage.vue")
  },
  {
    path: "/main",
    component: () => import("../pages/UserUse.vue")
  },
  {
    path: '/scratch',
    component: () => import("../pages/ScractchPage.vue")
  },
  {
    path: "/ah",
    component: () => import("../pages/AhPage.vue")
  }
];

export default routes;
