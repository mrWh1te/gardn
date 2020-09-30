import Drawer from '@material-ui/core/Drawer';

import React from 'react';
import { Route } from 'react-router-dom';

import styled from '@emotion/styled';

import { PlantDrawer } from '@gardn/plant/view';

import ActionButton from '../action-button/action-button';

/* eslint-disable-next-line */
export interface ActionMenuProps {}

const StyledActionMenu = styled.section``;

// TODO add tests

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
        <Route path="/plant/:id" component={PlantDrawer} />
      </Drawer>
    </>
  );
};

export default ActionMenu;
