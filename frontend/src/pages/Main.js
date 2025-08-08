import React, { memo } from "react";

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

const Pages = memo(() => {

    return (
        <PagesContainer>
            <NewMember />
        </PagesContainer>
    );
});

export default Pages;