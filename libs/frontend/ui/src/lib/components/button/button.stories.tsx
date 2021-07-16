import { text } from '@storybook/addon-knobs';
import React from 'react';
import { CustomButton, ButtonType } from './button';

export default {
  component: CustomButton,
  title: 'UI/CustomButton',
  argTypes: {
    variant: {
      options: ['primary'],
      control: { type: 'radio' },
      defaultValue: 'primary',
    },
    type: {
      options: [ButtonType.button, ButtonType.submit],
      control: { type: 'select' },
      defaultValue: ButtonType.submit,
    },
    text: {
      control: { type: 'text' },
      defaultValue: 'Get Results',
    }
  },
  parameters: {
    docs: {
      inlineStories: false,
      description: {
        component: 'Custom **button** docs',
      },
    },
  },
  controls: { expanded: true },
};

export const primary = (controls: any) => {
  return (
    <CustomButton
      type={controls.type}
      text={controls.text}
      onClick={()=>console.log('Clicked')}
    />
  );
};
