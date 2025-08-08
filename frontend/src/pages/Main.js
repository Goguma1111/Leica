import React, { memo } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

/**컴포넌트 참조 */
import Spinner from "../components/Spinner";
import NewMember from "./NewMember";

const PagesContainer = styled.div`
    /**영역 확인을 위한 임시 코드 */
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
`;

const NavigationLink = styled(Link)`
    display: inline-block;
    padding: 12px 24px;
    background: #3b82f6;
    color: white;
    text-decoration: none;
    border-radius: 8px;
    font-weight: 500;
    transition: all 0.2s ease;
    
    &:hover {
        background: #2563eb;
        transform: translateY(-2px);
    }
`;

const Pages = memo(() => {
    return (
        <PagesContainer>
            <NavigationLink to="/dashboard">대시보드</NavigationLink>
            <NewMember />
        </PagesContainer>
    );
});

export default Pages;