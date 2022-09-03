// InfoPanel.stories.ts

import InfoPanel from './InfoPanel.vue';

import { Meta, StoryFn } from '@storybook/vue3';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Panels/Info Panel',
  component: InfoPanel,
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['info', 'warning', 'error'],
    },
  }
} as Meta<typeof InfoPanel>;

//👇 We create a “template” of how args map to rendering
const Template: StoryFn<typeof InfoPanel> = (args) => ({
  components: { InfoPanel },
  setup() {
    return { args };
  },
  template: '<InfoPanel v-bind="args" />',
});

const description = `
  Para obtener una salud óptima, resuelve las siguientes acciones.
  Esto te ayudará a mejorar tu salud contable y que el dashboard
  del trust sea representativo.
`;

export const Info = Template.bind({});

Info.args = {
  description,
  title: 'Title',
  icon: true,
  type: 'info'
};

export const Warning = Template.bind({});

Warning.args = {
  description,
  title: 'Title',
  icon: true,
  type: 'warning'
};

export const Error = Template.bind({});

Error.args = {
  description,
  title: 'Title',
  icon: true,
  type: 'error'
};
