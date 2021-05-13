import Vue from 'vue'
import router from './router';
import singleSpaVue from 'single-spa-vue'

import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

import App from './App.vue'

Vue.use(Buefy)
Vue.config.productionTip = false

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    render(h) {
      return h(App, {
        props: {
          // single-spa props are available on the "this" object. Forward them to your component as needed.
          // https://single-spa.js.org/docs/building-applications#lifecyle-props
          // if you uncomment these, remember to add matching prop definitions for them in your App.vue file.
          /*
          name: this.name,
          mountParcel: this.mountParcel,
          singleSpa: this.singleSpa,
          */
        }
      })
    },
    router
  }
})

const { bootstrap, mount, unmount } = vueLifecycles
export { bootstrap, mount, unmount }