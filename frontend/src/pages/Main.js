import React, { memo } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

/**컴포넌트 참조 */
import Spinner from "../components/Spinner";
import NewMember from "./NewMember";
import PopularProductsChart from "../components/PopularProductsChart";
import TotalSales from "./TotalSales";

const PagesContainer = styled.div`
    /**영역 확인을 위한 임시 코드 */
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
`;

const NavigationLink = styled(Link)`
    display: inline-block;
    padding: 8px 16px;
    background: #3b82f6;
    color: white;
    text-decoration: none;
    border-radius: 6px;
    font-weight: 500;
    font-size: 14px;
    transition: all 0.2s ease;
    width: fit-content;

    &:hover {
        background: #2563eb;
        transform: translateY(-1px);
    }
`;

const Pages = memo(() => {
    return (
        <PagesContainer>
            <NavigationLink to="/dashboard">대시보드</NavigationLink>
            <NewMember />
            <PopularProductsChart />
            <TotalSales />
        </PagesContainer>
    );
});

export default Pages;