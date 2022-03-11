import React from "react";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Stack from '@mui/material/Stack';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Alert from '@mui/material/Alert';
import { CompletionStatus } from './GenericRequirement';


export const NonStandardCourses = () => {
  return (
    <Accordion sx={{ mb: 2 }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="flex-start"
          spacing={1}
        >
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={5}
          >
            <Typography variant="h5" style={{ fontWeight: 600 }}>Nonstandard Courses</Typography>
            <CompletionStatus status='complete' />
          </Stack>
          <div>
            <Typography variant="subtitle1" ml={2}>Units Applied: 44</Typography>
            <Typography variant="subtitle1" ml={2}>Catalog Year: 2021-2022</Typography>
          </div>
        </Stack>
      </AccordionSummary>

      <AccordionDetails>
        <Stack
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          spacing={1}
        >
          <ListItem divider>
            <ListItemText primary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce convallis vestibulum justo non gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id consectetur ex." />
          </ListItem>
          <ListItem divider>
            <ListItemText primary="placeholder" />
          </ListItem>
        </Stack>
      </AccordionDetails>
    </Accordion>
  );
}