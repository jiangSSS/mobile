import Vue from 'vue'
import Router from 'vue-router'
// import Home from "@/views/Home/Home.vue"
// import List_1 from "@/components/Home/List-1.vue"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("@/components/Home/Home1.vue"),
      meta: {
        title: "我是首页"
      }
    },
    {
      path: "/message",
      name: "message",
      component: () => import("@/components/Message/Message.vue"),
      meta: {
        title: "通知早知道"
      }
    },
    {
      path: "/own",
      name: "own",
      component: () => import("@/components/Own/Own.vue"),
      meta: {
        title: "我的党建"
      }
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@/components/Home/login.vue"),
      meta: {
        title: "登录"
      }
    },
    {
      path: "/list_1",
      name: "list_1",
      component: () => import("@/components/Home/List_1.vue"),
      meta: {
        title: "信工新闻眼"
      }
      // children:[
        
      // ]
    },
    {
      path: "/list_2",
      name: "list_2",
      component: () => import("@/components/Home/List_2.vue"),
      meta: {
        title: "掌上组织生活"
      }
    },
    {
      path: "/comments",
      name: "comments",
      component: () => import("@/components/Hand/comments.vue"),
      meta: {
        title: "民主评议"
      }
    },
    {
      path: "/Personal",
      name: "Personal",
      component: () => import("@/components/Hand/Personal.vue"),
      meta: {
        title: "个人总结"
      }
    },
    {
      path: "/list_3",
      name: "list_3",
      component: () => import("@/components/Home/List_3.vue"),
      meta: {
        title: "党员云互动"
      }
    },
    {
      path: "/list_4",
      name: "list_4",
      component: () => import("@/components/Home/List_4.vue"),
      meta: {
        title: "党建一点通"
      }
    },
    {
      path: "/list_5",
      name: "list_5",
      component: () => import("@/components/Home/List_5.vue"),
      meta: {
        title: "党员亮身份"
      }
    },
    {
      path: "/list_6",
      name: "list_6",
      component: () => import("@/components/Home/List_6.vue"),
      meta: {
        title: "党史上的今天"
      }
    },
    {
      path: "/m_detail1",
      name: "m_detail1",
      component: () => import("@/components/Message/M_detail1.vue"),
      meta: {
        title: "通知1"
      }
    },
    {
      path: "/list1_detail",
      name: "list1_detail",
      component: () => import("@/components/Home/List1_detail.vue"),
      meta: {
        title: "信工新闻眼"
      }
    },
    {
      path: "/list3_detail",
      name: "list3_detail",
      component: () => import("@/components/Home/List3_detail.vue"),
      meta: {
        title: "党员云互动"
      }
    },
    {
      path: "/list4_detail",
      name: "list4_detail",
      component: () => import("@/components/Home/List4_detail.vue"),
      meta: {
        title: "党建一点通"
      }
    },
    {
      path: "/list5_detail",
      name: "list5_detail",
      component: () => import("@/components/Home/List5_detail.vue"),
      meta: {
        title: "党员亮身份"
      }
    },
    {
      path: "/list2_learning",
      name: "learning",
      component: () => import("@/components/Hand/learning.vue"),
      meta: {
        title: "政治学习"
      }
    },
    {
      path: "/list2_report",
      name: "report",
      component: () => import("@/components/Hand/report.vue"),
      meta: {
        title: "思想汇报"
      }
    },
    {
      path: "/list2_experience",
      name: "experience",
      component: () => import("@/components/Hand/experience.vue"),
      meta: {
        title: "心得总结"
      }
    },
    {
      path: "/list2_democracy",
      name: "democracy",
      component: () => import("@/components/Hand/democracy.vue"),
      meta: {
        title: "民主评议"
      }
    },
    {
      path: "/list2_find",
      name: "find",
      component: () => import("@/components/Hand/find.vue"),
      meta: {
        title: "流动党员找组织"
      }
    },
    {
      path: "/learn",
      name: "learn",
      component: () => import("@/components/Banner/learn.vue"),
      meta: {
        title: "随时随地学"
      }
    },
    {
      path: "/shoot",
      name: "shoot",
      component: () => import("@/components/Banner/shoot.vue"),
      meta: {
        title: "随时随地拍"
      }
    },
    {
      path: "/shoot_detail",
      name: "shoot_detail",
      component: () => import("@/components/Banner/shoot_detail.vue"),
      meta: {
        title: "随时随地拍"
      }
    },
    {
      path: "/system",
      name: "system",
      component: () => import("@/components/Banner/system.vue"),
      meta: {
        title: "制度建设"
      }
    },
    {
      path: "/activity",
      name: "activity",
      component: () => import("@/components/Banner/activity.vue"),
      meta: {
        title: "特色活动"
      }
    },
    {
      path: "/userinfo",
      name: "userinfo",
      component: () => import("@/components/Own/userinfo.vue"),
      meta: {
        title: "个人信息"
      }
    },
    {
      path: "/integral",
      name: "integral",
      component: () => import("@/components/Own/integral.vue"),
      meta: {
        title: "个人量化积分"
      }
    },
    {
      path: "/scoredetail",
      name: "scoredetail",
      component: () => import("@/components/Own/scoredetail.vue"),
      meta: {
        title: "积分明细"
      }
    },
    {
      path: "/update_pwd",
      name: "update_pwd",
      component: () => import("@/components/Own/update_pwd.vue"),
      meta: {
        title: "修改密码"
      }
    },
    {
      path: "/payment",
      name: "payment",
      component: () => import("@/components/Own/payment.vue"),
      meta: {
        title: "党费缴纳"
      }
    },
    
  ]
})
