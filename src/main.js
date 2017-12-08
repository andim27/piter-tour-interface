// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
//import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.css';
import "../static/css/styleolta.css";

var VueEventBus = require('vue-event-bus');
Vue.use(VueEventBus);

//Vue.use(BootstrapVue);
Vue.config.productionTip = false;
Vue.config.baseURL ="http://olta-tour-copy.local";
//---set api url---
Vue.prototype.$siteName = 'http://olta-tour-copy.local';

//-----------------
Vue.directive('click-outside', {
    bind () {
        let self  = this;
        this.event = function (event) {
            self.vm.$emit(self.expression, event)
        };
        this.el.addEventListener('click', this.stopProp);
        document.body.addEventListener('click', this.event)
    },

    unbind() {
        this.el.removeEventListener('click', this.stopProp);
        document.body.removeEventListener('click', this.event)
    },

    stopProp(event) { event.stopPropagation() }
});
//-----------------
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});

