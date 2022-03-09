import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { PNP } from './PNP';
import { Nonstandard } from './Nonstandard';
import { Major } from './Major';
import { Requirement } from './Requirement';
import Stack from '@mui/material/Stack';


export const QuickLinks = () => {
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Dashboard" value="1" />
            <Tab label="What if" value="2" />
            <Tab label="Complete" value="3" />
            <Tab label="In Progress" value="4" />
            <Tab label="Planned" value="5" />
            <Tab label="Incomplete" value="6" />
          </TabList>
        </Box>
        <TabPanel value="1">TODO</TabPanel>
        <TabPanel value="2">TODO</TabPanel>
        <TabPanel value="3"><Stack direction="column" spacing={2}><PNP/><Nonstandard/></Stack></TabPanel>
        <TabPanel value="4"></TabPanel>
        <TabPanel value="5">Item Two</TabPanel>
        <TabPanel value="6"><Stack direction="column" spacing={2}><Major/><Requirement/></Stack></TabPanel>
      </TabContext>
    </Box>
  );
}