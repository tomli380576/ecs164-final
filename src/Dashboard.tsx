import React from "react";
import {
  Stack,
  Box,
  Grid,
  Paper,
  Card,
  CircularProgress,
  CardContent,
  CardHeader,
  Typography,
  CircularProgressProps
} from '@mui/material';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import { styled } from '@mui/material/styles';

import { PNP } from './PNP';
import { NonStandardCourses } from './Nonstandard';
import { Major } from './Major';
import { UniversityRequirement } from './UniversityRequirement';
import { GeneralEducation } from './GE_Accordion';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const IconItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'wrap',
}));

function CircularProgressWithLabel(
  props: CircularProgressProps & { value: number },
) {
  return (
    <Box sx={{
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <CircularProgress variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography
          variant="body2"
          component="div"
          color="text.secondary"
        >{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  );
}


export const Dashboard: React.FC = () => {

  return (
    <Stack direction='column' sx={{ height: 'inherit' }} spacing={2}>
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        alignItems="stretch"
        spacing={3}
      >
        <Grid item xs={6} sx={{ maxHeight: '100%' }}>
          <Card >
            <CardHeader title="Welcome!" sx={{ paddingBottom: '0' }} />
            <CardContent >
              <Typography variant="body1">
                This is a degree audit tool
              </Typography>
              <div style={{ height: '172px' }}>

              </div>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={6}>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="stretch"
            spacing={2}
          >
            <Grid item xs={4} style={{ width: '100%' }} >
              <Card>
                <CardHeader title="Legend" sx={{ paddingBottom: '0' }} />
                <CardContent>
                  <Stack direction="row" spacing={2}>

                    <IconItem>
                      <CircleOutlinedIcon style={{ fill: "#D42827" }} fontSize="small" />
                      <Typography variant="body2" ml={1}>
                        Incomplete
                      </Typography>
                    </IconItem>

                    <IconItem>
                      <ReportGmailerrorredIcon style={{ fill: "brown" }} fontSize="small" />
                      <Typography variant="body2" ml={1}>
                        Planned
                      </Typography>
                    </IconItem>

                    <IconItem>
                      <CheckCircleOutlineIcon style={{ fill: "green" }} fontSize="small" />
                      <Typography variant="body2" ml={1}>
                        Completed
                      </Typography>
                    </IconItem>

                    <IconItem>
                      <ChangeCircleIcon style={{ fill: "skyblue" }} fontSize="small" />
                      <Typography variant="body2" ml={1}>
                        In-Progress
                      </Typography>
                    </IconItem>

                  </Stack>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={6} style={{ width: '100%' }}>
              <Card>
                <CardHeader title="Degree Progress" sx={{ paddingBottom: '0' }} />
                <CardContent>
                  <Stack direction="row"
                    justifyContent="space-around"
                    alignItems="center">
                    <CircularProgressWithLabel value={78} />

                    <Stack direction="column" ml={5}>
                      <Typography variant="body1">Admit Term: </Typography>
                      <Typography variant="body1">Quarters in Residence: </Typography>
                      <Typography variant="body1">Graduation Status </Typography>
                    </Stack>

                  </Stack>


                </CardContent>

              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <PNP />
      <NonStandardCourses />
      <Major />
      <UniversityRequirement />
      <GeneralEducation />
    </Stack >
  );
}