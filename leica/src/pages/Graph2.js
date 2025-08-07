import React, {memo} from 'react';


import styled from 'styled-components';

const Graph2Container = styled.div`
    background-color:rgb(138, 72, 110);
    padding: 20px;
`;

const Graph2 = memo(() => {
  return (
    <Graph2Container>
      <h2>Graph 2</h2>
    </Graph2Container>
  );
});

export default Graph2;
