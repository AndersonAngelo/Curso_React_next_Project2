import { TextComponent } from '.';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
     Exercitationem amet impedit repellat quam praesentium inventore odit,
     modi laborum incidunt nesciunt iusto natus vel quod, quasi facere repudiandae possimus a provident.`,
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};
