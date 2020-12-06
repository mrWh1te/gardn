import React from 'react';

import { text, boolean, radios } from '@storybook/addon-knobs';

import Alert from './';

export default {
  component: Alert,
  title: 'Alert'
}

export const noParams = () => (
  <Alert />
);

export const visibleParam = () => (
  <Alert visible={boolean('Visible', true)} />
);

export const allParams = () => (
  <Alert 
    visible={boolean('Visible', true)}
    title={text('Title', 'Example Title')} 
    severity={radios('Severity (theme)', {'Success': 'success', 'Warning': 'warning', 'Info': 'info', 'Error': 'error'}, 'success')}
    onClose={() => {}}>
    <div>
      <p>The "Close" icon displays (far-right) when the `onClose` prop is set (as done in this story w/o a knob)</p>
      <p>Children component is set in this story w/o knob</p>
    </div>
  </Alert>
);