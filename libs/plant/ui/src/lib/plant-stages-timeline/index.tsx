import React from 'react';

import styled from '@emotion/styled';

import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';

import { GetPlantStageEventsQuery } from '@gardn/data';
import { FlexBox } from '@gardn/ui';
import { formatDate } from '@gardn/helpers';

const StyledPlantStagesTimeline = styled.div`
  .MuiTimelineItem-missingOppositeContent:before {
    flex: 0;
  }
  p {
    font-size: .75rem;
    padding-left: .25rem;
  }
`;

export const PlantStagesTimeline = ({ events }: GetPlantStageEventsQuery) => {
  if (!events) {
    return (
      <FlexBox>
        404 / Missing Plant
      </FlexBox>
    )
  }  

  return (
    <StyledPlantStagesTimeline>

      {/* todo Maybe add an Action here for a new Life Cycle change event? */}

      <Timeline>
        {
          events.map((event, index) => 
            <TimelineItem key={event.id}>
              <TimelineSeparator>
                <TimelineDot />
                { index < events.length - 1 ? <TimelineConnector /> : '' }
              </TimelineSeparator>
              <TimelineContent>
                <h6>
                  { event.data['nextPlantStage']?.name }
                </h6>
                { event.data?.eventTime ? <p>{ formatDate(event.data.eventTime) }</p> : '' }
              </TimelineContent>
            </TimelineItem>
          )
        }
      </Timeline>
    </StyledPlantStagesTimeline>
  );
};

export default PlantStagesTimeline;
