const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "/previousIndex",
        component: () => import("pages/IndexPage.vue"),
      },
      { path: "", redirect: "/home_page" },
      { path: "/home_page", component: () => import("pages/try_napi.vue") },
      { path: "/try_item", component: () => import("pages/try_item.vue") },
      {
        path: "/aircond_page",
        component: () => import("pages/Aircond_page.vue"),
      },
      { path: "/emars_page", component: () => import("pages/Emars_page.vue") },
      { path: "/contact_us", component: () => import("pages/contact_us.vue") },
      {
        path: "/about_us",
        component: () => import("pages/About_us.vue"),
      },
      { path: "/fms_page", component: () => import("pages/Fms_page.vue") },
      { path: "/try_new", component: () => import("pages/try_new.vue") },
      { path: "/home_page", component: () => import("pages/try_napi.vue") },
      { path: "/try_ajik", component: () => import("pages/try_ajik.vue") },
      { path: "/Main_About", component: () => import("pages/Main_About.vue") },
      { path: "/Rent_Equip", component: () => import("pages/Rent_Equip.vue") },
      { path: "/Booking", component: () => import("pages/BookNow.vue") },
      { path: "/Energy_Audit", component: () => import("pages/EA.vue") },
      {
        path: "/Manufacturing",
        component: () => import("pages/Home-page.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
