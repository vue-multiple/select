export const sourcecode1 = `<vm-select v-model="value1" placeholder="请选择">
  <vm-option
    v-for="item in options"
    :key="item.value"
    :label="item.label"
    :value="item.value">
  </vm-option>
</vm-select>

<script>
  export default {
    data() {
      return {
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: ''
      }
    }
  }
</script>`

export const sourcecode2 = `<vm-select v-model="value2" placeholder="请选择">
  <vm-option
    v-for="item in options2"
    :key="item.value"
    :label="item.label"
    :value="item.value"
    :disabled="item.disabled">
  </vm-option>
</vm-select>

<script>
  export default {
    data() {
      return {
        options2: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶',
          disabled: true
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value2: ''
      }
    }
  }
</script>`

export const sourcecode3 = `<vm-select v-model="value3" disabled placeholder="请选择">
  <vm-option
    v-for="item in options2"
    :key="item.value"
    :label="item.label"
    :value="item.value"
    :disabled="item.disabled">
  </vm-option>
</vm-select>

<script>
  export default {
    data() {
      return {
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value3: ''
      }
    }
  }
</script>`

export const sourcecode4 = `<vm-select v-model="value4" clearable placeholder="请选择">
  <vm-option
    v-for="item in options"
    :key="item.value"
    :label="item.label"
    :value="item.value">
  </vm-option>
</vm-select>

<script>
  export default {
    data() {
      return {
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value4: ''
      }
    }
  }
</script>`

export const sourcecode5 =`<vm-select v-model="value5" multiple placeholder="请选择">
  <vm-option
    v-for="item in options"
    :key="item.value"
    :label="item.label"
    :value="item.value">
  </vm-option>
</vm-select>

<script>
  export default {
    data() {
      return {
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value5: []
      }
    }
  }
</script>`

export const sourcecode6 =`<vm-select v-model="value6" placeholder="请选择">
  <vm-option
    v-for="item in cities"
    :key="item.value"
    :label="item.label"
    :value="item.value">
    <span style="float: left">{{ item.label }}</span>
    <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
  </vm-option>
</vm-select>

<script>
  export default {
    data() {
      return {
        cities: [{
          value: 'Beijing',
          label: '北京'
        }, {
          value: 'Shanghai',
          label: '上海'
        }, {
          value: 'Nanjing',
          label: '南京'
        }, {
          value: 'Chengdu',
          label: '成都'
        }, {
          value: 'Shenzhen',
          label: '深圳'
        }, {
          value: 'Guangzhou',
          label: '广州'
        }],
        value6: ''
      }
    }
  }
</script>`

export const sourcecode7 =`<vm-select v-model="value7" placeholder="请选择">
  <vm-option-group
    v-for="group in options3"
    :key="group.label"
    :label="group.label">
    <vm-option
      v-for="item in group.options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </vm-option>
  </vm-option-group>
</vm-select>

<script>
  export default {
    data() {
      return {
        options3: [{
          label: '热门城市',
          options: [{
            value: 'Shanghai',
            label: '上海'
          }, {
            value: 'Beijing',
            label: '北京'
          }]
        }, {
          label: '城市名',
          options: [{
            value: 'Chengdu',
            label: '成都'
          }, {
            value: 'Shenzhen',
            label: '深圳'
          }, {
            value: 'Guangzhou',
            label: '广州'
          }, {
            value: 'Dalian',
            label: '大连'
          }]
        }],
        value7: ''
      }
    }
  }
</script>`

export const sourcecode8 =`<vm-select v-model="value8" filterable placeholder="请选择">
  <vm-option
    v-for="item in options"
    :key="item.value"
    :label="item.label"
    :value="item.value">
  </vm-option>
</vm-select>

<script>
  export default {
    data() {
      return {
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value8: ''
      }
    }
  }
</script>`

export const sourcecode9 =`<vm-select
  v-model="value9"
  multiple
  filterable
  remote
  placeholder="请输入关键词"
  :remote-method="remoteMethod"
  :loading="loading">
  <vm-option
    v-for="item in options4"
    :key="item.value"
    :label="item.label"
    :value="item.value">
  </vm-option>
</vm-select>

<script>
  export default {
    data() {
      return {
        options4: [],
        value9: [],
        list: [],
        loading: false,
        states: ["Alabama", "Alaska", "Arizona",
        "Arkansas", "California", "Colorado",
        "Connecticut", "Delaware", "Florida",
        "Georgia", "Hawaii", "Idaho", "Illinois",
        "Indiana", "Iowa", "Kansas", "Kentucky",
        "Louisiana", "Maine", "Maryland",
        "Massachusetts", "Michigan", "Minnesota",
        "Mississippi", "Missouri", "Montana",
        "Nebraska", "Nevada", "New Hampshire",
        "New Jersey", "New Mexico", "New York",
        "North Carolina", "North Dakota", "Ohio",
        "Oklahoma", "Oregon", "Pennsylvania",
        "Rhode Island", "South Carolina",
        "South Dakota", "Tennessee", "Texas",
        "Utah", "Vermont", "Virginia",
        "Washington", "West Virginia", "Wisconsin",
        "Wyoming"]
      }
    },
    mounted() {
      this.list = this.states.map(item => {
        return { value: item, label: item };
      });
    },
    methods: {
      remoteMethod(query) {
        if (query !== '') {
          this.loading = true;
          setTimeout(() => {
            this.loading = false;
            this.options4 = this.list.filter(item => {
              return item.label.toLowerCase()
                .indexOf(query.toLowerCase()) > -1;
            });
          }, 200);
        } else {
          this.options4 = [];
        }
      }
    }
  }
</script>`

export const sourcecode10 =`<vm-select
  v-model="value10"
  multiple
  filterable
  allow-create
  placeholder="请选择文章标签">
  <vm-option
    v-for="item in options5"
    :key="item.value"
    :label="item.label"
    :value="item.value">
  </vm-option>
</vm-select>

<script>
  export default {
    data() {
      return {
        options5: [{
          value: 'HTML',
          label: 'HTML'
        }, {
          value: 'CSS',
          label: 'CSS'
        }, {
          value: 'JavaScript',
          label: 'JavaScript'
        }],
        value10: []
      }
    }
  }
</script>`

