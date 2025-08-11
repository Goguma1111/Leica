import React, { memo, useState } from 'react';
import styled from 'styled-components';

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

import { Bar } from 'react-chartjs-2';

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
    .header {
        display: flex;
        align-items: center;
        gap: 10px;
        margin-bottom: 20px;
    }

    h1 {
        margin: 0;
        font-size: 1.8rem;
    }

    select {
        padding: 8px 12px;
        font-size: 16px;
        border-radius: 4px;
        border: 1px solid #999;
        cursor: pointer;
    }

    .chart-item {
        width: 100%;
        padding: 20px;
        box-sizing: border-box;
        height: auto; /* 차트 높이 설정 */
    }
    `;



const TotalSales = memo(() => {
  const [change, setChange] = useState('weekly');

  const dataSets = {

    daily: {
        labels: ['8/1', '8/2', '8/3', '8/4', '8/5', '8/6', '8/7'],
        datasets: [{
        label: '일간 매출',
        data: [3200000, 3000000, 3100000, 3500000, 2800000, 2900000, 3600000],
        backgroundColor: 'rgba(198, 204, 182, 0.7)',
        borderColor: 'rgb(159, 170, 130)',
        borderWidth: 1,
        }]
    },

    weekly: {
      labels: ['7월 1주', '7월 2주', '7월 3주', '7월 4주'],
      datasets: [{
        label: '주간 매출',
        data: [220000000, 210000000, 250000000, 200000000],
        backgroundColor: 'rgba(198, 204, 182, 0.7)',
        borderColor: 'rgb(159, 170, 130)',
        borderWidth: 1,
      }]
    }
  };

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
        <Bar
          options={{
            responsive: true,
            maintainAspectRatio: true,
            indexAxis: 'y',
            plugins: {
              legend: {
                position: 'bottom',
              }
            }
          }}
          data={dataSets[change]}
        />
      </div>
    </ChartContainer>
  );
});

export default TotalSales;
