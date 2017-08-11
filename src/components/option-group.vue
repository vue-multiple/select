<template>
  <ul class="vm-select-group__wrap">
    <li class="vm-select-group__title" v-show="visible">{{ label }}</li>
    <li>
      <ul class="vm-select-group">
        <slot></slot>
      </ul>
    </li>
  </ul>
</template>

<script type="text/babel">
  import Emitter from '../mixins/emitter';

  export default {
    mixins: [Emitter],

    name: 'VmOptionGroup',

    componentName: 'VmOptionGroup',

    props: {
      label: String,
      disabled: {
        type: Boolean,
        default: false
      }
    },

    data() {
      return {
        visible: true
      };
    },

    watch: {
      disabled(val) {
        this.broadcast('VmOption', 'handleGroupDisabled', val);
      }
    },

    methods: {
      queryChange() {
        this.visible = this.$children &&
          Array.isArray(this.$children) &&
          this.$children.some(option => option.visible === true);
      }
    },

    created() {
      this.$on('queryChange', this.queryChange);
    },

    mounted() {
      if (this.disabled) {
        this.broadcast('VmOption', 'handleGroupDisabled', this.disabled);
      }
    }
  };
</script>
