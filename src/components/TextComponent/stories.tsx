import { Meta, Story } from '@storybook/react/types-6-0';
import { TextComponent, TextComponentProps } from '.';
export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi quidem fuga, corrupti quos in atque beatae ea dolor iusto itaque nam ratione incidunt iure minus. Placeat possimus perferendis error aut.`,
  },
  argTypes: {
    children: { type: 'string' },
  },
} as Meta;

export const Template: Story<TextComponentProps> = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};
