import Vue from 'vue'
import Router from 'vue-router'
import Index from '../pages/index/Index'
import AppInGet from '../pages/appInGet/AppInGet'
import WeiXinInGet from '../pages/weiXinInGet/WeixinInGet'
import GetSuccess from '../pages/getSuccess/GetSuccess'
import CardPage from '../pages/cardPage/CardPage'
import CtivityRules from '../pages/ctivityRules/CtivityRules'
import Gift from '../pages/gift/Gift'
import OpportunityFinished from '../pages/opportunityFinished/OpportunityFinished'
import mint from '../components/mint.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'CardPage',
      component: CardPage
    },
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/appInGet',
      name: 'AppInGet',
      component: AppInGet
    },
    {
      path: '/weiXinInGet',
      name: 'WeiXinInGet',
      component: WeiXinInGet
    },
    {
      path: '/getSuccess',
      name: 'GetSuccess',
      component: GetSuccess
    },
    // {
    //   path: '/cardPage',
    //   name: 'CardPage',
    //   component: CardPage
    // },
    {
      path: '/ctivityRules',
      name: 'CtivityRules',
      component: CtivityRules
    },
    {
      path: '/gift',
      name: 'Gift',
      component: Gift
    },
    {
      path: '/opportunityFinished',
      name: 'OpportunityFinished',
      component: OpportunityFinished
    },
    {
      path: '/mint',
      name: 'mint',
      component: mint
    }
  ]
})
