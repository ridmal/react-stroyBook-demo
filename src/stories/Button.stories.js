import React from 'react';

import  Button  from '../components/Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    title: 'Example Title'
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'Button primary',
  type: 'primary'
};

export const Secondary = Template.bind({});
Secondary.args = {
  title: 'Button secondary',
  type: 'secondary'
}

