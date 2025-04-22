import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend } from 'recharts'
import { useEffect, useState } from 'react'

const data = [
  {
    name: 'Mon',
    mobile: 2400,
    desktop: 1400,
    tablet: 800,
  },
  {
    name: 'Tue',
    mobile: 1398,
    desktop: 2210,
    tablet: 600,
  },
  {
    name: 'Wed',
    mobile: 9800,
    desktop: 2290,
    tablet: 900,
  },
  {
    name: 'Thu',
    mobile: 3908,
    desktop: 2000,
    tablet: 1100,
  },
  {
    name: 'Fri',
    mobile: 4800,
    desktop: 2181,
    tablet: 1000,
  },
  {
    name: 'Sat',
    mobile: 3800,
    desktop: 2500,
    tablet: 800,
  },
  {
    name: 'Sun',
    mobile: 4300,
    desktop: 2100,
    tablet: 700,
  },
]

export function AnalyticsCharts() {
  const [chartWidth, setChartWidth] = useState(0)

  useEffect(() => {
    const updateWidth = () => {
      setChartWidth(window.innerWidth)
    }
    updateWidth()
    window.addEventListener('resize', updateWidth)
    return () => window.removeEventListener('resize', updateWidth)
  }, [])

  return (
    <ResponsiveContainer width='100%' height='100%'>
      <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <XAxis
          dataKey='name'
          stroke='#888888'
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke='#888888'
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}`}
        />
        <Tooltip 
          contentStyle={{ 
            background: 'white',
            border: '1px solid #e5e7eb',
            borderRadius: '8px',
            boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
          }}
        />
        <Legend />
        <Bar 
          dataKey='desktop' 
          fill='#8884d8' 
          radius={[4, 4, 0, 0]}
          name='Desktop'
        />
        <Bar 
          dataKey='mobile' 
          fill='#82ca9d' 
          radius={[4, 4, 0, 0]}
          name='Mobile'
        />
        <Bar 
          dataKey='tablet' 
          fill='#ffc658' 
          radius={[4, 4, 0, 0]}
          name='Tablet'
        />
      </BarChart>
    </ResponsiveContainer>
  )
}