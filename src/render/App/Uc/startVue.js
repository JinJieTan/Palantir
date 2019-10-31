import Vue from 'vue/dist/vue.common.js';
// import routers from 'vue-router';
import app from './xxxx.vue';
function test(props) {
  console.log(props);
  new Vue({
    el: '#test',
    data: {
      msg: 'Hello, Vue.js.',
    },
    template: '<div></div>',
    render: (h) => h('h1', {}, 'Hi, Vue.js '),
  });
  // new Vue({
  //   el: 'test',
  //   render(h) {
  //     return h(app);
  //   },
  // });
}

export default test;
