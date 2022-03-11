import React from "react";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

export interface RequirementProps {
  title: string;
  unitsApplied: number;
  unitsRequired: number;
  catalogYear: string;
  completionStatus: CompletionStatus;
  additionalNotes: string;
}

export type CompletionStatus = 'complete' | 'incomplete' | 'inProgress' | 'planned';

export const CompletionStatus: React.FC<{ status: CompletionStatus }> = props => {
  const colorScheme: any = {
    complete: {
      foreground: 'rgba(55, 126, 81, 1)',
      background: 'rgba(236, 247, 242, 1)'
    },
    incomplete: {
      foreground: 'rgba(195, 58, 50, 1)',
      background: 'rgba(246, 199, 197, 0.3)'
    },
    inProgress: {
      foreground: '#2874BB',
      background: '#EEF7FF',
    },
    planned: {
      foreground: '#8A6900',
      background: 'rgba(191, 164, 136, 1)',
    }
  }

  const foregroundColor: string = colorScheme[props.status as string].foreground;
  const backgroundColor: string = colorScheme[props.status as string].background;

  const StatusComponent = styled('div')({
    background: backgroundColor,
    border: 0,
    borderRadius: 4,
    color: foregroundColor,
    padding: '10px',

    textAlign: 'center',
    fontWeight: 500
  });

  // handles the special case of inProgress 
  const statusText: string = ((props.status as string) === 'inProgress' ? 'In-Progress' : props.status as string).toUpperCase();

  return <StatusComponent> {statusText} </StatusComponent>
}

export const Requirement: React.FC<RequirementProps> = props => {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="flex-start"
          spacing={1}
        >
          <Stack
            direction="row"
            justifyContent="space-between"
            spacing={5}
          >
            <Typography variant="h5" style={{ fontWeight: 600 }}>{props.title}</Typography>
            <CompletionStatus status={props.completionStatus} />
          </Stack>

          <div>
            <Typography variant="subtitle1" ml={2}>Units Required: {props.unitsRequired}</Typography>
            <Typography variant="subtitle1" ml={2}>Units Applied: {props.unitsApplied}</Typography>
            <Typography variant="subtitle1" ml={2}>Catalog Year: {props.catalogYear}</Typography>
            <Typography>
              {props.additionalNotes}
            </Typography>
          </div>

        </Stack>
      </AccordionSummary>
      <AccordionDetails>
        {props.children}
      </AccordionDetails>
    </Accordion>
  );
}