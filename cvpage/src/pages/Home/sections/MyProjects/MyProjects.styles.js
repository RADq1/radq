import { styled } from "styled-components";

import { MEDIA_QUERIES } from "../../../../constants/mediaQueries";

export const MyProjectsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;
    /* min-height: 100vh; */
    /* background-color: rgb(252,218, 105); */
    background-color: #676767;
    padding: 64px;
`

export const Information = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    font-size: 20px;
    font-weight: 300;
    padding-top: 32px;
    color: white;
`