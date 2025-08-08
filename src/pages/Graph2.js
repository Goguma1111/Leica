import React, {memo} from 'react';


import styled from 'styled-components';

const Graph2Container = styled.div`
    background-color:rgb(255, 134, 205);
    padding: 20px;
`;

const Graph2 = memo(() => {
  return (
    <Graph2Container>
      <h2>날짜별 총 매출</h2>
    </Graph2Container>
  );
});

export default Graph2;
