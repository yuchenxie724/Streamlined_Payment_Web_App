// material-ui
import { Grid, Typography } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';

import EarningCard from '../../views/dashboard/Default/EarningCard';
import FilterDataGrid from './filter.js';

// ==============================|| SAMPLE PAGE ||============================== //

const SampleDashboard = () => (
    <MainCard title="Dashboard" sx={{ '& .MuiCardHeader-title': { fontSize: '2rem' } }}>
        <Grid container sx={{ justifyContent: 'center', alignItems: 'center' }}>
            <Grid item xs={12} sx={{ display: 'block', justifyContent: 'center' }}>
                <FilterDataGrid></FilterDataGrid>
            </Grid>
        </Grid>
    </MainCard>
);

export default SampleDashboard;
