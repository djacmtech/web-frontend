import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import {BsFillDiamondFill} from "react-icons/bs";

export default function TimelineInternship() {
  return (
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineSeparator>
          <BsFillDiamondFill style={{color:'#2D3748', fontSize:'40px'}} />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent className='timelineEntry'>
            <span className='date'> 9th May </span>
            <span className='timelineHeading'> ACM 101 </span>
            <span className='timelineContent'> Lorem ipsum dolor sit amet, consectetur  ea commodo consequat.
                Lorem ipsum dolor sit amet, consectetur  ea commodo consequat. 
            </span>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <BsFillDiamondFill style={{color:'#2D3748', fontSize:'40px'}} />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent className='timelineEntry'>
            <span className='date'> 9th May </span>
            <span className='timelineHeading'> ACM 101 </span>
            <p className='timelineContent'> Lorem ipsum dolor sit amet, consectetur  ea commodo consequat.
                Lorem ipsum dolor sit amet, consectetur  ea commodo consequat. 
            </p>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <BsFillDiamondFill style={{color:'#2D3748', fontSize:'40px'}} />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent className='timelineEntry'>
            <span className='date'> 9th May </span>
            <span className='timelineHeading'> ACM 101 </span>
            <p className='timelineContent'> Lorem ipsum dolor sit amet, consectetur  ea commodo consequat.
                Lorem ipsum dolor sit amet, consectetur  ea commodo consequat. 
            </p>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <BsFillDiamondFill style={{color:'#2D3748', fontSize:'40px'}} />
        </TimelineSeparator>
        <TimelineContent className='timelineEntry'>
            <span className='date'> 9th May </span>
            <span className='timelineHeading'> ACM 101 </span>
            <span className='timelineContent'> Lorem ipsum dolor sit amet, consectetur  ea commodo consequat.
                Lorem ipsum dolor sit amet, consectetur  ea commodo consequat. 
            </span>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
