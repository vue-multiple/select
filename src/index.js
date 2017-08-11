import VmSelect from './components/Select.vue'
import VmOption from './components/option.vue'
import VmSelectDropdown from './components/select-dropdown.vue'
import VmOptionGroup from './components/option-group.vue'
import './styles/less/index.less'

const install = function(Vue,opts = {}){
    if (install.installed) return
    Vue.component(VmSelect.name, VmSelect)
    Vue.component(VmOption.name, VmOption)
    Vue.component(VmSelectDropdown.name, VmSelectDropdown)
    Vue.component(VmOptionGroup.name, VmOptionGroup)
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export {
    VmSelect,
    VmOption,
    VmSelectDropdown,
    VmOptionGroup
}

export default {
    install,
    VmSelect,
    VmOption,
    VmSelectDropdown,
    VmOptionGroup
}