import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CardWithButton from './CardWithButton.js';
import TextField from './TextField.js';
import { Grid } from '@mui/material';
import AmountField from './AmountField';
import PaymentMethod from './PaymentMethod.js';
import BasicButton from './BasicButton.js';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
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
    value: PropTypes.number.isRequired
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`
    };
}

export default function BasicTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Add Payment Method" {...a11yProps(0)} />
                    <Tab label="Final a Payment" {...a11yProps(1)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <Typography variant="h3" mt={3} mb={1}>
                    Payment amount
                </Typography>
                <AmountField />
                <Typography variant="h3" mt={3} mb={1}>
                    Payment method
                </Typography>
                <PaymentMethod />
                <Grid container justifyContent="center">
                    <Grid item>
                        <BasicButton />
                    </Grid>
                </Grid>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Typography variant="h3" mt={3} mb={1}>
                    Choose your service
                </Typography>
                <Grid item xs={12} md={4} sx={{ mb: 2 }}>
                    <TextField />
                </Grid>
                <Typography variant="h3" mt={3} mb={1}>
                    Choose a plan
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={4}>
                        <CardWithButton title="Plan 1" info="$4/10K" />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <CardWithButton title="Plan 2" info="$32/100K" />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <CardWithButton title="Plan 3" info="$0.5/1K" />
                    </Grid>
                </Grid>
                <Typography variant="h3" mt={3} mb={1}>
                    Payment method
                </Typography>
                <PaymentMethod />
                <Grid container justifyContent="center">
                    <Grid item>
                        <BasicButton />
                    </Grid>
                </Grid>
            </TabPanel>
        </Box>
    );
}
