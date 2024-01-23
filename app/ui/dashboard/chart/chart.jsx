"use client"

import styles from './chart.module.css'
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
      name: "Lunes",
      visit: 4300,
      clic: 2400,
    },
    {
        name: "Martes",
        visit: 2800,
        clic: 1300,
    },
    {
        name: "Miércoles",
        visit: 3480,
        clic: 2120,
    },
    {
        name: "Jueves",
        visit: 3800,
        clic: 2390,
    },
    {
        name: "Viernes",
        visit: 4270,
        clic: 2580,
    },
    {
        name: "Sábado",
        visit: 4700,
        clic: 2880,
    },
    {
        name: "Domingo",
        visit: 5100,
        clic: 3100,
    },
  ];

const Chart = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Resumen Semanal</h2>
            <ResponsiveContainer width="100%" height="90%">
                <LineChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                    }}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip contentStyle={{background:"151c2c", border:"none"}}/>
                    <Legend />
                    <Line type="monotone" dataKey="visit" stroke="#8884d8" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="click" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Chart