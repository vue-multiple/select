# select

> Vue-based select component

## Install

```bash
npm install vue-multiple-select -S
```

## Quick Start

```bash
import Vue from 'vue'

import {VmSelect, VmOption, VmSelectDropdown, VmOptionGroup} from 'vue-multiple-select'
Vue.component(VmSelect.name, VmSelect)
Vue.component(VmOption.name, VmOption)
Vue.component(VmSelectDropdown.name, VmSelectDropdown)
Vue.component(VmOptionGroup.name, VmOptionGroup)
```
OR
```bash
import Vue from 'vue'

import VmSelect from 'vue-multiple-select'
Vue.use(VmSelect)
```

For more information, please refer to [select](http://vue-multiple.github.io/select) in our documentation.

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run demo:dev

# build for demo with minification
npm run demo:build

# build for gh-pages with minification
npm run demo:prepublish

# build for production with minification
npm run build
```

## LICENSE

[MIT](http://opensource.org/licenses/MIT)

