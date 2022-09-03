import { mount } from '@vue/test-utils';
import InfoPanel from './InfoPanel.vue';
import { Info } from './InfoPanel.stories';

it('Renders expected type classname', () => {
  const wrapper = mount(InfoPanel, {
    propsData: Info.args,
  });

  expect(wrapper.find('.info__panel').classes()).toContain(`info__panel--${(Info.args as any).type}`);
});

it('renders snapshot', () => {
  const wrapper = mount(InfoPanel, {
    propsData: Info.args,
  });

  expect(wrapper.element).toMatchSnapshot();
});
