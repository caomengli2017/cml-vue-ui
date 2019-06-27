import badge from './src/main.vue';

badge.install = function (Vue) {
    Vue.component(badge.name,badge)
}

export default badge;