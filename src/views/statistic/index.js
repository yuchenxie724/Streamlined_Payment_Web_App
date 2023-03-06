// material-ui
import { Grid, Typography, Box } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
// import EarningCard from './EarningCard';
import EarningCard from '../../views/dashboard/Default/EarningCard';
import TotalGrowthBarChart from '../../views/dashboard/Default/TotalGrowthBarChart';
import PopularCard from '../../views/dashboard/Default/PopularCard';
import BasicTable from './table.js';
import PieChart from './piechart.js';

// ==============================|| SAMPLE PAGE ||============================== //

const Statistic = () => (
    <MainCard title="Statistic" sx={{ '& .MuiCardHeader-title': { fontSize: '2rem' } }}>
        <Grid container spacing={2} sx={{ justifyContent: 'center', alignItems: 'center' }}>
            <Grid item xs={6} sx={{ display: 'block', justifyContent: 'center' }}>
                <TotalGrowthBarChart />
            </Grid>
            <Grid item xs={6} sx={{ display: 'block', justifyContent: 'center' }}>
                <PieChart />
            </Grid>
            <Grid item xs={6} sx={{ display: 'block', justifyContent: 'center' }}>
                <BasicTable />
            </Grid>
            <Grid item xs={6} sx={{ display: 'block', justifyContent: 'center' }}>
                <PopularCard />
            </Grid>
        </Grid>
    </MainCard>
);

export default Statistic;
