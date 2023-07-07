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
    /* background-image: url("../../../../img/projectsBgc.jpg"); */
    /* background-color: #676767; */
    background-color: #242424;
    padding: 64px;
    position: relative;

    ${MEDIA_QUERIES.xxlp} {
        gap: 100px;
    }
`

export const ProjectContainer = styled.div`
    display: flex;
    /* flex-direction: column; */
    flex-direction: ${props => props.isMobile ? "column" : "column-reverse"};
    gap: 20px;
    /* padding: 32px; */
    align-items: center;
    justify-content: center;

    ${MEDIA_QUERIES.md} {
        gap: 50px;
    }

    ${MEDIA_QUERIES.xxlp} {
        flex-direction: row;
    }

    ${MEDIA_QUERIES.xxlt} {
        margin-top: ${props => props.isFirst ? "100px" : "0px"};
        gap: 100px;
    }
`

export const ProjectBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;

    ${MEDIA_QUERIES.xxlt} {
        align-items: flex-start;
    }
`

export const TitleBox = styled.div`
    display: flex;
    gap: 6px;
`

export const ProjectTitle = styled.span`
    font-family: Montserrat;
    font-size: 24px;
    letter-spacing: 2px;
    color: #FF8A00;
`

export const Prefix = styled(ProjectTitle)`
    color: white;
`

export const Sufix = styled(Prefix)`
`

export const ProjectDescribe = styled.span`
    /* color: white; */
    color: ${props => props.isOrange ? "#FF8A00" : "white"};
    font-family: Montserrat;
    /* max-width: 800px; */
    line-height: 1.4;
    letter-spacing: 2px;
    text-align: center;

    ${MEDIA_QUERIES.xxl} {
        max-width: 1250px;
    }

    ${MEDIA_QUERIES.xxlt} {
        text-align: left;
    }

    ${MEDIA_QUERIES.xxlp} {
        max-width: 800px;
    }
`