import Vue from 'vue';
import App from './App.vue';
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCq16GJWXu0ySRPpCp3ZsslKjiuda-T8hE',
  }
});

const VueScrollTo = require('vue-scrollto');

Vue.use(VueScrollTo);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
