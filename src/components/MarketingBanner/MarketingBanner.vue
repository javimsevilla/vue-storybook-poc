<template>
  <div class="marketing__banner">
    <img v-if="icon" :src="icon" />
    <p v-if="title" class="marketing__banner__title">{{ title }}</p>
    <p class="marketing__banner__description">{{ description }}</p>
    <button
      v-if="understoodButton"
      class="marketing__banner__understood"
       @click="onClick">Entendido</button>
    <a
      v-if="informationLink"
      class="marketing__banner__link"
      :href="informationLink"
      >Ver</a>
  </div>
</template>

<style lang="scss" src="./MarketingBanner.scss"></style>

<script>
import { reactive } from 'vue';

export default {
  name: 'marketing-banner',

  props: {
    description: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    icon: {
      type: String
    },
    understoodButton: {
      type: Boolean,
      default: false
    },
    informationLink: {
      type: String
    }
  },

  emits: ['click'],

  setup(props, { emit }) {
    props = reactive(props);

    return {
      icon: props.icon,
      description: props.description,
      title: props.title,
      understoodButton: props.understoodButton,
      informationLink: props.informationLink,
      onClick() {
        emit('click');
      }
    }
  },
};
</script>
