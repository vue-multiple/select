import Vue from 'vue'
import App from './App.vue'

// import {VmSelect, VmOption, VmSelectDropdown, VmOptionGroup} from '../../src/index.js'
// Vue.component(VmSelect.name, VmSelect)
// Vue.component(VmOption.name, VmOption)
// Vue.component(VmSelectDropdown.name, VmSelectDropdown)
// Vue.component(VmOptionGroup.name, VmOptionGroup)


import VmSelect from '../../src/index.js'
Vue.use(VmSelect)

import VueDemonstration from 'vue-demonstration'
Vue.component('demonstration', VueDemonstration)

new Vue({
    el: '#app',
    render: h => h(App)
})
