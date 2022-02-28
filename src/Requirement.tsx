import React from "react";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';

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
            spacing={2}
          >
            <Typography variant="h5" style={{ fontWeight: 600}}>University Requirements for Bachelor of Science</Typography>
            <Stack 
              ml={3}
              alignItems="flex-start"
              direction="column"
              justifyContent="center"
              spacing={1}
            >
              <Typography variant="subtitle1">Units Required:</Typography>
              <Typography variant="subtitle1">Units Applied:</Typography>
              <Typography variant="subtitle1">Catalog Year:</Typography>
            </Stack>
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