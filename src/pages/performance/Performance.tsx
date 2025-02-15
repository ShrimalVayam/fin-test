import { PieChart } from '../../components/organisms/PieChart';
import { LineChart } from '../../components/organisms/LineChart';
import { AssetView } from './types';
import { PerfTimeline } from './common';
import { usePerformance } from './usePerformance';

export const Performance = () => {
  const {
    view,
    viewBasedPieChart,
    lineChartDataBuilder,
    perfTimeline,
    changeViewHandler,
    pieChartDataBuilder,
    setPerfTimeline
  } = usePerformance();

  return (
    <div className="flex justify-center gap-12">
      <div className="h-96 w-96 flex flex-col gap-4">
        <select
          className="self-center"
          value={view}
          onChange={changeViewHandler}
        >
          <option value={AssetView.ASSETCLASS}>Asset class view</option>
          <option value={AssetView.ASSET}>Asset type view</option>
        </select>
        <PieChart chartData={pieChartDataBuilder(viewBasedPieChart)} />
      </div>
      <div className="h-full w-full">
        <div className="flex gap-2 justify-center">
          {Object.keys(PerfTimeline).map((item, index) => (
            <button
              onClick={() =>
                setPerfTimeline(PerfTimeline[item as keyof typeof PerfTimeline])
              }
              className={`p-4 bg-gray-100 rounded-2xl cursor-pointer ${
                PerfTimeline[item as keyof typeof PerfTimeline] ===
                  perfTimeline && 'bg-blue-500'
              }`}
              key={index}
            >
              {item}
            </button>
          ))}
        </div>
        <LineChart chartData={lineChartDataBuilder} />
      </div>
    </div>
  );
};
