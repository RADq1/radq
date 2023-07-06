import { styled } from "styled-components";
import { MEDIA_QUERIES } from "../../../../../constants/mediaQueries";

export const TitleBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20%;
    border: ${props => props.isWhite ? "5px solid white" : "5px solid black"};
    color: ${props => props.isWhite ? "white" : "black"};
    padding: 24px 48px;
    /* min-width: 240px; */
    max-width: 300px;
`

export const Title = styled.span`
    font-family: Montserrat;
    font-weight: 700;
    font-size: 24px;
    letter-spacing: 10px;
    color: ${props => props.isWhite ? "white" : "black"};

    ${MEDIA_QUERIES.lg} {
        font-size: 32px;
    }

    ${MEDIA_QUERIES.xxlpp} {
        font-size: 32px;
    }
`