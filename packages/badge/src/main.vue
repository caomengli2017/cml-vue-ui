<template>
    <div class="vu-badge">
      <slot></slot>
      <sup
        v-show="!hidden && (content || content === 0 || isDot)"
        v-text="content"
        class="vu-badge__content"
        :class="[
          'vu-badge__content--' + type,
          {
            'is-dot': isDot
          }
        ]">
      </sup>
    </div>
</template>

<script>
    export default {
        name: "VuBadge",
        props: {
          value: {},
          max: Number,
          isDot: {
            type: Boolean,
            default: false
          },
          hidden: {
            type: Boolean,
            default: false
          },
          type: {
            type: String,
            validator(val) {
              return ['success', 'warning', 'info', 'danger'].indexOf(val) > -1;
            }
          }
        },
        computed: {
          content() {
            if (this.isDot) return;

            const value = this.value;
            const max = this.max;

            if (typeof value === 'number' && typeof max === 'number') {
              return max < value ? `${max}+` : value;
            }

            return value;
          }
        }
    }
</script>

<style lang="scss" scoped>
    .vu-badge {
      position: relative;
      vertical-align: middle;
      display: inline-block
    }

    .vu-badge__content {
      background-color: #409EFF;
      border-radius: 10px;
      color: #FFF;
      display: inline-block;
      font-size: 12px;
      height: 18px;
      line-height: 18px;
      padding: 0 6px;
      text-align: center;
      white-space: nowrap;
      border: 1px solid #FFF;
      position: absolute;
      top: 0;
      right: 10px;
      -webkit-transform: translateY(-50%) translateX(100%);
      transform: translateY(-50%) translateX(100%)
    }

    .vu-badge__content.is-dot {
      height: 8px;
      width: 8px;
      padding: 0;
      right: 5px;
      border-radius: 50%
    }

    .vu-badge__content--success {
      background-color: #67C23A
    }

    .vu-badge__content--warning {
      background-color: #E6A23C
    }

    .vu-badge__content--info {
      background-color: #909399
    }

    .vu-badge__content--danger {
      background-color: #F56C6C
    }
</style>