import React, { useState } from 'react';

import SwipeableViews from 'react-swipeable-views';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import styled from '@emotion/styled';

import { Plant } from '@gardn/plant/smart';
import { white, DrawerView } from '@gardn/ui';

export const a11yProps = (index) => {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

/* eslint-disable-next-line */
export interface TabPanelProps {
  children: any,
  index: any,
  value: any
}
export const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <>{children}</>
      )}
    </div>
  );
}

const StyledPlantDrawer = styled.div`
  background-color: ${white};
`;

/**
 * Component shown in Drawer on Plant page
 */
export const PlantDrawer = () => {
  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <StyledPlantDrawer>
      <SwipeableViews
        axis={'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0}>
          <DrawerView>
            Photos
          </DrawerView>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <DrawerView>
            Info
          </DrawerView>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <DrawerView>
            Feed
          </DrawerView>
        </TabPanel>
      </SwipeableViews>
      <AppBar position="static" color="default" style={{
        boxShadow: 'rgba(0, 0, 0, 0.75) 0px 1px 3px 2px',
        position: 'relative'
      }}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="plant tabs"
        >
          <Tab label="Photos" {...a11yProps(0)} />
          <Tab label="Info" {...a11yProps(1)} />
          <Tab label="Feed" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      
    </StyledPlantDrawer>
  );
};

export default PlantDrawer;
