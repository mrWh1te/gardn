import Drawer from '@material-ui/core/Drawer';

import React from 'react';

import styled from '@emotion/styled';

import ActionButton from '../action-button/action-button';

/* eslint-disable-next-line */
export interface ActionMenuProps {}

const StyledActionMenu = styled.section``;

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
