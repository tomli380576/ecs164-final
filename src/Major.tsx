import React from "react";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import { Icon } from '@mui/material';

const Div = styled('div')({
  background: 'rgba(246, 199, 197, 0.14);',
  border: 0,
  borderRadius: 4,
  color: '#D42827',
  padding: '6px 6px 6px 20px',
  width: '110px',
  height: '24px',
  fontWeight: 500
  // left: '671px',
  // top: '538px',
  // position: "absolute"
});

const Whole = styled('div')({
  border: 0,
  borderRadius: 5,
  width: '1424px',
})

export const Major = () => {
  return (
    <Whole>
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
              spacing={5}  
            >
              <Typography variant="h5" style={{ fontWeight: 600}}>Major in Computer Science, BS</Typography>
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
          divider={<Divider orientation="horizontal" flexItem />}
        >
          <Stack
            direction="row"
          >
            <Stack
                direction="row"
                // divider={<Divider orientation="horizontal" flexItem />}
                ml={60}
                spacing={20}
            >
              <Typography>
                Course
              </Typography>
              <Typography>
                Title
              </Typography>
            </Stack>

            <Stack
              direction="row"
              spacing={10}
              ml={40}
            >
              <Typography>
                Grade
              </Typography>
              <Typography>
                Units
              </Typography>
              <Typography>
                Terms
              </Typography>
            </Stack>
          </Stack>
          <Stack
            direction="row"
            mt={3}
            spacing={2}
          >
            <CircleOutlinedIcon style={{ fill: "#D42827"}} fontSize="small"/>
            <Typography>Computer Science Electives</Typography>
            <Stack
              direction="column"
              divider={<Divider orientation="horizontal" flexItem />}
              spacing={3}
            >
              <Typography>ECS XXX</Typography>
              <Typography>ECS XXX</Typography>
              <Typography>Still Needed: 6 Units From Either</Typography>
            </Stack>
          </Stack>
        </Stack>

        </AccordionDetails>
      </Accordion>
    </div>
    </Whole>
  );
}