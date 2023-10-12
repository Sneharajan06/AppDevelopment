
import React from 'react';
import { styled } from '@mui/system';
import { BarChart as MuiBarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Week 1', car: 678, bike: 1020  },
    { name: 'Week 2', car: 450, bike: 900 },
    { name: 'Week 3 ', car: 700, bike: 800 },
    { name: 'Week 4', car: 1090, bike: 1500},
];
const data1 = [
    { name: 'Week 1', Students: 678, Parents: 1020, Staffs: 1698, },
    { name: 'Week 1', Students: 278, Parents: 500, Staffs: 800, },
    { name: 'Week 1', Students: 778, Parents: 200, Staffs: 60, },
    { name: 'Week 1', Students: 178, Parents: 1020, Staffs: 98, },
    
];

const BarChart = styled(MuiBarChart)`
  margin: 0 auto;
`;

export default function CustomBarChart() {
    return (
        <>


            <h1>Parking</h1>
            <ResponsiveContainer width="50%" height={200}>
                <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="bike" fill="#8884d8" />
                    <Bar dataKey="car" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>
            <h1>Visitors</h1>
            <ResponsiveContainer width="50%" height={200}>
                <BarChart data={data1} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="Students" fill="#8884d8" />
                    <Bar dataKey="Parents" fill="#82ca9d" />
                    <Bar dataKey="Staffs" fill="aria" />
                </BarChart>
            </ResponsiveContainer>
        </>
    );
}
