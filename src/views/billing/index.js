// material-ui
import { Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
// project imports
import MainCard from 'ui-component/cards/MainCard';
import BalanceCard from './BalanceCard.js';
import CollapsibleTable from './CollapsibleTable.js';
import BasicTable from './BasicTable.js';

import OutlinedButtons from './OutlineButton.js';

// ==============================|| SAMPLE PAGE ||============================== //

const BillingPage = () => (
    <MainCard
        title={
            <Grid container alignItems="center">
                <Grid item sx={{ flexGrow: 1 }}>
                    <Typography variant="h3" sx={{ '& .MuiCardHeader-title': { fontSize: '2rem' } }}>
                        Billing
                    </Typography>
                </Grid>
                <Grid item sx={{ justifyContent: 'flex-end' }}>
                    <OutlinedButtons />
                </Grid>
            </Grid>
        }
    >
        <Grid container spacing={2} sx={{ justifyContent: 'center', alignItems: 'center' }}>
            <Grid item xs={12} sx={{ display: 'block', justifyContent: 'center' }}>
                <BalanceCard />
            </Grid>
            <Grid item xs={12} sx={{ display: 'block', justifyContent: 'center', marginTop: 4 }}>
                <CollapsibleTable />
            </Grid>
            <Grid item xs={12} sx={{ display: 'block', justifyContent: 'center', marginTop: 6 }}>
                <BasicTable />
            </Grid>
        </Grid>
    </MainCard>
);

export default BillingPage;
