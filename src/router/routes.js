const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      { path: "/home_page", component: () => import("pages/Home-page.vue") },
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
      { path: "/try_napi", component: () => import("pages/try_napi.vue") },
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
