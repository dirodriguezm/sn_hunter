import { router, vuetify } from '@/UI'
import Store from '@/Store'
import App from '@/UI/app'
import Vue from 'vue'

Vue.config.productionTip = false

new Vue({
	router,
	store: Store,
	vuetify,
	render: (h): Vue.VNode => h(App)
}).$mount('#app')