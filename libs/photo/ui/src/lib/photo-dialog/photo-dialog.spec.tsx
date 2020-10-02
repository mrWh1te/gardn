import React from 'react';
import { render } from '@testing-library/react';

import PhotoDialog from './photo-dialog';
import { Photo } from '@gardn/data';

describe('Photo Dialog', () => {
  it('should render successfully without photo', () => {
    const { baseElement } = render(<PhotoDialog dialogOpen={false} closeHandler={() => {}} />);
    expect(baseElement).toBeTruthy();
  });

  it('should render successfully with undefined photo', () => {
    let photo: Photo
    const { baseElement } = render(<PhotoDialog dialogOpen={false} closeHandler={() => {}} photo={photo} />);
    expect(baseElement).toBeTruthy();
  });

  it('should render successfully with photo', () => {
    const photo: Photo = {
      id: 5,
      url: 'https://picsum.photos/200'
    }
    const { baseElement } = render(<PhotoDialog dialogOpen={false} closeHandler={() => {}} photo={photo} />);
    expect(baseElement).toBeTruthy();
  });
});
