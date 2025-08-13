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
        height: auto;
    }
`;

const TotalSales = memo(() => {
  const [change, setChange] = useState('daily');
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const url = change === 'daily'
      ? "http://localhost:8080/api/daily"
      : "http://localhost:8080/api/weekly";

    fetch(url)
      .then(res => res.json())
      .then(json => {
        if (json.item) {
          // daily/weekly에 따라 labels 분리
          const labels = change === 'daily'
            ? json.item.map(item => item.sales_date)
            : json.item.map(item => item.week_label);

          const values = json.item.map(item => item.count);

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
        }
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
              indexAxis: 'y', // 수평 막대
              plugins: {
                legend: { position: 'bottom' },
                tooltip: {
                  callbacks: {
                    label: function(context) {
                      return context.raw.toLocaleString(); // 천 단위 콤마
                    }
                  }
                }
              },
              scales: {
                x: {
                  ticks: {
                    callback: function(value) {
                      return Number(value).toLocaleString();
                    }
                  }
                }
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
