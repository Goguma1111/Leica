import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

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
  height: 300px;
  position: relative;
  padding: 1rem 0;
`;

const ChartArea = styled.svg`
  width: 100%;
  height: 100%;
`;

const GridLine = styled.line`
  stroke: #e5e7eb;
  stroke-width: 1;
  stroke-dasharray: 5,5;
`;

const GridText = styled.text`
  font-size: 0.75rem;
  fill: #6b7280;
  text-anchor: end;
`;

const LinePath = styled.path`
  fill: none;
  stroke: #8B5CF6;
  stroke-width: 3;
  stroke-linecap: round;
  stroke-linejoin: round;
  filter: drop-shadow(0 2px 4px rgba(139, 92, 246, 0.2));
`;

const AreaPath = styled.path`
  fill: url(#gradient);
  opacity: 0.1;
`;

const DataPoint = styled.circle`
  fill: #8B5CF6;
  stroke: white;
  stroke-width: 2;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    r: 6;
    fill: #7C3AED;
  }
`;

const Tooltip = styled.div`
  position: absolute;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 0.5rem;
  border-radius: 4px;
  font-size: 0.875rem;
  pointer-events: none;
  z-index: 10;
  display: ${props => props.visible ? 'block' : 'none'};
`;

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

export default function HourlySalesChart() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [tooltip, setTooltip] = useState({ visible: false, x: 0, y: 0, content: '' });

  useEffect(() => {
    fetchHourlySalesData();
  }, []);

  const fetchHourlySalesData = async () => {
    try {
      setLoading(true);
      console.log('시간대별 판매량 데이터 요청 시작...');
      
      const response = await fetch('/api/sales/hourly-pattern');
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
      console.error('시간대별 판매량 데이터 조회 실패:', err);
      console.error('에러 상세:', err.message);
      setError(err.message);
      // 폴백 데이터 사용
      setData([
        { hour: 9, totalQuantity: 45, orderCount: 4 },
        { hour: 10, totalQuantity: 38, orderCount: 3 },
        { hour: 11, totalQuantity: 42, orderCount: 4 },
        { hour: 12, totalQuantity: 35, orderCount: 3 },
        { hour: 13, totalQuantity: 28, orderCount: 3 },
        { hour: 14, totalQuantity: 52, orderCount: 4 },
        { hour: 15, totalQuantity: 48, orderCount: 4 },
        { hour: 16, totalQuantity: 55, orderCount: 5 },
        { hour: 17, totalQuantity: 32, orderCount: 3 },
        { hour: 18, totalQuantity: 25, orderCount: 2 },
        { hour: 19, totalQuantity: 18, orderCount: 2 }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    
    // 가장 가까운 데이터 포인트 찾기
    const chartWidth = rect.width - 80; // 좌우 여백 제외
    const hourWidth = chartWidth / (data.length - 1);
    const hourIndex = Math.round(x / hourWidth);
    
    if (hourIndex >= 0 && hourIndex < data.length) {
      const point = data[hourIndex];
      setTooltip({
        visible: true,
        x: event.clientX + 10,
        y: event.clientY - 10,
        content: `${point.hour}시: ${point.totalQuantity}개 판매`
      });
    }
  };

  const handleMouseLeave = () => {
    setTooltip({ ...tooltip, visible: false });
  };

  if (loading) {
    return (
      <ChartContainer>
        <ChartTitle>시간대별 판매 패턴</ChartTitle>
        <LoadingMessage>데이터를 불러오는 중...</LoadingMessage>
      </ChartContainer>
    );
  }

  if (error) {
    return (
      <ChartContainer>
        <ChartTitle>시간대별 판매 패턴</ChartTitle>
        <ErrorMessage>오류: {error}</ErrorMessage>
      </ChartContainer>
    );
  }

  const maxQuantity = Math.max(...data.map(item => item.totalQuantity));
  const chartWidth = 800;
  const chartHeight = 200;
  const padding = 40;

  // 차트 데이터를 SVG 좌표로 변환
  const points = data.map((item, index) => {
    const x = padding + (index / (data.length - 1)) * (chartWidth - 2 * padding);
    const y = chartHeight - padding - (item.totalQuantity / maxQuantity) * (chartHeight - 2 * padding);
    return { x, y, ...item };
  });

  // 라인 차트 경로 생성
  const linePath = points.map((point, index) => {
    if (index === 0) return `M ${point.x} ${point.y}`;
    return `L ${point.x} ${point.y}`;
  }).join(' ');

  // 영역 차트 경로 생성
  const areaPath = linePath + `L ${points[points.length - 1].x} ${chartHeight - padding} L ${points[0].x} ${chartHeight - padding} Z`;

  return (
    <ChartContainer>
      <ChartTitle>시간대별 판매 패턴</ChartTitle>
      <ChartContent 
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <ChartArea viewBox={`0 0 ${chartWidth} ${chartHeight}`}>
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          
          {/* 그리드 라인 */}
          {[0, 0.25, 0.5, 0.75, 1].map((ratio, index) => (
            <g key={index}>
              <GridLine 
                x1={padding} 
                y1={chartHeight - padding - ratio * (chartHeight - 2 * padding)}
                x2={chartWidth - padding} 
                y2={chartHeight - padding - ratio * (chartHeight - 2 * padding)}
              />
              <GridText 
                x={padding - 10} 
                y={chartHeight - padding - ratio * (chartHeight - 2 * padding) + 4}
              >
                {Math.round(maxQuantity * ratio)}
              </GridText>
            </g>
          ))}
          
          {/* 영역 차트 */}
          <AreaPath d={areaPath} />
          
          {/* 라인 차트 */}
          <LinePath d={linePath} />
          
          {/* 데이터 포인트 */}
          {points.map((point, index) => (
            <DataPoint 
              key={index}
              cx={point.x} 
              cy={point.y} 
              r="4"
            />
          ))}
          
          {/* X축 라벨 */}
          {points.map((point, index) => (
            <text 
              key={index}
              x={point.x} 
              y={chartHeight - 10} 
              textAnchor="middle"
              fontSize="12"
              fill="#6b7280"
            >
              {point.hour}시
            </text>
          ))}
        </ChartArea>
        
        <Tooltip 
          visible={tooltip.visible}
          style={{ left: tooltip.x, top: tooltip.y }}
        >
          {tooltip.content}
        </Tooltip>
      </ChartContent>
    </ChartContainer>
  );
} 