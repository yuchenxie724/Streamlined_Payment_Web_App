import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch';

export default function PaymentMethod() {
    const [orientation, setOrientation] = React.useState('vertical');
    const [selectedPaymentMethod, setSelectedPaymentMethod] = React.useState('');

    const paymentMethods = [
        { id: 'credit-card', label: 'Credit Card' },
        { id: 'paypal', label: 'Paypal' },
        { id: 'qr-code', label: 'QR Code' }
    ];

    const handlePaymentMethodChange = (event) => {
        setSelectedPaymentMethod(event.target.value);
    };

    return (
        <Box sx={{ minWidth: 240 }}>
            <Box
                sx={{
                    mb: 2,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}
            >
                <Typography
                    id="example-payment-channel-label"
                    variant="body1"
                    fontWeight="bold"
                    sx={{ textTransform: 'uppercase', letterSpacing: '0.15rem' }}
                >
                    Pay with
                </Typography>
            </Box>
            <RadioGroup
                aria-labelledby="example-payment-channel-label"
                name="example-payment-channel"
                value={selectedPaymentMethod}
                onChange={handlePaymentMethodChange}
            >
                <List
                    component="nav"
                    aria-label="Payment Method"
                    sx={{
                        borderRadius: 'sm',
                        boxShadow: 'sm',
                        bgcolor: 'background.body'
                    }}
                    orientation={orientation}
                >
                    {paymentMethods.map((method) => (
                        <ListItemButton key={method.id} sx={{ borderTop: '1px solid', borderColor: 'divider' }}>
                            <Radio id={method.id} value={method.id} color="primary" />
                            <ListItemText primary={method.label} />
                        </ListItemButton>
                    ))}
                </List>
            </RadioGroup>
        </Box>
    );
}
