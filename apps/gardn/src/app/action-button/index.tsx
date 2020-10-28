import React from 'react';

import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
// import SpeedDialAction from '@material-ui/lab/SpeedDialAction';

/* eslint-disable-next-line */
export interface ActionButtonProps {
  open: boolean,
  toggleMenu: (openStatus: boolean) => (event: any) => void
}

export const ActionButton = (props: ActionButtonProps) => {
  return (
    <SpeedDial
      ariaLabel="SpeedDial example"
      icon={<SpeedDialIcon />}
      direction={'up'}
      open={props.open}
      onClick={props.toggleMenu(!props.open)}
      style={{position: 'fixed', right: '1rem', bottom: '2.5rem'}}
    >
      {/* {actions.map((action) => (
        <SpeedDialAction
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
          onClick={handleClose}
        />
      ))} */}
    </SpeedDial>
  );
};

export default ActionButton;
