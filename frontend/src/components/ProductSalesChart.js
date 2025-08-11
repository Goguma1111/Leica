import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const ChartContainer = styled.div`
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
`;

const ChartTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 1rem;
`;

const ChartContent = styled.div`
  height: 360px;
  position: relative;
`;

// 막대형 구성 요소 제거하고 도넛 차트로 전환

const LoadingMessage = styled.div`
  text-align: center;
  color: #6b7280;
  font-style: italic;
  padding: 2rem;
`;

const ErrorMessage = styled.div`
  text-align: center;
  color: #dc2626;
  padding: 2rem;
`;

export default function ProductSalesChart() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProductSalesData();
  }, []);

  const fetchProductSalesData = async () => {
    try {
      setLoading(true);
      console.log('제품별 판매량 데이터 요청 시작...');
      
      const response = await fetch('/api/sales/product-distribution');
      console.log('API 응답 상태:', response.status, response.statusText);
      
      if (!response.ok) {
        const errorText = await response.text();
        console.error('API 응답 에러:', errorText);
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
      
      const result = await response.json();
      console.log('받은 데이터:', result);
      setData(result);
    } catch (err) {
      console.error('제품별 판매량 데이터 조회 실패:', err);
      console.error('에러 상세:', err.message);
      setError(err.message);
      // 폴백 데이터 사용
      setData([
        { productName: 'Leica Q3', totalQuantity: 91, orderCount: 8 },
        { productName: 'Leica M11-P', totalQuantity: 85, orderCount: 7 },
        { productName: 'Leica D-Lux8', totalQuantity: 72, orderCount: 6 },
        { productName: 'Leica SL3', totalQuantity: 68, orderCount: 5 },
        { productName: 'Leica M6', totalQuantity: 65, orderCount: 5 }
      ]);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <ChartContainer>
        <ChartTitle>제품별 판매량 분포</ChartTitle>
        <LoadingMessage>데이터를 불러오는 중...</LoadingMessage>
      </ChartContainer>
    );
  }

  if (error) {
    return (
      <ChartContainer>
        <ChartTitle>제품별 판매량 분포</ChartTitle>
        <ErrorMessage>오류: {error}</ErrorMessage>
      </ChartContainer>
    );
  }

  const labels = data.map(item => item.productName);
  const values = data.map(item => item.totalQuantity);
  const palette = ['#8B5CF6', '#7C3AED', '#A78BFA', '#C4B5FD', '#DDD6FE', '#EDE9FE', '#6D28D9'];
  const colors = values.map((_, idx) => palette[idx % palette.length]);

  const chartData = {
    labels,
    datasets: [
      {
        data: values,
        backgroundColor: colors,
        borderColor: '#ffffff',
        borderWidth: 2,
        hoverOffset: 8,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '60%',
    plugins: {
      legend: { position: 'right', labels: { usePointStyle: true } },
      tooltip: { enabled: true },
    },
  };

  return (
    <ChartContainer>
      <ChartTitle>제품별 판매량 분포</ChartTitle>
      <ChartContent>
        <Doughnut data={chartData} options={options} />
      </ChartContent>
    </ChartContainer>
  );
} 