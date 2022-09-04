import { Meta, Story } from '@storybook/react/types-6-0';
import { SectionBackground, SectionBackgroundProps } from '.';

export default {
  title: 'SectionBackground',
  component: SectionBackground,
  args: {
    children: (
      <div>
        <h1>Section Background</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum dolor
          est animi earum molestias excepturi, modi, at deleniti iure eaque
          possimus eos sed aliquam libero accusantium placeat. Culpa, fugit
          aperiam.
        </p>
      </div>
    ),
  },
  argTypes: {
    children: { type: '' },
  },
} as Meta;

export const Template: Story<SectionBackgroundProps> = (args) => {
  return (
    <div>
      <SectionBackground {...args} />
    </div>
  );
};
