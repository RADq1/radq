import styled from 'styled-components';

export const HomeWrapper = styled.div`
    font-family: 'Raleway', sans-serif;
    min-height: 300vh;
    max-height: 400vh;
`

export const BodyStyles = styled.body`
    ::-webkit-scrollbar-track {
        border-radius: 10px;
    }

    ::-webkit-scrollbar {
        width: 12px;
        height: 12px;
        border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb {
        background: red;
        border-radius: 10px;
    }
`