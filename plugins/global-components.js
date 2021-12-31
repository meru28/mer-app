import Vue from 'vue'
// eslint-disable-next-line import/no-named-as-default
import Fragment from 'vue-fragment'
import LazyImage from '../components/_base/LazyImage.vue'
import LazyDivImage from '~/components/_base/LazyDivImage.vue'
Vue.component('LazyImage', LazyImage)
Vue.component('LazyDivImage', LazyDivImage)
// eslint-disable-next-line import/no-named-as-default-member
Vue.use(Fragment.Plugin)
