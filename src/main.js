// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
require('~/main.css')
import DefaultLayout from '~/layouts/Default.vue'
import Store from './plugins/store'
// https://doppelmutzi.github.io/efficient-eslint-prettier-vue-workflow/
export default function(Vue, {
    head,
}) {

    // Set default layout as a global component
    Vue.component('Layout', DefaultLayout)
    Vue.use(Store)
    head.link.push({
        as: 'font',
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Staatliches',
    }, {
        as: 'font',
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Roboto',
    }, {
        as: 'font',
        rel: 'preload',
        href: 'https://fonts.googleapis.com/css2?family=Roboto',
    }, {
        as: 'font',
        rel: 'preload',
        href: 'https://fonts.googleapis.com/css2?family=Staatliches',
    })

}