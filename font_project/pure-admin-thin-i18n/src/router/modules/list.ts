import { $t } from "@/plugins/i18n";

export default {
  path: "/error",
  redirect: "/error/403",
  meta: {
    icon: "ri:information-line",
    // showLink: false,
    title: '模块',
    rank: 9
  },
  children: [
    {
      path: "/error/403",
      name: "403",
      component: () => import("@/views/list/bookList/bookList.vue"),
      meta: {
        title: '列表页面'
      }
    }
  ]
} satisfies RouteConfigsTable;
