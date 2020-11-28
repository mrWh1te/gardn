import Drawer from '@material-ui/core/Drawer';

import React from 'react';
import { Route } from 'react-router-dom';

import styled from '@emotion/styled';

import { PlantDrawer } from '@gardn/plant/view';
import { white } from '@gardn/ui';

import ActionButton from './../action-button';

// TODO add tests

const StyledDynamicUI = styled.div`
  opacity: 1;
  &.off {
    opacity: 0;
  }
`;

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
export const ActionMenu = () => {
  const [menuOpenStatus, setMenuOpenStatus] = React.useState(false);

  const toggleDrawer = (newOpenStatus: boolean) => (event) => {
    setMenuOpenStatus(newOpenStatus);
  };

  const style: React.CSSProperties = {
    backgroundColor: white,
    borderTopLeftRadius: '.5rem',
    borderTopRightRadius: '.5rem',
  }

  return (
    <>
      {/* todo ActionButton disabled when a particular page route of routes is active */}
      <StyledDynamicUI className={'off'}>
        <ActionButton open={menuOpenStatus} toggleMenu={toggleDrawer} />
        <Drawer anchor={'bottom'} open={menuOpenStatus} onClose={toggleDrawer(false)} 
          PaperProps={{ elevation: 0, style, square: false }} style={{zIndex: 1000}}>
          <Route path="/plant/:id" component={PlantDrawer} />
        </Drawer>
      </StyledDynamicUI>
    </>
  );
};

export default ActionMenu;
