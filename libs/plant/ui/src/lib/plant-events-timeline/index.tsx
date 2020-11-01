import React from 'react';

import styled from '@emotion/styled';

import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';

import { GetPlantEventsQuery } from '@gardn/data';
import { FlexBox } from '@gardn/ui';
import { EventData, EventIcon } from '@gardn/events/ui';

const StyledPlantEventsTimeline = styled.div`
  .MuiTimelineItem-missingOppositeContent:before {
    flex: 0;
  }
  p {
    font-size: .75rem;
    padding-left: .25rem;
  }
`;

export const PlantEventsTimeline = ({ events }: Pick<GetPlantEventsQuery['plant'], 'events'>) => {
  if (!events) {
    return (
      <FlexBox>
        404 / Missing
      </FlexBox>
    )
  }  

  return (
    <StyledPlantEventsTimeline>
      <Timeline>
        {
          events.map((event, index) => 
            <TimelineItem key={index}>
              <TimelineSeparator>
                <TimelineDot>
                  <EventIcon eventType={event.type} />
                </TimelineDot>
                { index + 1 < events.length ? <TimelineConnector /> : '' }
              </TimelineSeparator>
              <TimelineContent>
                <EventData event={event} />
              </TimelineContent>
            </TimelineItem>
          )
        }
      </Timeline>
    </StyledPlantEventsTimeline>
  );
};

export default PlantEventsTimeline;
