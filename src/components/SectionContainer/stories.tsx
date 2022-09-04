import { Meta, Story } from '@storybook/react/types-6-0';
import { SectionContainer, SectionContainerProps } from '.';

export default {
  title: 'SectionContainer',
  component: SectionContainer,
  args: {
    children: (
      <div>
        <h1>Section Container</h1>
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

export const Template: Story<SectionContainerProps> = (args) => {
  return (
    <div>
      <SectionContainer {...args} />
    </div>
  );
};
