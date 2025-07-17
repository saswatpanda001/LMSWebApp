import { useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto';

const PerformanceTrends = () => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    chartInstanceRef.current = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
        datasets: [
          {
            label: 'Class Average',
            data: [72, 75, 78, 82, 85, 86],
            borderColor: '#4F46E5',
            backgroundColor: 'rgba(79, 70, 229, 0.1)',
            tension: 0.3,
            fill: true,
          },
          {
            label: 'Top 25%',
            data: [85, 88, 90, 92, 94, 95],
            borderColor: '#10B981',
            backgroundColor: 'rgba(16, 185, 129, 0.1)',
            tension: 0.3,
            fill: true,
          },
          {
            label: 'Bottom 25%',
            data: [60, 62, 65, 68, 70, 72],
            borderColor: '#EF4444',
            backgroundColor: 'rgba(239, 68, 68, 0.1)',
            tension: 0.3,
            fill: true,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: false,
            min: 50,
            max: 100,
          },
        },
      },
    });
  }, []);

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 lg:col-span-2">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-dark">Performance Trends</h2>
        <div className="flex space-x-2">
          <button className="px-3 py-1 bg-gray-100 rounded-lg text-sm">Monthly</button>
          <button className="px-3 py-1 bg-primary text-white rounded-lg text-sm">Weekly</button>
          <button className="px-3 py-1 bg-gray-100 rounded-lg text-sm">Daily</button>
        </div>
      </div>
      <div className="h-64">
        <canvas ref={chartRef}></canvas>
      </div>
    </div>
  );
};

export default PerformanceTrends;
