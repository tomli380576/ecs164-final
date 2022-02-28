import React from "react";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';

const Div = styled('div')(({ theme }) => ({
  ...theme.typography.button,
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(1),
}));

export const Requirement = () => {
  return (
    <div>
      <Accordion>
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
            >
              <Typography variant="h5" style={{ fontWeight: 600}}>University Requirements for Bachelor of Science</Typography>
              <Div>{"INCOMPLETE"}</Div>
            </Stack>
            <div>
              <Typography variant="subtitle1" ml={2}>Units Required:</Typography>
              <Typography variant="subtitle1" ml={2}>Units Applied:</Typography>
              <Typography variant="subtitle1" ml={2}>Catalog Year:</Typography>
            </div>
            
          </Stack>
        </AccordionSummary>
        <AccordionDetails>
        <Stack
            direction="column"
            divider={<Divider orientation="horizontal" flexItem />}
            spacing={2}
        >
          <Typography>
            NOTE: the unit totals in the block headers may include excess transfer work. 
            Refer to the 180 unit check block to verify completion of 180 units.
          </Typography>
          <Typography>
            Your UC GPA is currently above the 2.0 minimum required at UC Davis. 
            This reflects current completed coursework is and is subject to change
          </Typography>
          <Typography>
            One academic year (three quarters) in residence at UC Davis
          </Typography>
        </Stack>
          
        </AccordionDetails>
      </Accordion>
    </div>
  );
}