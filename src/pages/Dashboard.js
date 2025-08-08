import React from 'react';
import styled from 'styled-components';
import PopularProductsChart from '../components/PopularProductsChart';
import Graph1 from './Graph1';
import Graph2 from './Graph2';

// 이미지 import
import leicaQ3 from '../images/products/leica-q3.jpg';
import leicaM11P from '../images/products/leica-m11p.jpg';
import leicaDLux8 from '../images/products/leica-dlux8.jpg';
import leicaSL3 from '../images/products/leica-sl3.jpg';

const DashboardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 1rem;
  padding: 1rem;
  
  @media (min-width: 768px) {
    gap: 1.5rem;
  }
  
  /* 페이지 로드 애니메이션 */
  animation: fadeInUp 0.8s ease-out;
  
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const MetricsSection = styled.div`
  grid-column: span 12;
  
  @media (min-width: 1280px) {
    grid-column: span 7;
  }
`;

const TargetSection = styled.div`
  grid-column: span 12;
  
  @media (min-width: 1280px) {
    grid-column: span 5;
  }
`;

const StatisticsSection = styled.div`
  grid-column: span 12;
`;

const DemographicSection = styled.div`
  grid-column: span 12;
  
  @media (min-width: 1280px) {
    grid-column: span 5;
  }
`;

const OrdersSection = styled.div`
  grid-column: span 12;
  
  @media (min-width: 1280px) {
    grid-column: span 7;
  }
`;

const MetricCard = styled.div`
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }
  
  /* 순차적 등장 애니메이션 */
  animation: slideInLeft 0.6s ease-out;
  animation-delay: ${props => props.delay || '0s'};
  animation-fill-mode: both;
  
  @keyframes slideInLeft {
    from {
      opacity: 0;
      transform: translateX(-30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

const MetricTitle = styled.h3`
  font-size: 0.875rem;
  color: #6b7280;
  margin-bottom: 0.5rem;
`;

const MetricValue = styled.div`
  font-size: 1.875rem;
  font-weight: 700;
  color: #111827;
`;

const MetricChange = styled.div`
  font-size: 0.875rem;
  color: ${props => props.positive ? '#059669' : '#dc2626'};
  margin-top: 0.5rem;
