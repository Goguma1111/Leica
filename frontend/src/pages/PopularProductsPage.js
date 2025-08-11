import React from 'react';
import styled from 'styled-components';
import PopularProductsChart from '../components/PopularProductsChart';

const PageContainer = styled.div`
  min-height: 100vh;
  background: #f5f5f5;
  padding: 20px;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 30px;
`;

const PageTitle = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: #333;
  margin-bottom: 10px;
`;

const PageSubtitle = styled.p`
  font-size: 16px;
  color: #666;
  margin: 0;
`;

const ContentContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  background: white;
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const PopularProductsPage = () => {
  return (
    <PageContainer>
      <Header>
        <PageTitle>라이카 스토어 인기 제품 대시보드</PageTitle>
        <PageSubtitle>실시간 인기 제품 TOP 5 차트</PageSubtitle>
      </Header>
      
      <ContentContainer>
        <PopularProductsChart />
      </ContentContainer>
    </PageContainer>
  );
};

export default PopularProductsPage; 