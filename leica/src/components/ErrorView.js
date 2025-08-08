import React, { memo } from 'react';

import styled from 'styled-components';

const ErrorViewContainer = styled.div`
    border: 2px solid #f06;
    padding: 10px 30px;
    background-color: #fee;
    margin: 10px 0;

    h1 {
        color: #f06;
        margin-top: 0;
        margin-bottom: 10px;
    }

    p {
        color: #f06;
        margin: 0;
        margin-bottom: 10px;
    }
`;



const ErrorView = memo(({ status, message }) => {
    if (status !== 200) {
        return (
            <ErrorViewContainer>
                <p>{status}</p>
                <p>{message}</p>
            </ErrorViewContainer>
        );
    }
});

export default ErrorView;