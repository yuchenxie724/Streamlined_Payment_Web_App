// material-ui
import { Grid, Typography } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import BasicTabs from './BasicTabs.js';

// ==============================|| SAMPLE PAGE ||============================== //

const SamplePage = () => (
    <MainCard title="Make a Payment" sx={{ '& .MuiCardHeader-title': { fontSize: '2rem' } }}>
        <BasicTabs />
    </MainCard>
);

export default SamplePage;
