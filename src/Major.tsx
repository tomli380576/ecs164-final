import React from "react";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import { CompletionStatus } from './GenericRequirement';

export const Major: React.FC = () => {
  return (
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
            alignItems="center"
            spacing={5}
          >
            <Typography variant="h5" style={{ fontWeight: 600 }}>Major in Computer Science, BS</Typography>
            <CompletionStatus status="incomplete" />
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
          <Stack direction="row">
            <Stack
              direction="row"
              spacing={20}
            >
              <Typography style={{ fontWeight: 600 }}>
                Course
              </Typography>
              <Typography style={{ fontWeight: 600 }}>
                Title
              </Typography>
            </Stack>

            <Stack
              direction="row"
              spacing={10}
              ml={40}
            >
              <Typography style={{ fontWeight: 600 }}>
                Grade
              </Typography>
              <Typography style={{ fontWeight: 600 }}>
                Units
              </Typography>
              <Typography style={{ fontWeight: 600 }}>
                Terms
              </Typography>
            </Stack>
          </Stack>

          <Stack
            direction="row"
            mt={3}
            spacing={2}
          >

            <CircleOutlinedIcon style={{ fill: "#D42827" }} fontSize="small" />
            <Typography>Computer Science Electives</Typography>
            <Stack
              direction="column"
              divider={<Divider orientation="horizontal" flexItem />}
              spacing={3}
              width={914}
              pl={28}
            >

              <Typography style={{ fontWeight: 600 }}>ECS XXX</Typography>
              <Typography style={{ fontWeight: 600 }}>ECS XXX</Typography>

              <Stack>
                <Typography style={{ fontWeight: 600 }}>Still Needed: 6 Units From Either</Typography>
                <Typography style={{ fontWeight: 600 }} sx={{ ml: 13 }}>- ECS 120 : 189, 193A, 193B, 192, or 199</Typography>
                <Typography style={{ fontWeight: 600 }} sx={{ ml: 13 }}>- ECN 122</Typography>
                <Typography style={{ fontWeight: 600 }} sx={{ ml: 13 }}>- EEC 100, 171, 172, 180A, or 180B</Typography>
                <Typography style={{ fontWeight: 600 }} sx={{ ml: 13 }}>- LIN 127 or 177</Typography>
                <Typography style={{ fontWeight: 600 }} sx={{ ml: 13 }}>- MAT 100 : 189, except MAT 111</Typography>
                <Typography style={{ fontWeight: 600 }} sx={{ ml: 13 }}>- STA 131A, 131B, 141B, or 141C</Typography>
              </Stack>
            </Stack>

          </Stack>
        </Stack>
      </AccordionDetails>
    </Accordion>
  );
}