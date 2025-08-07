import React, {memo, useMemo} from 'react';

import styled from 'styled-components';


/** 컴포넌트 참조 */
import Spinner from '../components/Spinner';
import Graph1 from './Graph1';
import Graph2 from './Graph2';
import Graph3 from './Graph3';



const PagesContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const Pages = memo(() => {
    return (
        <PagesContainer>
            <Graph1 />
            <Graph2 />
            <Graph3 />
        </PagesContainer>
    );
});

export default Pages;