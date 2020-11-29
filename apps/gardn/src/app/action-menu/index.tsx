import Drawer from '@material-ui/core/Drawer';

import React, { useEffect } from 'react';
import { Route, useLocation } from 'react-router-dom';

import styled from '@emotion/styled';

import { PlantDrawer } from '@gardn/plant/view';
import { white } from '@gardn/ui';

import ActionButton from './../action-button';
import { doesActionMenuHideForPage } from './does-action-menu-hide-for-page';

// TODO add tests

const StyledDynamicUI = styled.div`
  opacity: 1;
  transition-timing-function: ease-out;
  transition:opacity 600ms, visibility 600ms;

  position: relative;
  z-index: 10000;

  &.hide {
    opacity : 0;
    visibility: hidden;
  }
`;

interface ActionMenuState {
  menuOpenStatus: boolean,
  menuHidden: boolean,
}

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
  const [actionMenuState, setActionMenuState] = React.useState<ActionMenuState>({menuOpenStatus: false, menuHidden: true});

  let location = useLocation();
  useEffect(() => {
    const doesActionMenuHideForThisPage = doesActionMenuHideForPage(location.pathname);

    if (doesActionMenuHideForThisPage && !actionMenuState.menuHidden) {
      setActionMenuState({...actionMenuState, menuHidden: true})
    } else if (!doesActionMenuHideForThisPage && actionMenuState.menuHidden) {
      setActionMenuState({...actionMenuState, menuHidden: false})
    }
  }, [location]);

  const toggleDrawer = (menuOpenStatus: boolean) => () => {
    setActionMenuState({...actionMenuState, menuOpenStatus});
  };

  const style: React.CSSProperties = {
    backgroundColor: white,
    borderTopLeftRadius: '.5rem',
    borderTopRightRadius: '.5rem',
  }

  return (
    <>
      <StyledDynamicUI className={actionMenuState.menuHidden ? 'hide' : ''}>
        <ActionButton open={actionMenuState.menuOpenStatus} toggleMenu={toggleDrawer} />
        <Drawer anchor={'bottom'} open={actionMenuState.menuOpenStatus} onClose={toggleDrawer(false)} 
          PaperProps={{ elevation: 0, style, square: false }} style={{zIndex: 1000}}>
          <Route path="/plant/:id" component={PlantDrawer} />
        </Drawer>
      </StyledDynamicUI>
    </>
  );
};

export default ActionMenu;
