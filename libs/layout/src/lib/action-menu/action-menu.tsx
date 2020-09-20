import Drawer from '@material-ui/core/Drawer';

import React from 'react';

import styled from '@emotion/styled';

import ActionButton from '../action-button/action-button';

/* eslint-disable-next-line */
export interface ActionMenuProps {}

const StyledActionMenu = styled.section``;

/**
 * This component extends upon a page with page dependent Actions
 *  Could be just icons/links ie Watering Plant(s) or full-drawer with information, etc. 
 *    If plant page just a photo at first, with maybe a name, then the drawer can have the actual information with actions
 * 
 * Current Plan:
 *  SpeedDialActions on Plant page always appear, therefore SpeedDial opens/closes Drawer for details/info
 * 
 * @param props 
 */
export const ActionMenu = (props: ActionMenuProps) => {
  const [menuOpenStatus, setMenuOpenStatus] = React.useState(false);

  const toggleDrawer = (newOpenStatus: boolean) => (event) => {
    setMenuOpenStatus(newOpenStatus);
  };

  return (
    <>
      <ActionButton open={menuOpenStatus} toggleMenu={toggleDrawer} />
      <Drawer anchor={'bottom'} open={menuOpenStatus} onClose={toggleDrawer(false)}>
        Page dependent actions, ie if on a Plant page: water, temperature reading, re-pot, etc
      </Drawer>
    </>
  );
};

export default ActionMenu;
