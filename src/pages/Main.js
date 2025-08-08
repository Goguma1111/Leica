import React, {memo, useMemo} from 'react';

import styled from 'styled-components';
import { Link } from 'react-router-dom';


/** 컴포넌트 참조 */
import Spinner from '../components/Spinner';
import Graph1 from './Graph1';
import Graph2 from './Graph2';
import PopularProductsChart from '../components/PopularProductsChart';



const PagesContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const NavigationLink = styled(Link)`
    display: inline-block;
    padding: 12px 24px;
    background: #007bff;
    color: white;
    text-decoration: none;
    border-radius: 6px;
    font-weight: 500;
    margin-bottom: 20px;
    transition: background-color 0.2s ease;

    &:hover {
        background: #0056b3;
    }
`;

const NavigationContainer = styled.div`
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
`;

const Pages = memo(() => {
    return (
        <PagesContainer>
            <NavigationContainer>
                <NavigationLink to="/dashboard">대시보드 보기</NavigationLink>
            </NavigationContainer>
            <Graph1 />
            <Graph2 />
            <PopularProductsChart />
        </PagesContainer>
    );
});

export default Pages;