import Vue from 'vue/dist/vue.common.js';
// import routers from 'vue-router';
import App from './app.vue';
Vue.config.productionTip = false;
function test(props) {
  console.log(props);
  // new Vue({
  //   el: '#test',
  //   data: {
  //     msg: 'Hello, Vue.js.',
  //   },
  //   template: '<div></div>',
  //   render: (h) => h('h1', {}, 'Hi, Vue.js '),
  // });
  var Profile = Vue.extend({
    template: '<p>{{firstName}} {{lastName}} aka {{alias}}</p>',
    data: function() {
      return {
        firstName: 'Walter',
        lastName: 'White',
        alias: 'Heisenberg',
      };
    },
  });
  // 创建 Profile 实例，并挂载到一个元素上。
  new Profile().$mount('#test');
}

export default test;
