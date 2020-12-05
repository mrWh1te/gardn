import React from 'react';
import styled from '@emotion/styled';

import { Alert as MaterialAlert, AlertTitle as MaterialAlertTitle } from '@material-ui/lab';
import Collapse from '@material-ui/core/Collapse';

/* eslint-disable-next-line */
interface AlertProps {
  visible: boolean
  severity?: Parameters<typeof MaterialAlert>[0]['severity']
  title?: string
  onClose?: () => void
}

const StyledAlert = styled.div`
  .MuiAlert-action {
    align-items: flex-start;
  }
`;

export const Alert: React.FC<AlertProps> = ({ severity, visible, title, children, onClose }) => {  
  return (
    <Collapse in={visible}>
      <StyledAlert>
        <MaterialAlert 
          severity={severity ? severity : 'warning'} 
          onClose={onClose}>
          <MaterialAlertTitle>
            { title ? title : 'Attention' }
          </MaterialAlertTitle>
          { children }
        </MaterialAlert>
      </StyledAlert>
    </Collapse>
  )
}

export default Alert