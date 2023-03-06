import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function OutlinedButtons() {
    const rootUrl = window.location.origin; // get the root page URL

    return (
        <Button variant="outlined" href={`${rootUrl}/free/payment`}>
            Make a Payment
        </Button>
    );
}
