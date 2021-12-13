import { Menu } from './index';

export default {
  title: 'Menu',
  component: Menu,
  args: {
    children: 'Menu',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <Menu {...args} />
    </div>
  );
};
