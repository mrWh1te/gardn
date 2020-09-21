import React from 'react';

import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface PhotoHelpersProps {}

const StyledPhotoHelpers = styled.div`
  color: pink;
`;

export const PhotoHelpers = (props: PhotoHelpersProps) => {
  return (
    <StyledPhotoHelpers>
      <h1>Welcome to photo-helpers!</h1>
    </StyledPhotoHelpers>
  );
};

export default PhotoHelpers;
