// material-ui
import { Grid, Typography } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';

import CardWithButton from './CardWithButton.js';
import TextField from './TextField.js';
import BasicButton from './BasicButton.js';
// ==============================|| SAMPLE PAGE ||============================== //

const CreateService = () => (
    <MainCard title="Create Service" sx={{ '& .MuiCardHeader-title': { fontSize: '2rem' } }}>
        <Typography variant="h3" mt={3} mb={1}>
            Choose your service
        </Typography>
        <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
                <CardWithButton title="Service 1" info="dummy info" />
            </Grid>
            <Grid item xs={12} md={4}>
                <CardWithButton title="Service 2" info="dummy info" />
            </Grid>
            <Grid item xs={12} md={4}>
                <CardWithButton title="Service 3" info="dummy info" />
            </Grid>
        </Grid>
        <Typography variant="h3" mt={3} mb={1}>
            Choose your plan
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
            Name your service
        </Typography>
        <Grid item xs={12} md={4} sx={{ mb: 2 }}>
            <TextField />
        </Grid>
        <Grid container justifyContent="right" sx={{ mb: 2 }}>
            <Typography variant="h3" mt={3} mb={1}>
                Price: XXX
            </Typography>
        </Grid>
        <Grid container justifyContent="center">
            <BasicButton />
        </Grid>
    </MainCard>
);

export default CreateService;
