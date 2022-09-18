import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Fashion from './Fashion';
import Products from './Products';
import Laptops from './Laptops'
import Id from './Id';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%'}}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider'}}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Home" {...a11yProps(0)} />
          <Tab label="Products" {...a11yProps(1)} />
          <Tab label="Fashion" {...a11yProps(2)} />
          <Tab label="Laptop" {...a11yProps(3)} />
          <Tab label="Id Card"{...a11yProps(4)}/>
          <Tab label="Register" {...a11yProps(5)} />
          <Tab label="Login" {...a11yProps(6)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
       <h1>Welcome to website</h1>
      </TabPanel>
      <TabPanel value={value} index={1}>
     <Products></Products>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Fashion></Fashion>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Laptops></Laptops>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Id></Id>
      </TabPanel>
    </Box>
  );
}