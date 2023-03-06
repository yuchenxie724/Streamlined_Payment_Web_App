import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = <Box component="span" sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}></Box>;

export default function CardWithButton(props) {
    const [selected, setSelected] = React.useState(false);

    const handleCardClick = () => {
        setSelected(!selected);
    };

    return (
        <Button onClick={handleCardClick} sx={{ width: '100%', height: '100%' }}>
            <Card sx={{ bgcolor: selected ? '#b2dfdb' : '' }}>
                <CardContent>
                    <Typography sx={{ fontSize: 24 }} color="text.secondary" gutterBottom>
                        {props.title}
                    </Typography>
                    <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
                        {props.info}
                    </Typography>
                </CardContent>
            </Card>
        </Button>
    );
}
