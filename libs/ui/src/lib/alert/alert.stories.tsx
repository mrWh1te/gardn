import React from 'react';

import { text, boolean, radios } from '@storybook/addon-knobs';

import Alert from './';

export default {
  component: Alert,
  title: 'Alert'
}

export const minimumParams = () => (
  <Alert visible={boolean('Visible', true)} />
);

export const allParams = () => (
  <Alert 
    visible={boolean('Visible', true)}
    title={text('Title', 'Example Title')} 
    severity={radios('Severity (theme)', {'Success': 'success', 'Warning': 'warning', 'Info': 'info', 'Error': 'error'}, 'success')}
    onClose={() => {}}>
    <div>
      The "Close" icon displays (far-right) because the `onClose` prop is set
    </div>
  </Alert>
);