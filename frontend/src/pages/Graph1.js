import React from 'react';
import styled from 'styled-components';

const GraphContainer = styled.div`
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6b7280;
  font-size: 1.125rem;
  font-weight: 500;
`;

export default function Graph1() {
  return (
    <GraphContainer>
      📊 매출 통계 차트 (Graph1)
    </GraphContainer>
  );
} 