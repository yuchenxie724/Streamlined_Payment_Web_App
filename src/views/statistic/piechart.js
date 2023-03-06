import * as React from 'react';
import Paper from '@mui/material/Paper';
import { Chart, PieSeries, Title, Legend } from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';

const data = [
    { Service: 'Service 1', area: 12 },
    { Service: 'Service 2', area: 7 },
    { Service: 'Service 3', area: 7 },
    { Service: 'Service 4', area: 7 },
    { Service: 'Service 5', area: 6 },
    { Service: 'Service 6', area: 5 },
    { Service: 'Service 7', area: 2 },
    { country: 'Others', area: 55 }
];

const formatLabel = (data) => `${data.argument} (${data.value} - ${(data.value / getTotal(data)).toFixed(2) * 100}%)`;
const getTotal = (data) => data.reduce((total, { area }) => total + area, 0);

export default class Demo extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            data
        };
    }

    render() {
        const { data: chartData } = this.state;

        return (
            <Paper>
                <Chart data={chartData}>
                    <PieSeries
                        valueField="area"
                        argumentField="Service"
                        innerRadius={0.6}
                        outerRadius={0.8}
                        label={{ visible: true, format: formatLabel }}
                    />
                    <Title text="Area of Service" />
                    <Legend />
                    <Animation />
                </Chart>
            </Paper>
        );
    }
}
