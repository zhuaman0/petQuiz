const routes = [
  {
    path: "/",
    component: () => import("../pages/MainPage.vue")
  },
  {
    path: "/header",
    component: () => import("../pages/HeaderPage.vue")
  }
]

export default routes
