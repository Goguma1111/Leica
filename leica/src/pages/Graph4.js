import React, {memo} from 'react';


import styled from 'styled-components';

const Graph4Container = styled.div`
    background-color:rgb(255, 254, 216);
    padding: 20px;
    width: calc(50% - 10px); /* gap의 절반 */
    flex: none;
`;

const Graph4 = memo(() => {
  return (
    <Graph4Container>
      <h2>Graph 4</h2>
    </Graph4Container>
  );
});

export default Graph4;
