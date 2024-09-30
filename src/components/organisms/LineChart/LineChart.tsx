import { Line } from 'react-chartjs-2';
import { LineChartProps } from './types';

export const LineChart = ({ chartData }: LineChartProps) => (
  <>
    <h2 className="text-center">Portfolio Balance</h2>
    <Line
      data={chartData}
      options={{
        plugins: {
          title: {
            display: true
          }
        }
      }}
    />
  </>
)