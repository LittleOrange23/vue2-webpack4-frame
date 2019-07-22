import Vue from 'vue'
import App from './App.vue'




var vm = new Vue({
  el: '#app',
  data: {},
  methods: {},
  render: c => c(app),    //将app组件渲染到index.html 中
  //router   //1.4挂载路由对象到vm实例上
})