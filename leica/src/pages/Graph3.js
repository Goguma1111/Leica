import React, {memo} from 'react';


import styled from 'styled-components';

const Graph3Container = styled.div`
    background-color:rgb(209, 255, 165);
    padding: 20px;
`;

const Graph3 = memo(() => {
  return (
    <Graph3Container>
      <h2>Graph 3</h2>
    </Graph3Container>
  );
});

export default Graph3;
