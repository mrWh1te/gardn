import React, { useState } from 'react';

import SwipeableViews from 'react-swipeable-views';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import { DrawerView, TabPanel, a11yProps } from '@gardn/ui';
import { PlantPhotos } from '@gardn/plant/smart';

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
    <>
      <SwipeableViews
        axis={'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0}>
          <DrawerView>
            <PlantPhotos />
          </DrawerView>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <DrawerView>
            PlantInfo -> UI:PlantInfo (vertical scrolling optional, not swiping slides)
          </DrawerView>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <DrawerView>
            Feed
            <br />
            <br />
            Scroll down....
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <p>You made it!</p>
            <br />
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
    </>
  );
};

export default PlantDrawer;
