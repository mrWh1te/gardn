import React from 'react';

import { Alert as MaterialAlert, AlertTitle } from '@material-ui/lab';
import Collapse from '@material-ui/core/Collapse';

interface AlertProps {
  visible: boolean
  severity?: Parameters<typeof MaterialAlert>[0]['severity']
  title?: string
  onClose?: () => void
}

export const Alert: React.FC<AlertProps> = ({ severity, visible, title, children, onClose }) => {  
  return (
    <Collapse in={visible}>
      <MaterialAlert 
        severity={severity ? severity : 'warning'} 
        onClose={onClose}>
      <AlertTitle>{ title ? title : 'Attention' }</AlertTitle>
        { children }
      </MaterialAlert>
    </Collapse>
  )
}

export default Alert