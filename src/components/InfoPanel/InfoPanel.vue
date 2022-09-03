<template>
  <div :class="classes">
    <i v-if="icon" :class="icon"></i>
    <div class="info__panel__text">
      <p v-if="title" class="info__panel__title">{{ title }}</p>
      <p class="info__panel__description">{{ description }}</p>
    </div>
  </div>
</template>

<style lang="scss" src="./InfoPanel.scss"></style>

<script>
import { reactive, computed } from 'vue';

export default {
  name: 'info-panel',

  props: {
    description: {
      type: String,
      required: true
    },
    title: {
      type: String
    },
    icon: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      validator: function (value) {
        return ['info', 'warning', 'error'].includes(value);
      },
    }
  },

  setup(props) {
    props = reactive(props);

    return {
      classes: computed(() => ({
        'info__panel': true,
        [`info__panel--${props.type}`]: true
      })),
      icon: computed(() => {
        if (!props.icon) {
          return;
        }

        const icon = {
          info: 'info',
          warning: 'warning',
          error: 'warning'
        }[props.type];

        return `icon-${icon}`;
      }),
      description: computed(() => props.description),
      title: computed(() => props.title)
    }
  },
};
</script>
