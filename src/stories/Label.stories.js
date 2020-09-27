import React from 'react';

import Label from '../components/Label';

export default {
  title: 'Components/Label',
  component: Label,
};

const Template = (args) => <Label {...args} />;

export const Regular = Template.bind({});
Regular.args = {
  text: 'Regular Text',
  type: 'regular',
};

export const Bold = Template.bind({});
Bold.args = {
  text: 'Bold Text',
  type: 'bold',
};
