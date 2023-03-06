import * as React from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

const VISIBLE_FIELDS = ['service', 'info1', 'info2'];

const dummyData = [
    { id: 1, service: 'Service 1', info1: 'dummy info', info2: 'dummy info' },
    { id: 2, service: 'Service 2', info1: 'dummy info', info2: 'dummy info' },
    { id: 3, service: 'Service 3', info1: 'dummy info', info2: 'dummy info' }
];

export default function FilterDataGrid() {
    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={dummyData}
                // columns={VISIBLE_FIELDS.map((field) => ({ field, headerName: field }))}
                columns={[
                    { field: 'service', headerName: 'service', width: 200 },
                    { field: 'info1', headerName: 'info1', width: 300 },
                    { field: 'info2', headerName: 'info2', width: 300 }
                ]}
                components={{ Toolbar: GridToolbar }}
                columnBuffer={100}
                autoHeight
                style={{
                    fontSize: 16,
                    lineHeight: '2em',
                    '& .MuiDataGrid-cell': {
                        whiteSpace: 'normal',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        wordWrap: 'break-word'
                    }
                }}
            />
        </div>
    );
}
