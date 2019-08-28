import Vue from 'vue'
import App from './App.vue'
import VueInputAutowidth from 'vue-input-autowidth'

Vue.config.productionTip = false
Vue.use(VueInputAutowidth)

new Vue({
    render: h => h(App),
}).$mount('#app');

(function() {    
    // Simple function to set city input width.
    // var resizeInput = function() {
    //     console.log('change');
    //     this.style.width = this.value.length + 'ch';
    // }

    //let input = document.querySelector('input');
    //console.log(input.getBoundingClientRect().width);
    //input.addEventListener('input', resizeInput);
    //input.addEventListener('change', resizeInput);
    //resizeInput.call(input);
    
})();

// (function() {    
//     // Simple function to set city input width.
//     function resizable (el, factor) {
//         var int = Number(factor) || 7.7;

//         function resize() {
//             el.style.width = ((el.value.length+1) * int) + 'px'
//         }

//         var e = 'keyup,keypress,focus,blur,change'.split(',');

//         for (var i in e) el.addEventListener(e[i],resize,false);

//         //el.addEventListener('input', resize);

//         resize();
//       }

//       resizable(document.getElementById('txt'),15);
    
// })();

// function resize(el, binding) {
//   const mirror = document.querySelector(
//     `.vue-input-autowidth-mirror-${el.dataset.uuid}`
//   );
//   const defaults = { maxWidth: "none", minWidth: "none", comfortZone: 0 };
//   const options = Object.assign({}, defaults, binding.value);

//   el.style.maxWidth = options.maxWidth;
//   el.style.minWidth = options.minWidth;

//   let val = el.value;
//   if (!val) {
//     val = el.placeholder || "";
//   }
//   while (mirror.childNodes.length) {
//     mirror.removeChild(mirror.childNodes[0]);
//   }
//   mirror.appendChild(document.createTextNode(val));
//   let newWidth = mirror.getBoundingClientRect().width + options.comfortZone;

//   if (newWidth != el.getBoundingClientRect().width) {
//     el.style.width = `${newWidth}px`;
//   }
// }