`;

const TargetCard = styled.div`
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  height: fit-content;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.12);
  }
  
  /* 우측에서 등장 애니메이션 */
  animation: slideInRight 0.6s ease-out;
  animation-delay: 0.3s;
  animation-fill-mode: both;
  
  @keyframes slideInRight {
    from {
      opacity: 0;
      transform: translateX(30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

const TargetTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 1rem;
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 8px;
  background: #e5e7eb;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 0.5rem;
`;

const ProgressFill = styled.div`
  height: 100%;
  background: #3b82f6;
  width: ${props => props.percentage}%;
  transition: width 1s ease-out;
  animation: progressFill 1.5s ease-out;
  animation-delay: 0.8s;
  animation-fill-mode: both;
  
  @keyframes progressFill {
    from {
      width: 0%;
    }
    to {
      width: ${props => props.percentage}%;
    }
  }
`;

const DemographicCard = styled.div`
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  height: fit-content;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.12);
  }
  
  /* 아래에서 등장 애니메이션 */
  animation: slideInUp 0.6s ease-out;
  animation-delay: 0.6s;
  animation-fill-mode: both;
  
  @keyframes slideInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const OrdersCard = styled.div`
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const OrdersTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 1rem;
`;

const OrderItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 0;
  border-bottom: 1px solid #f3f4f6;
  transition: all 0.2s ease;
  
  &:last-child {
    border-bottom: none;
  }
  
  &:hover {
    background: #f9fafb;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    border-radius: 6px;
  }
  
  /* 순차적 등장 애니메이션 */
  animation: fadeIn 0.4s ease-out;
  animation-delay: ${props => (props.index * 0.1) + 1.2}s;
  animation-fill-mode: both;
  
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateX(20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

const OrderInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex: 1;
`;

const CustomerSection = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  min-width: 200px;
`;

const CustomerAvatar = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background: #e5e7eb;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  color: #6b7280;
  flex-shrink: 0;
`;

const CustomerDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const CustomerName = styled.div`
  font-weight: 500;
  color: #111827;
`;

const OrderDate = styled.div`
  font-size: 0.75rem;
  color: #6b7280;
`;

const ProductSection = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex: 1;
`;

const ProductImage = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 8px;
  background: ${props => props.bgColor || '#f3f4f6'};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: #6b7280;
  overflow: hidden;
  flex-shrink: 0;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ProductName = styled.div`
  font-weight: 600;
  color: #111827;
  font-size: 0.875rem;
`;

const OrderAmount = styled.div`
  font-weight: 600;
  color: #111827;
  text-align: right;
  min-width: 120px;
`;

const StatusTag = styled.div`
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.75rem;
  font-weight: 500;
  background: ${props => {
    switch(props.status) {
      case 'delivered': return '#dcfce7';
      case 'pending': return '#fef3c7';
      case 'cancelled': return '#fee2e2';
      default: return '#e5e7eb';
    }
  }};
  color: ${props => {
    switch(props.status) {
      case 'delivered': return '#166534';
      case 'pending': return '#92400e';
      case 'cancelled': return '#991b1b';
      default: return '#6b7280';
    }
  }};
  margin-left: 0.5rem;
  min-width: 80px;
  text-align: center;
`;

export default function Dashboard() {
  return (
    <DashboardContainer>
      <MetricsSection>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
          <MetricCard delay="0.1s">
            <MetricTitle>총 매출</MetricTitle>
            <MetricValue>₩24,500,000</MetricValue>
            <MetricChange positive>+2.5%</MetricChange>
          </MetricCard>
          
          <MetricCard delay="0.2s">
            <MetricTitle>총 주문</MetricTitle>
            <MetricValue>234</MetricValue>
            <MetricChange positive>+12.3%</MetricChange>
          </MetricCard>
          
          <MetricCard delay="0.3s">
            <MetricTitle>평균 주문 가격</MetricTitle>
            <MetricValue>₩1,985,000</MetricValue>
            <MetricChange positive>+8.1%</MetricChange>
          </MetricCard>
          
          <MetricCard delay="0.4s">
            <MetricTitle>신규 고객</MetricTitle>
            <MetricValue>89</MetricValue>
            <MetricChange>+5.2%</MetricChange>
          </MetricCard>
        </div>
        
        <div style={{ marginTop: '1.5rem' }}>
          <Graph1 />
        </div>
      </MetricsSection>

      <TargetSection>
        <TargetCard>
          <TargetTitle>주간 목표</TargetTitle>
          <div style={{ marginBottom: '1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'spaceBetween', marginBottom: '0.5rem' }}>
              <span style={{ fontSize: '0.875rem', color: '#6b7280' }}>매출 목표</span>
              <span style={{ fontSize: '0.875rem', fontWeight: '600' }}>75%</span>
            </div>
            <ProgressBar>
              <ProgressFill percentage={75} />
            </ProgressBar>
          </div>
          
          <div style={{ marginBottom: '1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'spaceBetween', marginBottom: '0.5rem' }}>
              <span style={{ fontSize: '0.875rem', color: '#6b7280' }}>주문 목표</span>
              <span style={{ fontSize: '0.875rem', fontWeight: '600' }}>60%</span>
            </div>
            <ProgressBar>
              <ProgressFill percentage={60} />
            </ProgressBar>
          </div>
          
          <div>
            <div style={{ display: 'flex', justifyContent: 'spaceBetween', marginBottom: '0.5rem' }}>
              <span style={{ fontSize: '0.875rem', color: '#6b7280' }}>고객 목표</span>
              <span style={{ fontSize: '0.875rem', fontWeight: '600' }}>85%</span>
            </div>
            <ProgressBar>
              <ProgressFill percentage={85} />
            </ProgressBar>
          </div>
        </TargetCard>
      </TargetSection>

      <StatisticsSection>
        <Graph2 />
      </StatisticsSection>

      <DemographicSection>
        <DemographicCard>
          <TargetTitle>고객 통계</TargetTitle>
          <div style={{ marginBottom: '1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'spaceBetween', marginBottom: '0.5rem' }}>
              <span style={{ fontSize: '0.875rem', color: '#6b7280' }}>20-30대</span>
              <span style={{ fontSize: '0.875rem', fontWeight: '600' }}>45%</span>
            </div>
            <ProgressBar>
              <ProgressFill percentage={45} />
            </ProgressBar>
          </div>
          
          <div style={{ marginBottom: '1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'spaceBetween', marginBottom: '0.5rem' }}>
              <span style={{ fontSize: '0.875rem', color: '#6b7280' }}>30-40대</span>
              <span style={{ fontSize: '0.875rem', fontWeight: '600' }}>35%</span>
            </div>
            <ProgressBar>
              <ProgressFill percentage={35} />
            </ProgressBar>
          </div>
          
          <div style={{ marginBottom: '1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'spaceBetween', marginBottom: '0.5rem' }}>
              <span style={{ fontSize: '0.875rem', color: '#6b7280' }}>40-50대</span>
              <span style={{ fontSize: '0.875rem', fontWeight: '600' }}>20%</span>
            </div>
            <ProgressBar>
              <ProgressFill percentage={20} />
            </ProgressBar>
          </div>
        </DemographicCard>
      </DemographicSection>

      <OrdersSection>
        <OrdersCard>
          <OrdersTitle>최근 주문</OrdersTitle>
          <OrderItem index={0}>
            <OrderInfo>
              <CustomerSection>
                <CustomerAvatar>
                  <span>J</span>
                </CustomerAvatar>
                <CustomerDetails>
                  <CustomerName>JAY</CustomerName>
                  <OrderDate>2025-08-08 14:30</OrderDate>
                </CustomerDetails>
              </CustomerSection>
              <ProductSection>
                <ProductImage bgColor="#f3f4f6">
                  <img 
                    src={leicaQ3} 
                    alt="Leica Q3" 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </ProductImage>
                <ProductName>Leica Q3</ProductName>
              </ProductSection>
            </OrderInfo>
            <OrderAmount>₩2,500,000</OrderAmount>
            <StatusTag status="pending">배송 준비중</StatusTag>
          </OrderItem>
          
          <OrderItem index={1}>
            <OrderInfo>
              <CustomerSection>
                <CustomerAvatar>
                  <span>S</span>
                </CustomerAvatar>
                <CustomerDetails>
                  <CustomerName>서혜정</CustomerName>
                  <OrderDate>2025-08-08 13:15</OrderDate>
                </CustomerDetails>
              </CustomerSection>
              <ProductSection>
                <ProductImage bgColor="#f3f4f6">
                  <img 
                    src={leicaM11P} 
                    alt="Leica M11-P" 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </ProductImage>
                <ProductName>Leica M11-P</ProductName>
              </ProductSection>
            </OrderInfo>
            <OrderAmount>₩1,800,000</OrderAmount>
            <StatusTag status="delivered">배송완료</StatusTag>
          </OrderItem>
          
          <OrderItem index={2}>
            <OrderInfo>
              <CustomerSection>
                <CustomerAvatar>
                  <span>L</span>
                </CustomerAvatar>
                <CustomerDetails>
                  <CustomerName>이시아</CustomerName>
                  <OrderDate>2025-08-08 12:45</OrderDate>
                </CustomerDetails>
              </CustomerSection>
              <ProductSection>
                <ProductImage bgColor="#f3f4f6">
                  <img 
                    src={leicaDLux8} 
                    alt="Leica D-Lux8" 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </ProductImage>
                <ProductName>Leica D-Lux8</ProductName>
              </ProductSection>
            </OrderInfo>
            <OrderAmount>₩3,200,000</OrderAmount>
            <StatusTag status="delivered">배송완료</StatusTag>
          </OrderItem>
          
          <OrderItem index={3}>
            <OrderInfo>
              <CustomerSection>
                <CustomerAvatar>
                  <span>P</span>
                </CustomerAvatar>
                <CustomerDetails>
                  <CustomerName>박진아</CustomerName>
                  <OrderDate>2025-08-08 11:20</OrderDate>
                </CustomerDetails>
              </CustomerSection>
              <ProductSection>
                <ProductImage bgColor="#f3f4f6">
                  <img 
                    src={leicaSL3} 
                    alt="Leica SL3" 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </ProductImage>
                <ProductName>Leica SL3</ProductName>
              </ProductSection>
            </OrderInfo>
            <OrderAmount>₩1,500,000</OrderAmount>
            <StatusTag status="cancelled">주문취소</StatusTag>
          </OrderItem>
        </OrdersCard>
      </OrdersSection>
      
      <div style={{ 
        gridColumn: 'span 12', 
        marginTop: '1.5rem',
        animation: 'fadeInUp 0.8s ease-out',
        animationDelay: '1.5s',
        animationFillMode: 'both'
      }}>
        <PopularProductsChart />
      </div>
    </DashboardContainer>
  );
} 