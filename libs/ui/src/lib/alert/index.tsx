import React, { Fragment } from 'react';
import styled from '@emotion/styled';

import { Alert as MaterialAlert, AlertTitle as MaterialAlertTitle } from '@material-ui/lab';
import Collapse from '@material-ui/core/Collapse';

/* eslint-disable-next-line */
interface AlertProps {
  visible?: boolean
  severity?: Parameters<typeof MaterialAlert>[0]['severity']
  title?: string
  onClose?: () => void
}

const StyledAlert = styled.div`
  ul, ol {
    margin-left: 1.75rem;
  }

  .MuiAlert-action {
    align-items: flex-start;
  }
`;

export const Alert: React.FC<AlertProps> = ({ severity, visible, title, children, onClose }) => {  
  const styledAlertComponent = (
    <StyledAlert>
      <MaterialAlert 
        severity={severity ?? 'warning'} 
        onClose={onClose}>
        <MaterialAlertTitle>
          { title ?? 'Attention' }
        </MaterialAlertTitle>
        { children }
      </MaterialAlert>
    </StyledAlert>
  )

  if (typeof visible === 'boolean') {
    return (
      <Collapse in={ visible }>
        { styledAlertComponent }
      </Collapse>
    )
  }

  return (
    <Fragment>
      { styledAlertComponent }
    </Fragment>
  )
}

export default Alert