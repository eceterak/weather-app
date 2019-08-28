import Vue from 'vue'
import App from './App.vue'
import VueInputAutowidth from 'vue-input-autowidth'
import textFit from 'textfit'

Vue.config.productionTip = false;
Vue.use(VueInputAutowidth);

new Vue({
    render: h => h(App),
}).$mount('#app');

(function() {
    textFit(document.querySelector('.weather-text'), {multiLine: true});
})();