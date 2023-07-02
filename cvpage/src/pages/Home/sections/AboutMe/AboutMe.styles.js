import { styled } from "styled-components";
import { IoIosArrowDown } from 'react-icons/io';

import { MEDIA_QUERIES } from "../../../../constants/mediaQueries";

export const AboutMeWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    min-height: ${props => props.isSectionOpen ? "400px" : "100px"};
    max-height: ${props => props.isSectionOpen ? "100vh" : "20vh"};
    background-color: #4A4848;
    color: white;
    padding: 64px;
    position: relative;
    transition: 0.3s ease-in-out;
`

export const Title = styled.span`
    font-size: 24px;
    font-family: Montserrat;
    font-weight: 700;
    letter-spacing: 8px;

    ${MEDIA_QUERIES.xxlpp} {
        font-size: 32px;
    }
`

export const Description = styled.div`
    font-weight: 200;
    font-size: 16px;
    overflow: hidden;

    ${MEDIA_QUERIES.lg} {
        min-width: 800px;
        max-width: 1400px;
    }
`

export const ReadMoreBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    position: absolute;
    bottom: 20px;
    cursor: pointer;
`

export const ReadMore = styled.span`
    letter-spacing: 2px;
    font-size: 14px;
    font-weight: 400;
`

export const ArrowIcon = styled(IoIosArrowDown)`
    font-size: 16px;
    transform: ${props => props.isSectionOpen ? "rotate(180deg)" : "rotate(0deg)"};
`