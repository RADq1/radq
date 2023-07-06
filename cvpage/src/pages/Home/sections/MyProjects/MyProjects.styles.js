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
    background-image: url("../../../../img/projectsBgc.jpg");
    /* background-color: #676767; */
    background-color: #242424;
    /* background-color: transparent; */
    padding: 64px;
    position: relative;
`

export const ProjectContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 32px;
    align-items: center;
    justify-content: center;
    margin-top: ${props => props.isFirst ? "100px" : "0px"};

    ${MEDIA_QUERIES.md} {
        gap: 100px;
        flex-direction: row;
    }
`

export const ProjectDescribe = styled.span`
    color: white;
    font-family: Montserrat;
    max-width: 800px;
    line-height: 1.4;
    letter-spacing: 2px;
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

