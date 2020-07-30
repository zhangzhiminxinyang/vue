import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import SayHi from '@/components/SayHi'
import DirectiveFor from "../components/DirectiveFor";
import DirectiveIf from "../components/DirectiveIf";
import DirectiveForIf from "../components/DirectiveForIf";
import DirectiveBind from "../components/DirectiveBind";
import Model from "../components/Model";
import BlogList from "../components/BlogList";
import Blog from "../components/Blog";
import TwoWayBinding from "../components/TwoWayBinding";
import FormBinding from "../components/FormBinding";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/say_hi',
      name:'SayHi',
      component: SayHi
    },
    {
      path:'/for',
      name:'DirectiveFor',
      component: DirectiveFor
    },
    {
      path:'/if',
      name:'DirectiveIf',
      component: DirectiveIf
    },
    {
      path:'/for_if',
      name:'v-for和v-if的优先级',
      component: DirectiveForIf
    },
    {
      path:'/bind',
      name:'v-bind的使用',
      component: DirectiveBind
    },
    {
      path:'/model',
      name:'v-model双向绑定',
      component: Model
    },
    {
      path:'/blog_lists',
      name:'博客列表',
      component: BlogList
    },

    {
      path:'/blog',
      name:'Blog',
      component: Blog
    },

    {
      path:'/two_way_binding',
      name:'TwoWayBinding',
      component: TwoWayBinding
    },

    {
      path:'/form_binding',
      name:'FormBinding',
      component: FormBinding
    },
  ]
})
