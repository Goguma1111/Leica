import React, {memo} from 'react';


import styled from 'styled-components';

const Graph1Container = styled.div`
    background-color:rgb(255, 223, 255);
    padding: 20px;
`;

const Graph1 = memo(() => {
  return (
    <Graph1Container>
      <h2>날짜별 신규 회원 수</h2>
    </Graph1Container>
  );
});

export default Graph1;
