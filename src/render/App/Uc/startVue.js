import Vue from 'vue/dist/vue.common.js';
// import routers from 'vue-router';
import App from './app.vue';
Vue.config.productionTip = false;
function test(props) {
  console.log(props);
  new Vue({
    render: h => h(App),
  }).$mount('#test');
}

export default test;