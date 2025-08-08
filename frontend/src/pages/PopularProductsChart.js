import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import styled from 'styled-components';

// Chart.js 등록
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ChartContainer = styled.div`
  background: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 20px 0;
`;

const ChartTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 20px;
  color: #333;
`;

const ToggleContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

const ToggleButton = styled.button`
  padding: 8px 16px;
  border: 2px solid ${props => props.active ? '#007bff' : '#e0e0e0'};
  background: ${props => props.active ? '#007bff' : 'white'};
  color: ${props => props.active ? 'white' : '#333'};
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.2s ease;

  &:hover {
    background: ${props => props.active ? '#0056b3' : '#f8f9fa'};
    border-color: ${props => props.active ? '#0056b3' : '#007bff'};
  }

  @media (max-width: 768px) {
    padding: 6px 12px;
    font-size: 14px;
  }
`;

const ChartWrapper = styled.div`
  position: relative;
  height: 300px;
  
  @media (max-width: 768px) {
    height: 250px;
  }
`;

const PopularProductsChart = () => {
  const [timeRange, setTimeRange] = useState('daily'); // 'daily' 또는 'weekly'

  // 라이카 제품 데이터
  const products = [
    'Leica Q3',
    'Leica M11‑P',
    'Leica D‑Lux8',
    'Leica SL3',
    'Leica M6'
  ];

  // 샘플 데이터
  const dailyData = {
    labels: products,
    datasets: [
      {
        label: '일간 판매량',
        data: [85, 72, 68, 65, 58],
        backgroundColor: '#8B5CF6', // 보라색
        borderColor: '#7C3AED',
        borderWidth: 1,
        borderRadius: 4,
      },
    ],
  };

  const weeklyData = {
    labels: products,
    datasets: [
      {
        label: '주간 판매량',
        data: [420, 380, 350, 320, 290],
        backgroundColor: '#8B5CF6', // 보라색
        borderColor: '#7C3AED',
        borderWidth: 1,
        borderRadius: 4,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          usePointStyle: true,
          padding: 20,
          font: {
            size: 12,
          },
        },
      },
      title: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: '#f0f0f0',
        },
        ticks: {
          font: {
            size: 12,
          },
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: 11,
          },
          maxRotation: 45,
        },
      },
    },
  };

  const currentData = timeRange === 'daily' ? dailyData : weeklyData;

  return (
    <ChartContainer>
      <ChartTitle>인기 제품 TOP5</ChartTitle>
      
      <ToggleContainer>
        <ToggleButton
          active={timeRange === 'daily'}
          onClick={() => setTimeRange('daily')}
        >
          일간
        </ToggleButton>
        <ToggleButton
          active={timeRange === 'weekly'}
          onClick={() => setTimeRange('weekly')}
        >
          주간
        </ToggleButton>
      </ToggleContainer>

      <ChartWrapper>
        <Bar data={currentData} options={chartOptions} />
      </ChartWrapper>
    </ChartContainer>
  );
};

export default PopularProductsChart; 