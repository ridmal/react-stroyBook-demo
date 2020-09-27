import React from 'react';

import Modal from '../components/Modal';
import Label from '../components/Label';
import TextInput from '../components/TextInput';

export default {
  title: 'Components/Modal',
  component: Modal,
};

const Template = (args) => <Modal {...args} />;

export const BasicModal = Template.bind({});
BasicModal.args = {
  headerTitle: "Basic modal",
  children: <Label text={'This is basic modal'}/>,
  onHeaderClose: ()=>alert('Basic Modal close action'),
  onActionClick: ()=> alert('Basic Modal action button click'),
  onCancelClick: ()=> alert('Basic Modal cancel button click')
};


export const FormModal = Template.bind({});
FormModal.args = {
  headerTitle: 'Form modal',
  children: <div>
     <Label text={'First Label'}/>
    <TextInput type={'text'} placeholderText={'Enter here'}/>
    <Label text={'Second Label'}/>
    <TextInput type={'text'} placeholderText={'Enter here'}/>
  </div>,
  onHeaderClose: ()=>alert('Form Modal close action'),
  onActionClick: ()=> alert('Form Modal action button click'),
  onCancelClick: ()=> alert('Form Modal cancel button click')
};