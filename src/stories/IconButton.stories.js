import React from 'react';

import IconButton from '../components/IconButton';

export default {
  title: 'Components/IconButton',
  component: IconButton,
};

const Template = (args) => <IconButton {...args} />;

export const Large = Template.bind({});
Large.args = {
  iconColor: 'black',
  iconName: 'faAtom',
  iconSize: 'large',
};

export const Medium = Template.bind({});
Medium.args = {
  iconColor: 'black',
  iconName: 'faAtom',
  iconSize: 'medium',
};

export const Small = Template.bind({});
Small.args = {
  iconColor: 'black',
  iconName: 'faAtom',
  iconSize: 'small',
};
