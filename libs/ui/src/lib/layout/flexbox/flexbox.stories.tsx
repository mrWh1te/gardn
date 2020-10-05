import React from 'react';

import { text } from '@storybook/addon-knobs';

import FlexBox from './flexbox';

export default { 
  title: 'Layout/Flexbox',
  component: FlexBox
};

export const exampleNoParams = () => (
  <FlexBox>
    <div>default = center/center</div>
  </FlexBox>
);

export const exampleWithParams = () => (
  <FlexBox 
    flexDirection={text('flex-direction', 'row')}
    justifyContent={text('justify-content', 'stretch')} 
    alignItems={text('align-items', 'left')}
    width={text('width', '100%')}
    height={text('height', '100%')}
  >
    <div style={{border: '1px solid black'}}>1</div>
    <div style={{border: '1px solid black'}}>3</div>
    <div style={{border: '1px solid black'}}>4</div>
    <div style={{border: '1px solid black'}}>5</div>
    <div style={{border: '1px solid black'}}>6</div>
  </FlexBox>
);
