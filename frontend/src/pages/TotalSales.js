import React, { memo, useState, useEffect } from 'react';
import styled from 'styled-components';
import { Bar } from 'react-chartjs-2';
import {
    Chart,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler
} from 'chart.js';

Chart.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

const ChartContainer = styled.div`
  /* 기존 스타일 유지 */
`;

const TotalSales = memo(() => {
  const [change, setChange] = useState('weekly');
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const url = `/api/sales/${change}?start=2025-08-01&end=2025-08-12`;


    fetch(url)
      .then(res => res.json())
      .then(data => {
        const labels = data.map(item => item.label);  // 일자 혹은 주차
        const values = data.map(item => item.total_price);

        setChartData({
          labels,
          datasets: [{
            label: change === 'daily' ? '일간 매출' : '주간 매출',
            data: values,
            backgroundColor: 'rgba(198, 204, 182, 0.7)',
            borderColor: 'rgb(159, 170, 130)',
            borderWidth: 1,
          }]
        });
      })
      .catch(err => {
        console.error(err);
        setChartData(null);
      });
  }, [change]);

  return (
    <ChartContainer>
      <div className="header">
        <h1>매출</h1>
        <select value={change} onChange={e => setChange(e.target.value)}>
          <option value="daily">일간</option>
          <option value="weekly">주간</option>
        </select>
      </div>

      <div className="chart-item">
        <h2>{change === 'daily' ? '일간 매출' : '주간 매출'}</h2>
        {chartData ? (
          <Bar
            options={{
              responsive: true,
              maintainAspectRatio: true,
              indexAxis: 'y',
              plugins: {
                legend: { position: 'bottom' }
              }
            }}
            data={chartData}
          />
        ) : (
          <p>데이터를 불러오는 중입니다...</p>
        )}
      </div>
    </ChartContainer>
  );
});

export default TotalSales;
