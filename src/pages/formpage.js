import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import FormOne from './normalForm'
import FormTwo from './formik'
import FormThree from './material-ui-form'
import FormFour from './errorValidation'
import FormFive from './dynamiField'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 250,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

export default function () {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <h1>React Forms</h1>
      <div className={classes.root}>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          className={classes.tabs}
        >
          <Tab label="Without formik" {...a11yProps(0)} />
          <Tab label="Using formik" {...a11yProps(1)} />
          <Tab label="Using material-ui" {...a11yProps(2)} />
          <Tab label="Error validation" {...a11yProps(3)} />
          <Tab label="Dynamik input field" {...a11yProps(4)} />
        </Tabs>
        <TabPanel value={value} index={0}>
          <FormOne />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <FormTwo />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <FormThree />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <FormFour />
        </TabPanel>
        <TabPanel value={value} index={4}>
          <FormFive />
        </TabPanel>
      </div>
    </>
  );
}