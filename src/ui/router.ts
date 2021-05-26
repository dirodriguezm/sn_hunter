import HomePage from '@/UI/pages/home/HomePage'
import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'HomePage',
		component: HomePage
	}
]

export const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})