// MarketingBanner.stories.ts

import MarketingBanner from './MarketingBanner.vue';

import { Meta, StoryFn } from '@storybook/vue3';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Banners/Marketing Banner',
  component: MarketingBanner,
  argTypes: {
    onClick: {}
  },
  parameters: {
    backgrounds: { default: 'dark' },
  }
} as Meta<typeof MarketingBanner>;

//👇 We create a “template” of how args map to rendering
const Template: StoryFn<typeof MarketingBanner> = (args) => ({
  components: { MarketingBanner },
  setup() {
    return { args };
  },
  template: '<MarketingBanner v-bind="args" />'
});

export const Error = Template.bind({});

Error.args = {
  description: 'Es posible que estés teniendo problemas con el producto X. Estamos intentando solucionar el problema lo antes posible.',
  title: 'Error en el sistema',
  icon: require('@/assets/images/warning.svg'),
  understoodButton: true,
  informationLink: 'https://www.as.com'
};

export const News = Template.bind({});

News.args = {
  description: 'Hemos rediseñado el listado de reservas para que puedas trabajar de manera más cómoda y rápida.',
  title: 'Novedades del sistema',
  icon: require('@/assets/images/alarm-alert.svg')
};

export const Maintenance = Template.bind({});

Maintenance.args = {
  description: 'Es posible que percibas lentitud en el sistema durante algunas horas. Sentimos las molestias.',
  title: 'Estamos realizando mantenimientos',
  icon: require('@/assets/images/crane-construction.svg')
};
