import React, {memo} from 'react';


import styled from 'styled-components';

const Graph5Container = styled.div`
    background-color:rgb(162, 252, 255);
    padding: 20px;
    flex: 1 1 100%;
`;

const Graph5 = memo(() => {
  return (
    <Graph5Container>
      <h2>Graph 5</h2>
    </Graph5Container>
  );
});

export default Graph5;
