import React from 'react';

import styled from '@emotion/styled';
import Dialog from '@material-ui/core/Dialog';

import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';

import { Photo } from '@gardn/data';
import { gray } from '@gardn/ui';

import PhotoViewer from '../photo-viewer/photo-viewer';
import PhotoTitle from '../photo-title/photo-title';

/* eslint-disable-next-line */
export interface PhotoDialogProps {
  dialogOpen: boolean,
  closeHandler: () => void,
  photo?: Photo
}

const CloseButton = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  transform: rotate(45deg);

  &:hover {
    cursor: pointer;
  }
`;

export const PhotoDialog = ({dialogOpen, closeHandler, photo}: PhotoDialogProps) => (
  <Dialog fullScreen open={dialogOpen} onClose={closeHandler}>
    <section onClick={closeHandler} style={{height: '100%'}}>
      <CloseButton>
        <SpeedDialIcon style={{color: gray}} />
      </CloseButton>
      <PhotoViewer>
        <img src={ photo?.url } alt={photo?.title ? photo.title : photo?.id+''} />
        {
          photo?.title ? <PhotoTitle>{ photo.title }</PhotoTitle> : ''
        }
      </PhotoViewer>
    </section>
  </Dialog>
);

export default PhotoDialog;
