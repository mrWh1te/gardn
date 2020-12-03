import React, { useState } from 'react';

import SwipeableViews from 'react-swipeable-views';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import { 
  PlantPhotos,
  PlantCurrentIdealEnvironment,
  PlantStagesTimeline,
  PlantHeader,
  PlantEventsTimeline
} from '@gardn/plant/smart';
import { DrawerView, Grid, TabPanel, a11yProps } from '@gardn/ui';

/**
 * Component shown in Drawer on Plant page
 */
export const PlantDrawer = () => {
  const [activeTabIndex, setValue] = useState(1)

  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <>
      <SwipeableViews
        axis={'x'}
        index={activeTabIndex}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={activeTabIndex} index={0}>
          <DrawerView>
            <PlantPhotos />
          </DrawerView>
        </TabPanel>
        <TabPanel value={activeTabIndex} index={1}>
          <DrawerView>
            <Grid gridTemplateRows={'auto'}>
              <PlantHeader />
              <Grid columns={2}>
                <PlantStagesTimeline />
                <PlantCurrentIdealEnvironment />
              </Grid>
            </Grid>
          </DrawerView>
        </TabPanel>
        <TabPanel value={activeTabIndex} index={2}>
          <DrawerView>
            <PlantEventsTimeline />
          </DrawerView>
        </TabPanel>
      </SwipeableViews>
      <AppBar position="static" color="default" style={{
        boxShadow: 'rgba(0, 0, 0, 0.75) 0px 1px 3px 2px',
        position: 'relative'
      }}>
        <Tabs
          value={activeTabIndex}
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
