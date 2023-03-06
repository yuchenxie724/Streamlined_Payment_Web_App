import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { Paper } from '@mui/material';

function createData(name, property1, property2, property3, property4) {
    return { name, property1, property2, property3, property4 };
}

const rows = [
    createData('service 1', 159, 6.0, 24, 4.0),
    createData('service 2', 237, 9.0, 37, 4.3),
    createData('service 3', 262, 16.0, 24, 6.0),
    createData('service 4', 305, 3.7, 67, 4.3),
    createData('service 5', 356, 16.0, 49, 3.9),
    createData('service 6', 200, 5.0, 30, 5.5),
    createData('service 7', 180, 4.5, 25, 6.5),
    createData('service 8', 290, 8.0, 50, 3.0)
];

export default function BasicTable() {
    return (
        <TableContainer component={Paper} sx={{ height: 500 }}>
            <Table sx={{ minWidth: 800 }}>
                <TableHead>
                    <TableRow>
                        <TableCell>Service</TableCell>
                        <TableCell align="right">property1</TableCell>
                        <TableCell align="right">property2</TableCell>
                        <TableCell align="right">property3</TableCell>
                        <TableCell align="right">property4</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.name}>
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.property1}</TableCell>
                            <TableCell align="right">{row.property2}</TableCell>
                            <TableCell align="right">{row.property3}</TableCell>
                            <TableCell align="right">{row.property4}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
