import React from 'react';
import { Tab, Tabs, Stack, Box } from '@mui/material';
import { PNP } from './PNP';
import { NonStandardCourses } from './Nonstandard';
import { Major } from './Major';
import { UniversityRequirement } from './UniversityRequirement';
import { GeneralEducation } from './GE_Accordion';
import { Dashboard } from './Dashboard';
import { Requirement } from './GenericRequirement';
import { EnglishCompReq, ScienceAndMathReq, MajorReq, MajorReqDesign } from './hardcodedData';
import { Typography } from '@mui/material';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

export const QuickLinks = () => {
  const [currTab, setCurrTab] = React.useState<number>(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setCurrTab(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={currTab} onChange={handleChange} variant="fullWidth">
          <Tab label="Dashboard" value={0} />
          <Tab label="What if" value={1} />
          <Tab label="Complete" value={2} />
          <Tab label="In Progress" value={3} />
          <Tab label="Planned" value={4} />
          <Tab label="Incomplete" value={5} />
        </Tabs>
      </Box>

      <TabPanel value={currTab} index={0}>
        <Dashboard />

      </TabPanel>

      <TabPanel value={currTab} index={1}>
      </TabPanel>

      <TabPanel value={currTab} index={2}>
        <Stack direction="column" spacing={2}>
          <PNP />
          <NonStandardCourses />
        </Stack>
      </TabPanel>

      <TabPanel value={currTab} index={3}>
        <Stack direction="column" spacing={2}>
          <Requirement {...EnglishCompReq}>
            <Typography variant="body2">
              English Requirement Description
            </Typography>
          </Requirement>
          <Requirement {...ScienceAndMathReq} />
        </Stack>
      </TabPanel>

      <TabPanel value={currTab} index={4}>
        <Requirement {...MajorReqDesign}>
          Placeholder Text
        </Requirement>
      </TabPanel>

      <TabPanel value={currTab} index={5}>
        <Stack direction="column" spacing={2}>
          <Major />
          <UniversityRequirement />
          <GeneralEducation />
        </Stack>
      </TabPanel>
    </Box>
  );
}