import { Pie } from 'react-chartjs-2';
import { PieChartProps } from './types';

export const PieChart = ({ chartData }: PieChartProps) => (
  <>
    <h2 className="text-center">Portfolio Composition</h2>
    <Pie
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
);
